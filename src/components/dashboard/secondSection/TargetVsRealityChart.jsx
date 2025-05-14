import React from "react";
import ReactApexChart from "react-apexcharts";
import DashboardHeading from "../DashboardHeading";

function TargetVsRealityChart() {
  const series = [
    {
      name: "Reality Sales",
      data: [8200, 8300, 7800, 8700, 8900, 8800, 8700],
    },
    {
      name: "Target Sales",
      data: [9100, 9500, 10000, 9800, 11000, 12122, 11500],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 2,
        borderRadiusApplication: "end",
      },
    },
    colors: ["#6BD091", "#F6C065"], // Green, Yellow
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
      labels: {
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val.toLocaleString()}`,
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow w-full md:max-w-[50%] lg:max-w-[28%]">
      <DashboardHeading text={" Target vs Reality"} />

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-[#FFF5E6] flex items-center justify-center">
            <img src="/bag.svg" alt="" />
          </span>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold">Reality Sales</span>
            <span className="text-[#737791] text-[10px]">Global</span>
          </div>
          <span className="ml-auto  text-green-500">12.122</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-md bg-[#FFF5E6] flex items-center justify-center">
            <img src="/card.svg" alt="" />
          </span>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold">Target Sales</span>
            <span className="text-[#737791] text-[10px]">Commercial</span>
          </div>
          <span className="ml-auto  text-[#F6C065]">12.122</span>
        </div>
      </div>
    </div>
  );
}

export default TargetVsRealityChart;
