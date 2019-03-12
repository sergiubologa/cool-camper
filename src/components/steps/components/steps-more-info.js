import React, { useState } from "react";
import Button from "../../inputs/button";

export default props => {
  const [moreInfoExpanded, setMoreInfoState] = useState(false);
  const { text, children } = props;
  const contentClasses = ["steps__more__info__content"];
  if (moreInfoExpanded) {
    contentClasses.push("content__expanded");
  }

  return (
    <div className="container steps__more__info">
      <div className={contentClasses.join(" ")}>{children}</div>
      <Button
        onClick={() => setMoreInfoState(!moreInfoExpanded)}
        ga-on="click"
        ga-event-category="Button"
        ga-event-action={text + (moreInfoExpanded ? " -" : " +")}
        ga-event-label="why us"
      >
        <span>{moreInfoExpanded ? "-" : "+"}</span> {text}
      </Button>
    </div>
  );
};
