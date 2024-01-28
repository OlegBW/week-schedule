import { useContext } from 'react';
import { dayName } from '../data/daysData';
import { MetaDataContext } from './MetaDataContext';
import '../styles/DaysBar.scss';

export function DaysBar() {
  const ctx = useContext(MetaDataContext);

  if (!ctx) return null;

  const { lang, day } = ctx;

  return (
    <div className="days-bar">
      {dayName[lang].map((val, idx) => (
        <div
          key={idx}
          className={
            day === idx ? `days-bar__day day day_${idx}` : 'days-bar__day day'
          }
        >
          {val.short}
        </div>
      ))}
    </div>
  );
}
