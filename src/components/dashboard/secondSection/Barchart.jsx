import React from "react";
import ReactApexChart from "react-apexcharts";
import DashboardHeading from "../DashboardHeading";

function BarChart() {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // hide toolbar buttons
      },
    },
    colors: ["#0095FF", "#00E096"], // custom colors for series
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 25000,
      tickAmount: 5,
      labels: {
        formatter: function (val) {
          return `${val / 1000}k`;
        },
        style: {
          fontSize: "14px",
        },
      },
      title: {
        text: undefined,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    legend: {
      show: false, // no legend below chart
    },
  };

  const series = [
    {
      name: "Online Sales",
      data: [12000, 14000, 13500, 16000, 17000, 18000, 19000],
    },
    {
      name: "Offline Sales",
      data: [8000, 9000, 8500, 10000, 11000, 12000, 12500],
    },
  ];

  return (
    <div className="p-4 rounded-md bg-white shadow w-full md:w-[40%]">
      <DashboardHeading text={"Total Revenue"} />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
}

export default BarChart;
