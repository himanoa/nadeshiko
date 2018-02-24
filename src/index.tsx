import * as React from "react";
import * as ReactDOM from "react-dom";
import * as htmlparser from "htmlparser2";
import * as scheme from "./models/index.ts";

console.table(scheme);
const rootElement: HTMLElement | null = document.getElementById("root");

ReactDOM.render(<h1>Poepoe</h1>, rootElement);
