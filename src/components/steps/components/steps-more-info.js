import React from "react";
import Button from "../../inputs/button";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);

    this.state = {
      moreInfoExpanded: false
    };
  }

  handleMoreInfoClick() {
    this.setState({
      moreInfoExpanded: !this.state.moreInfoExpanded
    });
  }

  render() {
    const { text, children } = this.props;
    const { moreInfoExpanded } = this.state;
    const contentClasses = ["steps__more__info__content"];
    if (moreInfoExpanded) {
      contentClasses.push("content__expanded");
    }

    return (
      <div className="container steps__more__info">
        <Button onClick={this.handleMoreInfoClick}>
          <span>{moreInfoExpanded ? "-" : "+"}</span> {text}
        </Button>
        <div className={contentClasses.join(" ")}>{children}</div>
      </div>
    );
  }
}
