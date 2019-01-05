import React from "react";
import FacebookIcon from "../svg/facebook-icon";
import TwitterIcon from "../svg/twitter-icon";
import { openUrlInPopup } from "../../common/utils";
import "../../styles/social-buttons.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { href } = this.props;
    event.preventDefault();
    openUrlInPopup(href, "Spune-le prietenilor de noi", "600", "300");
  }

  render() {
    const { text, href, type, className } = this.props;
    const classes = [`sc-btn sc--${type}`];
    if (className) classes.push(className);

    let Icon = FacebookIcon;
    switch (type) {
      case "facebook":
        Icon = FacebookIcon;
        break;
      case "twitter":
        Icon = TwitterIcon;
        break;
      default:
        break;
    }
    return (
      <a
        href={href}
        className={classes.join(" ")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={this.onClick}
      >
        <span className="sc-icon">
          <Icon />
        </span>
        <span className="sc-text">{text}</span>
      </a>
    );
  }
}
