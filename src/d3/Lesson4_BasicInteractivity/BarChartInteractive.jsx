import React, { useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  axisRight,
  scaleBand,
} from "d3";
import { useEffect } from "react";
import { useRef } from "react";
import "./my-graph.scss";

const data = [25, 30, 45, 60, 140];

/**
 * Here purpose id add interactivity on the graph like Tooltip on the bar:
 * @returns JSX
 */
const BarChartInteractive = () => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(myData.map((val, idx) => idx))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]); //Because the height of svg is 150 px.

    const xAxis = axisBottom(xScale)
      .ticks(myData.length)
      .tickFormat((index) => index + 1);

    const yAxis = axisRight(yScale);

    const colorScale = scaleLinear()
      .domain([25, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true); // if do not clamp then less<=25 will be green

    svg
      .selectAll(".bar")
      .data(myData)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)") 
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .on("click", (event, yValue) => {
        console.log("xScale", xScale(data.indexOf(yValue)));
        console.log("yScale", yScale(yValue));
        svg
          .selectAll(".tooltip")
          .data([yValue])
          .join("text")
          .attr("class", "tooltip")
          .text(yValue)
          .attr("x", xScale(data.indexOf(yValue)) + xScale.bandwidth() / 2)
          .attr("y", yScale(yValue)) //Place hover text slightly above the bar.
          .attr("text-anchor", "middle");
          /* 
           Problem: 'text-anchor:it will center based on the left bar edge,
            we want to center it on the bar for this we replace,
             .attr("x", xScale(data.indexOf(yValue)))
             to
             xScale(data.indexOf(yValue)) + xScale.bandwidth() / 2)
          */
      })
      .transition() //Using animation on the height.
      .attr("height", (value) => 150 - yScale(value))
      .attr("fill", colorScale)
      .attr("stroke", "red");
  }, [myData]);

  /**
   * When ever the button is clicked, It will add five to every element of myData.
   * Thus change data cause useEffect hook to call which will invoke update callback of join method.
   * Which will replace the class name of the circle to "updated".
   */
  const changeDataClick = () => {
    const newData = myData.map((val) => val + 5);
    setMyData(() => newData);
  };

  const removeElements = () => {
    const newData = myData.filter((val) => val > 45);
    setMyData(() => newData);
  };

  return (
    <>
      <h2>
        Currently the data is:
        {JSON.stringify(myData)}
      </h2>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <div style={{ marginTop: "100px" }}>
        <button onClick={changeDataClick}>Change data</button>
        <button onClick={removeElements}>Change data</button>
      </div>
    </>
  );
};

export default BarChartInteractive;
