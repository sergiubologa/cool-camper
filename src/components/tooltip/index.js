import React, { useState } from "react";
import Popover from "react-popover";
import QuestionMark from "../svg/question";
import IconButton from "../inputs/icon-button";

export default props => {
  const [isOpen, setIsOpen] = useState(false);
  const { children } = props;
  return (
    <Popover
      isOpen={isOpen}
      body={children}
      place="above"
      onOuterAction={() => setIsOpen(!isOpen)}
      tipSize={7}
      enterExitTransitionDurationMs={0}
      refreshIntervalMs={0}
    >
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        className="popover__button"
      >
        <QuestionMark width={17} />
      </IconButton>
    </Popover>
  );
};
