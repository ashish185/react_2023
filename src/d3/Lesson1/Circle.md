## Learning about circle.


 ### What does join do?
 Appends, removes and reorders elements as necessary to match the data that was previously bound by selection.data, returning the merged enter and update selection.

 D3 Documentation: https://d3js.org/d3-selection/joining#selection_join

  - [Either we can provide join callback: enter, update](#section-1)
  - [or we can directly pass circle](#section-2)

<a id="section-1">Join callback: enter, update, exit</a>

```js
 useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(myData)
      .join(
        (enter) => //Using 3 callbacks: enter, update, delete
          enter
            .append("circle")
            .attr("class", "new"),
        (update) =>
          update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value) 
      .attr("cx", (value) => value + 2) 
      .attr("cy", (value) => value + 2)
      .attr("stroke", "red")
  }, [myData]);

```

<a id="section-2">Directly passing the circle class</a>

```js
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(myData)
      .join("circle")
      .attr("r", (value) => value) // radius: The value of radius will be synchronize from data passed.
      .attr("cx", (value) => value + 2) // x coordinate
      .attr("cy", (value) => value + 2)
      .attr("stroke", "red");
  }, [myData]);
```

## Ref
https://www.youtube.com/watch?v=9uEmNgHzPhQ&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=1
