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
import TermsAndConditions from "./pages/terms";
import PrivacyPolicy from "./pages/privacy";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Run polyfills
smoothscroll.polyfill();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/termeni-si-conditii" component={TermsAndConditions} />
      <Route path="/politica-de-confidentialitate" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
