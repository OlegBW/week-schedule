import { useState, useEffect } from 'react';
import { DaysBar } from './components/DaysBar';
import { ActivitiesList } from './components/ActivitiesList';
import { MetadataContext } from './components/MetadataContext';
import { ActivitiesContext } from './components/ActivitiesContext';
import { ActivityItemData } from './typings/Activity';
import { useLocalForage } from './hooks/useLocalForage';
import localforage from 'localforage';
import './styles/App.scss';

const ActivitiesMock = [
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
  {
    content: 'Empty',
    lastUpdate: '',
  },
];

function App() {
  const localForageData = useLocalForage();
  const [activities, setActivities] = useState(
    localForageData || ActivitiesMock
  );

  useEffect(() => {
    if (localForageData) {
      setActivities(localForageData);
    }
  }, [localForageData]);

  const day = new Date().getDay();
  const lang = 'eng';

  function handleEdit(id: number, data: ActivityItemData) {
    const newActivities = [...activities];
    newActivities[id] = data;

    setActivities(newActivities);
    localforage.setItem('activities', newActivities);
  }

  return (
    <MetadataContext.Provider
      value={{
        lang,
        day,
        theme: 'dark',
      }}
    >
      <ActivitiesContext.Provider
        value={{
          data: activities,
          setData: handleEdit,
        }}
      >
        <div className="app">
          <DaysBar />
          <ActivitiesList />
        </div>
      </ActivitiesContext.Provider>
    </MetadataContext.Provider>
  );
}

export default App;
