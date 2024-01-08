import React, { useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  scaleLinear,
  axisRight,
} from "d3";
import { useEffect } from "react";
import { useRef } from "react";
import "./my-graph.scss";

const data = [25, 30, 45, 60, 20, 65, 75];

const ConnectedLine = () => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, 6])
      .range([0, 300]);

    /* 
     scaleLinear():Constructs a new linear scale with the specified domain and range,
    */
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]); //Because the height of svg is 150 px.
    const xAxis = axisBottom(xScale);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
    // xAxis(svg.select(".x-axis"));

    // Generate the "d" attribute of path element.
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);


    /* 
     For value 25 coordinates: (0, 25),
     For value 30 coordinates: (50, 30)
     It will return M0,25L50,30
    */

    svg
      .selectAll(".line")
      .data([data])
      /* 
       Q: Why array of array: [data] is passed instead of data?
       A: Data is passed as array of array: [data] because I don't want that d3 create separate path 
       element for every value in array.
       */
      .join("path")
      .attr("d", (value) => {
        // console.log("value", value);
        return myLine(value);
      })
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "blue");
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
      <h1>
        Currently the data is:
        {JSON.stringify(myData)}
      </h1>
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

export default ConnectedLine;
