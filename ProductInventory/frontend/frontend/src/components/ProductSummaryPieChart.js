import React from "react";
import Plot from "react-plotly.js";

const ProductSummaryPieChart = ({ productSummaryList }) => {
  var data = [
    {
      values: productSummaryList.map((category) => category.inventory),
      labels: productSummaryList.map((category) => category.title),
      type: "pie",
    },
  ];
  return (
    <div>
      <Plot
        data={data}
        layout={{
          width: 600,
          height: 350,
          title: "Product Inventory Summary",
        }}
      />
    </div>
  );
};

export default ProductSummaryPieChart;
