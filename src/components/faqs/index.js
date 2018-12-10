import React from "react";
import FaqCard from "./components/faq-card";
import "../../styles/faqs.css";

export default props => {
  const { questions, className } = props;
  const classes = ["faq__container"];
  if (className) classes.push(className);

  if (!questions || questions.length <= 0) return;

  return (
    <div className={classes.join(" ")}>
      {questions.map((q, index) => (
        <FaqCard key={index} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};
