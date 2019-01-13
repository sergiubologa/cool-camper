/**
 * Polyfils
 */
import "core-js/fn/object/values";
import "core-js/fn/object/entries";
import "core-js/es6/map";
import "core-js/es6/set";
// Source: https://github.com/chrisdickinson/raf
import "raf/polyfill";
// Source: https://github.com/iamdustan/smoothscroll
import smoothscroll from "smoothscroll-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/evie-theme.css";
import Home from "./pages/home";
import Booking from "./pages/booking";
import TermsAndConditions from "./pages/terms";
import Cookies from "./pages/cookies";
import PrivacyPolicy from "./pages/privacy";
import CancelBooking from "./pages/cancel-booking";
import TechDetails from "./pages/technical-details";
import NotFound from "./pages/not-found";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import "moment/locale/ro";
import "autotrack";

// Disable GA for non-prod environments
if (process.env.NODE_ENV !== "production") {
  window["ga-disable-UA-132033324-1"] = true;
}

// Run polyfills
smoothscroll.polyfill();

window.onerror = function(message, url, lineNo, colNo, error) {
  console.log(arguments);

  let container = document.createElement("div");

  container.style.color = "red";
  container.style.position = "fixed";
  container.style.background = "#eee";
  container.style.padding = "2em";
  container.style.top = "1em";
  container.style.left = "1em";

  let msg = document.createElement("pre");
  msg.innerText = [
    "Message: " + message,
    "URL: " + url,
    "Line: " + lineNo,
    "Column: " + colNo,
    "Stack: " + (error && error.stack)
  ].join("\n");

  container.appendChild(msg);

  document.body.appendChild(container);
};

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rezervare-autorulota" component={Booking} />
        <Route path="/anulare-rezervare" component={CancelBooking} />
        <Route path="/termeni-si-conditii" component={TermsAndConditions} />
        <Route path="/politica-de-cookies" component={Cookies} />
        <Route path="/detalii-tehnice-autorulota" component={TechDetails} />
        <Route
          path="/politica-de-confidentialitate"
          component={PrivacyPolicy}
        />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
