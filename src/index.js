import { smoothscroll } from "./polyfills";
import React, { Suspense } from "react";
import ReactDom from "react-dom";
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

const AsyncHome = React.lazy(() => import("./pages/home"));
const AsyncBooking = React.lazy(() => import("./pages/booking"));
const AsyncTermsAndConditions = React.lazy(() => import("./pages/terms"));
const AsyncCookies = React.lazy(() => import("./pages/cookies"));
const AsyncPrivacyPolicy = React.lazy(() => import("./pages/privacy"));
const AsyncCancelBooking = React.lazy(() => import("./pages/cancel-booking"));
const AsyncTechDetails = React.lazy(() => import("./pages/technical-details"));
const AsyncNotFound = React.lazy(() => import("./pages/not-found"));

const App = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={AsyncHome} />
        <Route path="/rezervare-autorulota" component={AsyncBooking} />
        <Route path="/anulare-rezervare" component={AsyncCancelBooking} />
        <Route
          path="/termeni-si-conditii"
          component={AsyncTermsAndConditions}
        />
        <Route path="/politica-de-cookies" component={AsyncCookies} />
        <Route
          path="/detalii-tehnice-autorulota"
          component={AsyncTechDetails}
        />
        <Route
          path="/politica-de-confidentialitate"
          component={AsyncPrivacyPolicy}
        />
        <Route component={AsyncNotFound} />
      </Switch>
    </ScrollToTop>
  </Router>
);

const rootElement = document.getElementById("root");
const ConcurrentMode = React.unstable_ConcurrentMode;
const Root = (
  <ConcurrentMode>
    <Suspense fallback={null} maxDuration={5000}>
      <App />
    </Suspense>
  </ConcurrentMode>
);

// hydrate
const root = ReactDom.unstable_createRoot(rootElement, { hydrate: true });
root.render(Root);

// Hack to fix different versions between hydrate and render
// source: https://github.com/stereobooster/react-async-issue
// re-render
// const root = ReactDom.unstable_createRoot(rootElement);
// const callback = rootElement.hasChildNodes()
//   ? () => rootElement.removeChild(rootElement.firstChild)
//   : () => {};
// root.render(Root, callback);

// if (rootElement.hasChildNodes()) {
//   hydrate(LazyApp, rootElement);
// } else {
//   render(LazyApp, rootElement);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
