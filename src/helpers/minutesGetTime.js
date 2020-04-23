export const minutesGetTime = (minutes) => {
  const h = minutes / 60 | 0,
        m = minutes % 60 | 0;
  return `${h}h ${m}m`;
};