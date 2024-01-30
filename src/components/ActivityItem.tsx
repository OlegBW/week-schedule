import { useState, useContext, useRef } from 'react';
import { ActivityItemData } from '../typings/Activity';
import { getDateString } from '../utils/dateFormat';
import { MetadataContext } from './MetadataContext';
import '../styles/ActivityItem.scss';

interface ActivityItemProps {
  content: string;
  lastUpdate: string;
  id: number;
  onEdit: (id: number, newData: ActivityItemData) => void;
}

export function ActivityItem({
  content,
  lastUpdate,
  id,
  onEdit,
}: ActivityItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const ctx = useContext(MetadataContext);

  function handleToggleEdit() {
    setIsEditing(!isEditing);
  }

  function handleSave() {
    if (!inputRef.current) return;

    const newItem = {
      content: inputRef.current.value,
      lastUpdate: getDateString(),
    };

    onEdit(id, newItem);
    handleToggleEdit();
  }

  if (!ctx) return null;

  const { day } = ctx;

  if (isEditing) {
    return (
      <div
        className={
          id === day
            ? `activities-list__activity-item activity-item activity-item_${day}`
            : 'activities-list__activity-item activity-item'
        }
      >
        <input
          type="text"
          className="activity-item__input"
          defaultValue={content}
          maxLength={100}
          ref={inputRef}
        />
        <button className="activity-item__save" onClick={handleSave}></button>
      </div>
    );
  }

  return (
    <div
      className={
        id === day
          ? `activities-list__activity-item activity-item activity-item_${day}`
          : 'activities-list__activity-item activity-item'
      }
      onClick={handleToggleEdit}
    >
      <div className="activity-item__content">{content}</div>
      <div className="activity-item__update">{lastUpdate}</div>
    </div>
  );
}
