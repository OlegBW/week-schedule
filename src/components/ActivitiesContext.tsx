import { createContext } from 'react';
import { ActivityItemData } from '../typings/Activity';

interface ActivitiesContext {
  data: ActivityItemData[];
  setData: (id: number, newData: ActivityItemData) => void;
}

export const ActivitiesContext = createContext<ActivitiesContext | null>(null);
