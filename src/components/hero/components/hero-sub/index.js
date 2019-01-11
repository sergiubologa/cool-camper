import React from "react";
import Caret from "../../../svg/caret";
import ScrollListener from "../../../scroll-listener";
import {
  refHasClassName,
  smoothScrollToSelector
} from "../../../../common/utils";

export default class HeroSub extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.onSubClick = this.onSubClick.bind(this);
    this.heroSubRef = React.createRef();
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 20) {
      this.heroSubRef.current.classList.add("invisible");
    } else if (refHasClassName(this.heroSubRef, "invisible")) {
      this.heroSubRef.current.classList.remove("invisible");
    }
  }

  onSubClick() {
    const { scrollTo } = this.props;
    if (scrollTo) smoothScrollToSelector(scrollTo, 20);
  }

  render() {
    return (
      <ScrollListener onScroll={this.handleScroll}>
        <div className="hero__sub">
          <span
            ref={this.heroSubRef}
            onClick={this.onSubClick}
            ga-on="click"
            ga-event-category="Icon"
            ga-event-action="click"
            ga-event-label="page header"
            ga-event-value="Hero sub"
          >
            <Caret className="hero__sub__down" />
          </span>
        </div>
      </ScrollListener>
    );
  }
}
