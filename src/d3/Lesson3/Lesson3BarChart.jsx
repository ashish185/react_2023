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


const data = [25, 30, 45, 60, 20];

const Lesson3BarChart = () => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(myData.map((val, idx) => idx))
      .range([0, 300]).padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]); //Because the height of svg is 150 px.

    const xAxis = axisBottom(xScale)
      .ticks(myData.length)
      .tickFormat((index) => index + 1);

    const yAxis = axisRight(yScale);

    const colorScale = scaleLinear()
      .domain([25, 100, 150])
      .range(["green", "orange", "red"]).clamp(true); // if do not clamp then less<=25 will be green

    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    /* 
     For value 25 coordinates: (0, 25),
     For value 30 coordinates: (50, 30)
     It will return M0,25L50,30
    */

    svg
      .selectAll(".bar")
      .data(myData)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth()).
      transition() //Using animation on the height.
      .attr("height", (value) => 150 - yScale(value))
      .attr("fill", colorScale)
      .attr("stroke", "red")
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

export default Lesson3BarChart;
