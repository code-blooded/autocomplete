import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Input from "./Input";
import { generate } from "./generate";

// let data = [
//   "apple",
//   "apricot",
//   "banana",
//   "biscuit",
//   "bread",
//   "chips",
//   "rice",
//   "pista",
//   "peach",
//   "fish",
//   "chicken",
//   "mutton"
// ];
let data = [];

for (let index = 0; index < 10; index++) {
  data.push(generate());
}

data = data.sort();

function App() {
  return (
    <div className="App">
      <Input data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
