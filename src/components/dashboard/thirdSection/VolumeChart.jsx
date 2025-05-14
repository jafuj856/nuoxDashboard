import ReactApexChart from "react-apexcharts";
import DashboardHeading from "../DashboardHeading";

const options = {
  chart: {
    type: "bar",
    stacked: true,
    toolbar: { show: false },
  },
  colors: ["#00E096", "#0095FF"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 2,
    },
  },
  dataLabels: {
    enabled: false, 
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    categories: ["", "", "", "", "", ""],
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
};


const series = [
  {
    name: "Services",
    data: [120, 150, 80, 90, 75, 100],
  },
  {
    name: "Volume",
    data: [200, 280, 240, 220, 170, 180],
  },
];

export default function CleanVolumeChart() {
  return (
    <div className="bg-white p-4 rounded-md shadow w-full md:max-w-[50%] lg:max-w-[28%]">
      <DashboardHeading text={" Volume vs Service Level"} />

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={230}
      />

      <div className="flex justify-center  gap-6 text-sm text-gray-600 border-t border-black/20 pt-5">
        <div className="flex items-start gap-2 border-r border-black/20 w-full justify-end pr-3.5">
          <span
            className="w-2 h-2 mt-1 rounded-full "
            style={{ backgroundColor: "#3B82F6" }}
          ></span>
          <div className="flex flex-col">
            <span className="text-[#96A5B8]">Volume</span>
            <span className="font-medium text-black ml-1">1,135</span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full justify-start">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#6EE7B7" }}
          ></span>
          <div className="flex flex-col">
            <span>Services</span>
            <span className="font-medium text-black ml-1">635</span>
          </div>
        </div>
      </div>
    </div>
  );
}
