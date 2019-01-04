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
  startDate && endDate ? endDate.diff(startDate, "days") : 0;
