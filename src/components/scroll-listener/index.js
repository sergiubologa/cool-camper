import { useEffect } from "react";

export default props => {
  useEffect(() => {
    window.addEventListener("scroll", props.onScroll);
    return () => window.removeEventListener("scroll", props.onScroll);
  });

  return props.children;
};
