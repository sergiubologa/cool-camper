import React from "react";
import Caret from "../../../svg/caret";
import ScrollListener from "../../../scroll-listener";
import {
  refHasClassName,
  smoothScrollToSelector
} from "../../../../common/utils";

export default props => {
  const heroSubRef = React.createRef();

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 20) {
      heroSubRef.current.classList.add("invisible");
    } else if (refHasClassName(heroSubRef, "invisible")) {
      heroSubRef.current.classList.remove("invisible");
    }
  };

  const onSubClick = () => {
    const { scrollTo } = props;
    if (scrollTo) smoothScrollToSelector(scrollTo, 20);
  };

  return (
    <ScrollListener onScroll={handleScroll}>
      <div className="hero__sub">
        <span
          ref={heroSubRef}
          onClick={onSubClick}
          ga-on="click"
          ga-event-category="Icon"
          ga-event-action="scoll to de ce CoolCamper"
          ga-event-label="Page header - Hero sub"
        >
          <Caret className="hero__sub__down" />
        </span>
      </div>
    </ScrollListener>
  );
};
