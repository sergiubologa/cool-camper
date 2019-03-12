import React, { useEffect } from "react";
import Slider from "react-slick";
import "../../../styles/image-carousel.css";

let clientX;
let firstClientX;

export default props => {
  const sliderRef = React.createRef();
  const { images, className, header, fullWidth, ...rest } = props;
  const sliderSettings = {
    dots: true,
    swipeToSlide: true,
    initialSlide: 0,
    lazyLoad: false
  };
  const classes = ["expanded__media", "expanded__media__slider"];
  if (fullWidth) classes.push("expanded__media__slider__full__width");
  if (className) classes.push(className);

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
  };

  const preventTouch = e => {
    const minValue = 5; // threshold
    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", preventTouch, { passive: false });

    return function cleanupTouchListeners() {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", preventTouch, {
        passive: false
      });
    };
  });

  return (
    <div className={classes.join(" ")} {...rest}>
      {header && header}
      <div className="slider__container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((img, imgIndex) => (
            <div key={imgIndex}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
