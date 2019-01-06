import moment from "moment";
import prices from "../static-data/prices";

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

export const roundNumber = (value, decimals) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

export const calculatePrice = (startDate, endDate) => {
  const totalNoOfDays = getNoOfDays(startDate, endDate);
  if (totalNoOfDays <= 0) return null;

  // parse dates to moment objects
  startDate = moment(startDate);
  endDate = moment(endDate);

  const highSeasonStart = moment(prices.highSeasonInterval[0]);
  const highSeasonEnd = moment(prices.highSeasonInterval[1]);

  // MAX(MIN(end1,end2)-MAX(start1,start2)+1,0)
  const currentYear = moment().year();
  const minEnd = moment.min(
    highSeasonEnd.year(currentYear),
    endDate.year(currentYear)
  );
  const maxStart = moment.max(
    highSeasonStart.year(currentYear),
    startDate.year(currentYear)
  );
  const shouldAddOneHighSeasonDay = endDate
    .year(currentYear)
    .isAfter(highSeasonEnd.year(currentYear));
  const highSeasonDays = Math.max(
    minEnd.diff(maxStart, "days") + (shouldAddOneHighSeasonDay ? 1 : 0),
    0
  );

  const lowSeasonDays = totalNoOfDays - highSeasonDays;
  const highSeasonPrice = prices.highSeasonPricePerDay * highSeasonDays;
  const lowSeasonPrice = prices.lowSeasonPricePerDay * lowSeasonDays;
  const totalPrice = highSeasonPrice + lowSeasonPrice;
  let eligibleDiscount = {};
  let discountAmount = 0;
  let totalPriceWithDiscount = totalPrice;

  const firstDiscount = prices.discounts[0];
  if (firstDiscount.minDays <= totalNoOfDays) {
    eligibleDiscount = firstDiscount;

    for (let i = 1; i < prices.discounts.length; i++) {
      const currDiscount = prices.discounts[i];
      if (currDiscount.minDays <= totalNoOfDays)
        eligibleDiscount = currDiscount;
    }
  }

  if (eligibleDiscount && eligibleDiscount.percent) {
    discountAmount = roundNumber(
      (totalPrice * eligibleDiscount.percent) / 100,
      2
    );
    totalPriceWithDiscount = totalPrice - discountAmount;
  }

  const averagePricePerDay = roundNumber(totalPrice / totalNoOfDays, 2);

  return {
    totalPrice,
    totalPriceWithDiscount,
    discount: { ...eligibleDiscount, amount: discountAmount },
    deposit: prices.deposit,
    highSeasonDays,
    lowSeasonDays,
    lowSeasonPrice,
    highSeasonPrice,
    totalNoOfDays,
    highSeasonPricePerDay: prices.highSeasonPricePerDay,
    lowSeasonPricePerDay: prices.lowSeasonPricePerDay,
    averagePricePerDay,
    highSeasonStart,
    highSeasonEnd
  };
};
