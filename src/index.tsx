import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/app";

const rootElement: HTMLElement | null = document.getElementById("root");

if (Worker) {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({ payload: { type: "start" } });
}

ReactDOM.render(<App />, rootElement);
