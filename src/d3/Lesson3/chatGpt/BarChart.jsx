// BarChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    // Clear any existing chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Set up the SVG container
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", 500) // Adjust the width as needed
      .attr("height", 400); // Adjust the height as needed

    // Set up scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, 400]) // Adjust the range based on the width of the SVG container
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, 300]); // Adjust the range based on the height of the SVG container

    // Create x-axis
    svg.append("g")
      .attr("transform", `translate(0, ${300})`) // Move x-axis to the bottom
      .call(d3.axisBottom(xScale));

    // Create y-axis with values as labels
    svg.append("g")
      .call(d3.axisLeft(yScale)
        .ticks(5) // Adjust the number of ticks as needed
        .tickFormat(d => d)
      )
      .append("text")
      // .attr("transform", "rotate(-90)")
      .attr("y", 6)
      // .attr("dy", "-3em")
      .style("text-anchor", "end")
      .text("Y Axis Label"); // Set the y-axis label text

    // Create bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d.label))
      .attr("y", d => 300 - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => yScale(d.value))
      .attr("fill", "steelblue"); // Adjust the color as needed
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default BarChart;
