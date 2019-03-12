import React from "react";
import FacebookIcon from "../svg/facebook-icon";
import TwitterIcon from "../svg/twitter-icon";
import { openUrlInPopup } from "../../common/utils";
import "../../styles/social-buttons.css";

export default props => {
  const { text, href, type, className, ...rest } = props;
  const classes = [`sc-btn sc--flat sc--${type}`];
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

  const onClick = event => {
    event.preventDefault();
    openUrlInPopup(href, "Spune-le prietenilor de noi", "600", "300");
  };

  return (
    <a
      href={href}
      className={classes.join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      {...rest}
    >
      <span className="sc-icon">
        <Icon />
      </span>
      <span className="sc-text">{text}</span>
    </a>
  );
};
