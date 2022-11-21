export const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)?.map(x => parseInt(x, 16)) as number[];
  return `rgba(${r},${g},${b},${alpha})`;
};

export const parseDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return [month, day, year].join('/');
};

export const parseDuration = (duration: number) => {
  const hours = duration / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}min`;
};
