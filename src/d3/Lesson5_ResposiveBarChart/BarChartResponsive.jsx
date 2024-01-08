import React, { useState, useEffect, useRef } from "react";
import { select, axisBottom, scaleLinear, axisRight, scaleBand } from "d3";
import "./my-graph.scss";
import ResizeObserver from "resize-observer-polyfill";

/**
 * This is a resize observer hook. When it first renders it return null.
 * @param {Object} ref: It accept reference object.
 * @returns 
 */
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) =>
      entries.forEach((entry) => setDimensions(entry.contentRect))
    );
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);

  return dimensions;
};

/**
 * Here purpose id add interactivity on the graph like Tooltip on the bar:
 * @returns JSX
 */
const BarChartResponsive = ({ data }) => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();
  const dimensions = useResizeObserver(svgRef);

  useEffect(() => {
    if(!dimensions){
      return;
    }
    const { width, height } = dimensions;
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(myData.map((val, idx) => idx))
      .range([0, width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([height, 0]); //Because the height of svg is 150 px.

    const xAxis = axisBottom(xScale)
      .ticks(myData.length)
      .tickFormat((index) => index + 1);

    const yAxis = axisRight(yScale);

    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis);

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
      .attr("y", -height)
      .attr("width", xScale.bandwidth())
      .on("click", (event, yValue) => {
        svg
          .selectAll(".tooltip")
          .data([yValue])
          .join("text")
          .attr("class", "tooltip")
          .text(yValue)
          .attr("x", xScale(data.indexOf(yValue)) + xScale.bandwidth() / 2)
          .attr("y", yScale(yValue))
          .attr("text-anchor", "middle");
      })
      .transition() //Using animation on the height.
      .attr("height", (value) => 150 - yScale(value))
      .attr("fill", colorScale)
      .attr("stroke", "red");
  }, [myData, dimensions]);

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
      <div className="graph-container">
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
      <div style={{ marginTop: "100px" }}>
        <button onClick={changeDataClick}>Change data</button>
        <button onClick={removeElements}>Change data</button>
      </div>
    </>
  );
};

export default BarChartResponsive;
