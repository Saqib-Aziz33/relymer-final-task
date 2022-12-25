import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2022", 1000, 1400],
];

export const options = {
  chart: {
    title: "Prices comparison",
  },
};

export default function Comparison(props) {
  console.log(props.data);
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
