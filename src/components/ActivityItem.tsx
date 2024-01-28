import { ChangeEvent, useState, useContext } from 'react';
import { ActivityItemData } from '../typings/Activity';
import { getDateString } from '../utils/dateFormat';
import { MetaDataContext } from './MetaDataContext';
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
  const [editedText, setEditedText] = useState(content);
  const ctx = useContext(MetaDataContext);

  function handleToggleEdit() {
    setIsEditing(!isEditing);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    const { value } = target;

    setEditedText(value);
  }

  function handleSave() {
    const newItem = {
      content: editedText,
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
          onChange={handleChange}
          value={editedText}
          maxLength={25}
        />
        <button className="activity-item__save" onClick={handleSave}>
          <img src="/submit_white.svg" alt="submit" />
        </button>
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
