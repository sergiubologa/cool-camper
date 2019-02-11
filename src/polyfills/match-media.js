export default (window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false
  })));
