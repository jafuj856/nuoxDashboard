import React from "react";
import ReactApexChart from "react-apexcharts";
import DashboardHeading from "../DashboardHeading";

function CustomerSatisfactionChart() {
  const series = [
    {
      name: "Last Month",
      data: [30, 40, 35, 20, 25, 30, 33, 40],
    },
    {
      name: "This Month",
      data: [35, 45, 40, 42, 50, 48, 46, 60],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#3B82F6", "#10B981"], // Blue, Green
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    legend: { show: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow w-full md:max-w-[50%] lg:max-w-[28%]">
      <DashboardHeading text={"Customer Satisfaction"} />

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
      />

      <div className="border-t border-purple-600 mt-4 pt-3 flex justify-around text-sm text-gray-700">
        <div>
          <div className="flex items-center gap-1 text-[#96A5B8] text-[16px]">
            <svg
              width="23"
              height="9"
              viewBox="0 0 23 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5H21"
                stroke="#0080DA"
                stroke-width="3"
                stroke-linecap="round"
              />
              <circle cx="11.5" cy="4.5" r="4.5" fill="#0095FF" />
            </svg>
            Last Month
          </div>
          <div className="flex">
            {" "}
            <div className="w-[12px] h-[2px]" />{" "}
            <span className="font-semibold block text-black ml-2">$3,004</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-[#96A5B8] text-[16px]">
            <svg
              width="23"
              height="9"
              viewBox="0 0 23 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4.5H21"
                stroke="#05C283"
                stroke-width="3"
                stroke-linecap="round"
              />
              <circle cx="11.5" cy="4.5" r="4.5" fill="#07E098" />
            </svg>
            This Month
          </div>
          <div className="flex">
            {" "}
            <div className="w-[12px] h-[2px]" />{" "}
            <span className=" block text-black ml-2">$4,504</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSatisfactionChart;
