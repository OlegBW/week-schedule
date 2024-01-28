import { createContext } from 'react';

interface MetaDataContext {
  lang: 'ua' | 'eng';
  day: number;
  theme: 'light' | 'dark';
}

export const MetaDataContext = createContext<MetaDataContext | null>(null);
