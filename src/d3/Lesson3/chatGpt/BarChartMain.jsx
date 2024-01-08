// App.js
import React from "react";
import BarChart from "./BarChart";

const DATA = [
  { label: "Apples", value: 100 },
  { label: "Bananas", value: 200 },
  { label: "Oranges", value: 50 },
  { label: "Kiwis", value: 150 },
];

const BarChartMain = () => {
  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart data={DATA} />
    </div>
  );
};

export default BarChartMain;
