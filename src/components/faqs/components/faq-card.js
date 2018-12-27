import React from "react";
import CaretIcon from "../../svg/caret";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onQuestionClick = this.onQuestionClick.bind(this);
    this.state = {
      answerOpened: false
    };
  }

  onQuestionClick() {
    this.setState({ answerOpened: !this.state.answerOpened });
  }

  render() {
    const { question, answer, ...rest } = this.props;
    const { answerOpened } = this.state;
    const iconDirection = answerOpened ? "up" : "down";
    const cardClasses = ["faq__card"];
    if (answerOpened) cardClasses.push("opened");
    return (
      <div className={cardClasses.join(" ")} {...rest}>
        <p className="faq__question" onClick={this.onQuestionClick}>
          <span>{question}</span>
          <CaretIcon
            direction={iconDirection}
            className="faq__question_caret"
          />
        </p>
        <p className="faq__answer">{answer}</p>
      </div>
    );
  }
}
