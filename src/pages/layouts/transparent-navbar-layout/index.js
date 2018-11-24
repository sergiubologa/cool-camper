import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import withTopProgressBar from "../withTopProgressBar";

const TransparentNavbarLayout = props => (
  <React.Fragment>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default withTopProgressBar(TransparentNavbarLayout);
