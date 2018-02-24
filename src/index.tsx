import * as React from "react";
import * as ReactDOM from "react-dom";
import * as htmlparser from "htmlparser2";
import * as fuga from "./models/index";

console.table(fuga);
const rootElement: HTMLElement | null = document.getElementById("root");

ReactDOM.render(<h1>Poepoe</h1>, rootElement);
