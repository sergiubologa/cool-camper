/**
 * Polyfills
 */
import { smoothscroll } from "./polyfills";

import React from "react";
import { hydrate, render } from "react-dom";
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

const App = () => (
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
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
