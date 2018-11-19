export const refHasClassName = (ref, className) => {
  if (!ref || !ref.current || !ref.current.className) return false;
  const regex = new RegExp(`(?:^|s)${className}(?!S)`);
  return ref.current.className.match(regex);
};
