import { useState, useEffect } from 'react';
import { ActivityItemData } from '../typings/Activity';
import localforage from 'localforage';

export function useLocalForage() {
  const [data, setData] = useState<ActivityItemData[] | null>(null);

  useEffect(() => {
    localforage
      .getItem<ActivityItemData[] | null>('activities')
      .then((activitiesData) => setData(activitiesData));
  }, []);

  return data;
}
