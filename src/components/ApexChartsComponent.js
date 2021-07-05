import React, { useState } from "react";
// import ApexCharts from "apexcharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

const ApexChartsComponent = () => {
  const data = [
    {
      name: "January",
      costs: 180,
    },
    {
      name: "February",
      costs: 250,
    },
    {
      name: "March",
      costs: 205,
    },
    {
      name: "April",
      costs: 780,
    },
    {
      name: "May",
      costs: 1050,
    },
    {
      name: "June",
      costs: 500,
    },
    {
      name: "July",
      costs: 370,
    },
    {
      name: "August",
      costs: 350,
    },
    {
      name: "September",
      costs: 450,
    },
    {
      name: "October",
      costs: 290,
    },
    {
      name: "November",
      costs: 500,
    },
    {
      name: "December",
      costs: 850,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 50,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="costs"
          stroke="#8884d8"
          strokeWidth={1}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ApexChartsComponent;
