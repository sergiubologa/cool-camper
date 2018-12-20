import React from "react";
import Slider from "react-slick";
import "../../../styles/image-carousel.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps && this.props && prevProps.images !== this.props.images) {
  //     const newImgIndex = 0;
  //     const dontAnimate = true;
  //     setTimeout(() => {
  //       this.sliderRef.current.slickGoTo(newImgIndex, dontAnimate);
  //     }, 1000);
  //   }
  // }

  render() {
    const { images, className, header } = this.props;
    const sliderSettings = {
      dots: true,
      swipeToSlide: true,
      initialSlide: 0,
      lazyLoad: true
    };
    const classes = ["expanded__media", "expanded__media__slider"];
    if (className) classes.push(className);

    return (
      <div className={classes.join(" ")}>
        {header && header}
        <div className="slider__container">
          <Slider ref={this.sliderRef} {...sliderSettings}>
            {images.map((img, imgIndex) => (
              <div key={imgIndex}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
