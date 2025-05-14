import React from "react";
import DashboardHeading from "../DashboardHeading";

function TopProducts() {
  const tableData = [
    {
      id: "01",
      name: "Home Decor Range",
      percentage: 10,
      sales: "45%",
      color: "#0095FF", // blue
    },
    {
      id: "02",
      name: "Home Decor Range",
      percentage: 15,
      sales: "10%",
      color: "#00E096", // green
    },
    {
      id: "03",
      name: "Home Decor Range",
      percentage: 40,
      sales: "10%",
      color: "#C5A8FF", // purple
    },
    {
      id: "04",
      name: "Home Decor Range",
      percentage: 90,
      sales: "90%",
      color: "#FF8F0D", // orange
    },
  ];

  return (
    <div className="p-4 rounded-md bg-white shadow w-full md:w-[40%]">
      <div className="mb-3">
        <DashboardHeading text={"Top Products"} />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-thin text-purple">
              #
            </th>
            <th className="px-4 py-3 text-left text-sm font-thin text-purple">
              name
            </th>
            <th className="px-4 py-3 text-left text-sm font-thin text-purple">
              Popularity
            </th>
            <th className="px-4 py-3 text-left text-sm font-thin text-purple">
              sales
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index} className=" border-b border-black/6 text-black">
              <td className="px-4 py-3 text-[14px] text-black">{row?.id}</td>
              <td className="px-2 py-3 text-[14px] max-w-[50px]">
                {row?.name}
              </td>
              <td className="px-4 py-3 text-[14px] max-w-[100px]">
                <div
                  className="w-[100px] h-1.5 overflow-hidden"
                  style={{ backgroundColor: `${row.color}4D` }} // 30% opacity in hex (4D)
                >
                  <div
                    style={{
                      backgroundColor: row.color,
                      width: `${row.percentage}%`,
                      height: "100%",
                    }}
                  />
                </div>
              </td>
              <td className="px-4 py-3 text-[14px] max-w-[50px]">
                <div
                  className="p-1 px-2 rounded-lg"
                  style={{
                    backgroundColor: `${row.color}4D`,
                    border: `solid 1px ${row.color}`,
                  }} // 30% opacity in hex (4D)
                >
                  {" "}
                  {row.sales}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopProducts;
