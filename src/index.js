import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/evie-theme.css";
import App from "./pages/app/app";
import * as serviceWorker from "./serviceWorker";

/**
 * Polyfils
 */
// https://github.com/iamdustan/smoothscroll
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
