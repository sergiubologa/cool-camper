import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import withTopProgressBar from "../withTopProgressBar";

const SimpleLayout = props => (
  <React.Fragment>
    <Navbar withTransparentBackground={false} className={props.className} />
    <div
      style={{
        paddingTop: 60,
        flexGrow: 1,
        overflow: "hidden"
      }}
    >
      {props.children}
    </div>
    <Footer />
  </React.Fragment>
);

export default withTopProgressBar(SimpleLayout);
