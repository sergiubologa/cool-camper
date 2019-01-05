import React from "react";
import FacebookIcon from "../svg/facebook-icon";
import TwitterIcon from "../svg/twitter-icon";
import "../../styles/social-buttons.css";

export default props => {
  const { text, href, type, className } = props;
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
    <a href={href} className={classes.join(" ")}>
      <span class="sc-icon">
        <Icon />
      </span>
      <span class="sc-text">{text}</span>
    </a>
  );
};
