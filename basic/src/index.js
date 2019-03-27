import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Input from "./Input";

let data = [
  "apple",
  "apricot",
  "banana",
  "biscuit",
  "bread",
  "chips",
  "rice",
  "pista",
  "peach",
  "fish",
  "chicken",
  "mutton"
];

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
