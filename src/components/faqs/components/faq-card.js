import React, { useState } from "react";
import CaretIcon from "../../svg/caret";

export default props => {
  const [answerOpened, setAnswerState] = useState(false);
  const { question, answer, ...rest } = props;
  const iconDirection = answerOpened ? "up" : "down";
  const cardClasses = ["faq__card"];
  if (answerOpened) cardClasses.push("opened");

  return (
    <div className={cardClasses.join(" ")} {...rest}>
      <p
        className="faq__question"
        onClick={() => setAnswerState(!answerOpened)}
      >
        <span>{question}</span>
        <CaretIcon direction={iconDirection} className="faq__question_caret" />
      </p>
      <p className="faq__answer">{answer}</p>
    </div>
  );
};
