import React from "react";
import Plot from "react-plotly.js";

const ProductSummaryBarChart = ({ productSummaryList }) => {
  return (
    <div>
      <div className=' m-2 border border-opacity-100 rounded-1'>
        <Plot
          data={[
            {
              x: productSummaryList.map((product) => product.title),
              y: productSummaryList.map((product) => product.inventory),
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#FF7F0E" },
              name: "Product Inventory Top",
            },
            {
              type: "bar",
              x: productSummaryList.map((product) => product.title),
              y: productSummaryList.map((product) => product.inventory),
              name: "Product Inventory",
              marker: { color: "#1F77B4" },
            },
          ]}
          layout={{
            width: 600,
            height: 350,
            title: "Product Inventory Summary",
          }}
        />
      </div>
      <div className=' m-2 border border-opacity-100 rounded-1'>
        <Plot
          data={[
            {
              x: productSummaryList.map((product) => product.title),
              y: productSummaryList.map((product) => product.unit_price),
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "#FF7F0E" },
              name: "Product Unit Price Top",
            },
            {
              type: "bar",
              x: productSummaryList.map((product) => product.title),
              y: productSummaryList.map((product) => product.unit_price),
              name: "Product Unit Price",
              marker: { color: "#1F77B4" },
            },
          ]}
          layout={{
            width: 600,
            height: 350,
            title: "Product Unit Price Summary",
          }}
        />
      </div>
    </div>
  );
};

export default ProductSummaryBarChart;
