/**
 * Polyfills
 */
import { smoothscroll } from "./polyfills";

import React from "react";
import { hydrate, render } from "react-dom";
import Loadable from "react-loadable";
import "normalize.css";
import "./styles/evie-theme.css";
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

const loadable = loader =>
  Loadable({
    loader,
    loading: () => <div>loading...</div>
  });
const AsyncHome = loadable(() => import("./pages/home"));
const AsyncBooking = loadable(() => import("./pages/booking"));
const AsyncTerms = loadable(() => import("./pages/terms"));
const AsyncCookies = loadable(() => import("./pages/cookies"));
const AsyncPrivacy = loadable(() => import("./pages/privacy"));
const AsyncCancelBooking = loadable(() => import("./pages/cancel-booking"));
const AsyncTechnicalDetails = loadable(() =>
  import("./pages/technical-details")
);
const AsyncNotFound = loadable(() => import("./pages/not-found"));

const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/rezervare-autorulota" component={AsyncBooking} />
        <Route path="/anulare-rezervare" component={AsyncCancelBooking} />
        <Route path="/termeni-si-conditii" component={AsyncTerms} />
        <Route path="/politica-de-cookies" component={AsyncCookies} />
        <Route
          path="/detalii-tehnice-autorulota"
          component={AsyncTechnicalDetails}
        />
        <Route path="/politica-de-confidentialitate" component={AsyncPrivacy} />
        <Route component={AsyncNotFound} />
      </Switch>
    </ScrollToTop>
  </Router>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  Loadable.preloadReady().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
