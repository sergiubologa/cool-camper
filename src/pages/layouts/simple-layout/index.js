import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import withTopProgressBar from "../withTopProgressBar";

const SimpleLayout = props => (
  <React.Fragment>
    <Navbar withTransparentBackground={false} />
    <div
      style={{
        paddingTop: 60,
        flexGrow: 1
      }}
    >
      <div className="container">{props.children}</div>
    </div>
    <Footer />
  </React.Fragment>
);

export default withTopProgressBar(SimpleLayout);
