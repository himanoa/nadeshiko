import * as React from "react";
import * as ReactDOM from "react-dom";
import * as htmlparser from "htmlparser2";

const rootElement: HTMLElement | null = document.getElementById("root");

if (Worker) {
  const worker = new Worker("rssWorker.bundle.js");
  worker.postMessage({ payload: { type: "start" } });
}
ReactDOM.render(<h1>Poepoe</h1>, rootElement);
