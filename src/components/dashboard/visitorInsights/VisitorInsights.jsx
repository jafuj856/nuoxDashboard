import React from "react";
import ReactApexChart from "react-apexcharts";
import DashboardHeading from "../DashboardHeading";

function VisitorInsights() {
  const seriesData = [
    {
      name: "Loyal Customers",
      data: [40, 55, 60, 75, 80, 90, 85, 100, 95],
      color: "#A700FF",
    },
    {
      name: "New Customers",
      data: [20, 35, 40, 50, 65, 70, 75, 80, 78],
      color: "#EF4444",
    },
    {
      name: "Unique Customers",
      data: [25, 30, 45, 60, 70, 85, 95, 110, 120],
      color: "#3CD856",
    },
  ];

  // Find the highest value and its index
  let highestValue = -Infinity;
  let highestSeriesIndex = 0;
  let highestPointIndex = 0;

  seriesData.forEach((series, sIndex) => {
    series.data.forEach((value, pIndex) => {
      if (value > highestValue) {
        highestValue = value;
        highestSeriesIndex = sIndex;
        highestPointIndex = pIndex;
      }
    });
  });

  const xCategory = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ][highestPointIndex];
  const markerColor = seriesData[highestSeriesIndex].color;

  const chartData = {
    series: seriesData,
    options: {
      chart: {
        height: 100,
        type: "line",
        zoom: { enabled: false },
        toolbar: {
          show: false, 
        },
        legend: {
          show: false, // 
        },
      },
      stroke: {
        curve: "smooth",
        width: 4,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      grid: {
        show: true,
        yaxis: {
          lines: { show: true },
        },
        xaxis: {
          lines: { show: false },
        },
        row: {
          opacity: 0.1,
        },
      },
      dataLabels: { enabled: false },
      markers: {
        size: 0, // Hide all default markers
        discrete: [
          {
            seriesIndex: highestSeriesIndex,
            dataPointIndex: highestPointIndex,
            fillColor: markerColor,
            strokeColor: markerColor,
            size: 6,
          },
        ],
      },
      tooltip: {
        shared: false,
        intersect: false,
      },
      annotations: {
        xaxis: [
          {
            x: xCategory,
            borderColor: markerColor,
            strokeDashArray: 4,
            label: {
              show: false,
            },
          },
        ],
      },
    },
  };

  return (
    <div className="p-4 rounded-md bg-white shadow w-full md:max-w-[40%]">
      <div className="mb-">
        <DashboardHeading text={"Visitor Insights"} />
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
              type="line"
              height={'210px'}
      />
    </div>
  );
}

export default VisitorInsights;
