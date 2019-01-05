import moment from "moment";

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
    window.screenLeft != undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop != undefined ? window.screenTop : window.screenY;

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

export const isEmailValid = email => {
  // source: https://emailregex.com/
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const isPhoneValid = phone => {
  // Valid formats:
  // XXXX-XXX-XXX
  // XXXX.XXX.XXX
  // XXXX XXX XXX
  // XXXXXXXXXX
  const regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  return regex.test(phone);
};

export const isFirstNameValid = firstName => firstName && firstName.length > 1;
export const isLastNameValid = lastName => lastName && lastName.length > 1;

// TODO - implement function
export const formatPhoneForDisplay = phone => phone;

export const getNoOfDays = (startDate, endDate) =>
  startDate && endDate ? moment(endDate).diff(moment(startDate), "days") : 0;
