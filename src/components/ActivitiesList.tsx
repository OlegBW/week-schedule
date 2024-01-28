import { useContext } from 'react';
import { ActivityItem } from './ActivityItem';
import { ActivitiesContext } from './ActivitiesContext';
import '../styles/ActivitiesList.scss';

export function ActivitiesList() {
  const ctx = useContext(ActivitiesContext);

  if (!ctx) return null;

  const { data, setData } = ctx;

  return (
    <div className="activities-list">
      {data.map((val, idx) => {
        const { content, lastUpdate } = val;
        return (
          <ActivityItem
            key={idx}
            content={content}
            lastUpdate={lastUpdate}
            id={idx}
            onEdit={setData}
          />
        );
      })}
    </div>
  );
}
