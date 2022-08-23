import React from "react";
import Plot from "react-plotly.js";

const CategorySummaryBarChart = ({ categorySummaryList }) => {
  return (
    <div>
      <Plot
        data={[
          {
            x: categorySummaryList.map((category) => category.title),
            y: categorySummaryList.map((category) => category.product_count),
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#FF7F0E" },
            name: "Product Count Top",
          },
          {
            type: "bar",
            x: categorySummaryList.map((category) => category.title),
            y: categorySummaryList.map((category) => category.product_count),
            name: "Product Count",
            marker: { color: "#1F77B4" },
          },
        ]}
        layout={{ width: 800, height: 400, title: "Category Summary" }}
      />
    </div>
  );
};

export default CategorySummaryBarChart;
