import React from "react";
import SectionContent from "./components/section-content";
import SectionMedia from "./components/section-media";
import SectionTitle from "./components/section-title";
import SectionText from "./components/section-text";
import SectionMediaItinerary from "./components/section-media-itinerary";

export default props => (
  <div className="expanded landing__section">
    <div className="container">
      <div className="expanded__inner">{props.children}</div>
    </div>
  </div>
);

export {
  SectionContent,
  SectionMedia,
  SectionTitle,
  SectionText,
  SectionMediaItinerary
};
