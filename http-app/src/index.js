import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const RELEASE = "0.1.0";

Sentry.init({
  dsn: "https://154ec099a58b4465811750ab78cf5cb2@sentry.io/1814672",
  release: RELEASE
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
