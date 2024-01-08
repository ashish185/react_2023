## Diff between scaleBand and scaleLinear?
Basically dono scale create krne k kam aate h.
    and scale means ki kitne tick honge or har tick m kita gap hoga.
  1. scaleBand:
   - Purpose: It is used for categorical or ordinal data like names of items, months, or other non-numeric labels. That means values like 1.2 is not ordinal.
   - Usage: It is often used for creating bar charts.

   ```js
   const xScale = d3.scaleBand()
  .domain(['Category1', 'Category2', 'Category3'])
  .range([0, width])
  .padding(0.1);
   ```
  2. scaleLinear:
   - Purpose: scaleLinear is used for continuous, quantitative data. It's suitable for data that has a numerical range with a meaningful order.
   - Usage: It is often used for creating scatter plots, line charts, or any other visualization where the data has a continuous range.
    
   ```js
   const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
   ```    
Conclusion: So basically bar graph ki jo height vo scalerLinear honi chiye because we are mapping the tip of bar graph to the height and jo x scale h vo scaleBand ho skta because x does not matter it can be label or any thing else.

## bandwidth() on Scale?

   ```js
   const xScale = d3.scaleBand().domain(['Category1', 'Category2', 'Category3']).range([0, width]).padding(0.1);

  //Give the bar width
   const xBandWidth= xScale.bandwidth();
  ```
