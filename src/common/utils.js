export const refHasClassName = (ref, className) => {
  if (!ref || !ref.current || !ref.current.classList) return false;
  return ref.current.classList.contains(className);
};

export const smoothScrollToSelector = (selector, extraOffset = 0) => {
  const element = document.querySelector(selector);
  if (element) {
    const scrollBy = element.getBoundingClientRect().top;
    const navbarHeight = 60;
    window.scrollBy({
      top: scrollBy - navbarHeight - extraOffset,
      behavior: "smooth"
    });
  }
};

export const openUrlInPopup = (url, title, w, h) => {
  // Fixes dual-screen position
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    "scrollbars=yes, width=" +
      w / systemZoom +
      ", height=" +
      h / systemZoom +
      ", top=" +
      top +
      ", left=" +
      left
  );

  // Puts focus on the newWindow
  if (window.focus) newWindow.focus();
};

export const dayOrDays = number => (number === 1 ? "zi" : "zile");

export const isSSR = () => !navigator || navigator.userAgent === "ReactSnap";

export const getTimeOfDayString = () => {
  let result;

  const intervals = [
      [0, 4, "night"],
      [4, 10, "morning"],
      [10, 19, "afternoon"],
      [19, 24, "night"]
    ],
    hrs = new Date().getHours();

  for (var i = 0; i < intervals.length; i++) {
    if (hrs >= intervals[i][0] && hrs <= intervals[i][1]) {
      result = intervals[i][2];
      break;
    }
  }

  return result;
};
