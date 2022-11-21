export const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)?.map(x => parseInt(x, 16)) as number[];
  return `rgba(${r},${g},${b},${alpha})`;
};

export const parseDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return [day, month, year].join('/');
};

export const parseMoney = (money: number) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  return formatter.format(money);
};

export const parseStatus = (status: string) => {
  switch (status) {
    case 'Rumored':
      return 'Rumor';
    case 'Planned':
      return 'Planeado';
    case 'In Production':
      return 'En producción';
    case 'Post Production':
      return 'Post producción';
    case 'Released':
      return 'Estrenada';
    case 'Canceled':
      return 'Cancelada';
    default:
      return status;
  }
};

export const parseDuration = (duration: number) => {
  const hours = duration / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}min`;
};
