export const refHasClassName = (ref, className) => {
  if (!ref || !ref.current || !ref.current.classList) return false;
  return ref.current.classList.contains(className);
};
