import React from "react";
import Plot from "react-plotly.js";

const CategorySummaryPieChart = ({ categorySummaryList }) => {
  var data = [
    {
      values: categorySummaryList.map((category) => category.product_count),
      labels: categorySummaryList.map((category) => category.title),
      type: "pie",
    },
  ];
  return (
    <div>
      <Plot
        data={data}
        layout={{ width: 800, height: 400, title: "Category Product Summary" }}
      />
    </div>
  );
};

export default CategorySummaryPieChart;
