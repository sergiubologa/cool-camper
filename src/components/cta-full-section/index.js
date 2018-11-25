import React from "react";
import CTATitle from "./components/cta-title";
import CTAMessage from "./components/cta-message";

export default props => (
  <div className="cta cta--reverse">
    <div className="container">
      <div className="cta__inner">{props.children}</div>
    </div>
  </div>
);

export { CTATitle, CTAMessage };
