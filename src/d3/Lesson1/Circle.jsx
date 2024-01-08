import React, { useState } from "react";
import { select } from "d3";
import { useEffect } from "react";
import { useRef } from "react";

const data = [25, 30, 45, 60];

/**
 * We are going to learn some basics of D3.
 * Here we will learn some methods like select,
 * selectAll(): it will select all the elements presents.
 * data(): Data is function takes the data that needs to be synchronized.
 * join(): Join is function which takes 3 callback, which defines the state.
 *         First Callback: When the shape is rendered first time.
 *         Second Callback: When the shape is updated.
 *         Third Callback: When the element is removed from the Dom.
 * @returns 
 */
const Circle = () => {
  const [myData, setMyData] = useState(data);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(myData)
      .join("circle")
      //Join: It will create a new circle, update the circle if some date changes, removes the circle automatically.
      // Problem, if we define attr for enter, update, remove callback then the code would be repetitive,
      // Instead define it after the join.
      .attr("r", (value) => value) // radius: The value of radius will be synchronize from data passed.
      .attr("cx", (value) => value + 2) // x coordinate
      .attr("cy", (value) => value + 2)
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
      <h1>
        Currently the data is:
        {JSON.stringify(myData)}
      </h1>
      <svg ref={svgRef}></svg>
      <button onClick={changeDataClick}>Change data</button>
      <button onClick={removeElements}>Change data</button>
    </>
  );
};

export default Circle;
