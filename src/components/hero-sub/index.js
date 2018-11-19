import React from "react";
import Caret from "../svg/caret";
import ScrollListener from "../scroll-listener";
import { refHasClassName } from "../../common/utils";

export default class HeroSub extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
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

  render() {
    return (
      <ScrollListener handleScroll={this.handleScroll}>
        <div className="hero__sub">
          <span id="scrollToNext" ref={this.heroSubRef}>
            <Caret className="hero__sub__down" />
          </span>
        </div>
      </ScrollListener>
    );
  }
}
