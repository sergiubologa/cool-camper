import React from "react";
import SectionContent from "./components/section-content";
import SectionMedia from "./components/section-media";
import SectionMediaSlider from "./components/section-media-slider";
import SectionTitle from "./components/section-title";
import SectionText from "./components/section-text";
import SectionMediaItinerary from "./components/section-media-itinerary";

export default props => {
  const { oneCol } = props;
  const expandedInnerClasses = ["expanded__inner"];
  if (oneCol) expandedInnerClasses.push("expanded__inner__one_col");
  return (
    <div className="expanded landing__section">
      <div className="container">
        <div className={expandedInnerClasses.join(" ")}>{props.children}</div>
      </div>
    </div>
  );
};

export {
  SectionContent,
  SectionMedia,
  SectionMediaSlider,
  SectionTitle,
  SectionText,
  SectionMediaItinerary
};
