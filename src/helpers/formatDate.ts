export const formatDate = (date: string): string => {
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateArr: any = date.match(/\d{1,}/g);
  const day: string = dateArr[2];
  const monthIndex: number = dateArr[1] - 1;
  const year: string = dateArr[0];

  return `${day} ${monthNames[monthIndex]} ${year}`;
};
