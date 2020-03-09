import React from "react";
import "./styles.css";

export default function App() {
  let url =
    "https://raw.githubusercontent.com/wakayama-pref-org/road-regulation-information_abnormal-weather/master/CSV/Road-regulation-information_Abnormal-weather.csv";
  fetch(url)
    .then(response => response.text())
    .then(transform);
  return (
    <div className="App">
      <h1>Component to Fetch CSV.</h1>
      <h2>You can see fetch result by opening debug tool.</h2>
      <div />
    </div>
  );
}
export function transform(str) {
  let data = str.split("\n").map(i => i.split(","));
  let headers = data.shift();
  let output = data.map(d => {
    let obj = {};
    headers.map((h, i) => (obj[headers[i]] = d[i]));
    return obj;
  });
  console.log(output);
}
