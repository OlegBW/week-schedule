import { createContext } from 'react';

interface MetadataContext {
  lang: 'ua' | 'eng';
  day: number;
  theme: 'light' | 'dark';
}

export const MetadataContext = createContext<MetadataContext | null>(null);
