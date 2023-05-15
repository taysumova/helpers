export const convertStringToColor = (
  name: string,
  opacity: number,
  hashBase: number
): string => {
  let hash = 0;

  if (!name.length) return "";

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  const rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * hashBase)) & 255;
    rgb[i] = value;
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};
