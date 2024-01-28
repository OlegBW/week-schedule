type DayName = {
  short: string;
  long: string;
};

export const dayName: Record<string, Array<DayName>> = {
  ua: [
    {
      short: 'Нд',
      long: 'Неділя',
    },
    {
      short: 'Пн',
      long: 'Понеділок',
    },
    {
      short: 'Вт',
      long: 'Вівторок',
    },
    {
      short: 'Ср',
      long: 'Середа',
    },
    {
      short: 'Чт',
      long: 'Четвер',
    },
    {
      short: 'Пт',
      long: "П'ятниця",
    },
    {
      short: 'Сб',
      long: 'Субота',
    },
    {
      short: 'Нд',
      long: 'Неділя',
    },
  ],
  eng: [
    {
      short: 'Su',
      long: 'Sunday',
    },
    {
      short: 'Mo',
      long: 'Monday',
    },
    {
      short: 'Tu',
      long: 'Tuesday',
    },
    {
      short: 'We',
      long: 'Wednesday',
    },
    {
      short: 'Th',
      long: 'Thursday',
    },
    {
      short: 'Fr',
      long: 'Friday',
    },
    {
      short: 'Sa',
      long: 'Saturday',
    },
  ],
};

//&rsquo;

export const dayColor = [
  '#d35400',
  '#9b59b6',
  '#3498db',
  '#2ecc71',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
];
