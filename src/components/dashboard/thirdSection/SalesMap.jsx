import React from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const MyVectorMap = () => {
  // Static country-color mapping
  const countryColorMap = {
    US: "#F59E0B", // United States
    BR: "#EF4444", // Brazil
    CN: "#8B5CF6", // China
    ID: "#10B981", // Indonesia
    NG: "#3B82F6", // Nigeria
    SA: "#0EA5E9", // Saudi Arabia
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow w-full md:max-w-[50%] lg:max-w-[28%] overflow-hidden"
      
    >
      <h2 className="text-lg font-semibold text-[#0F172A] mb-3">
        Sales Mapping by Country
      </h2>
      <VectorMap
        map={worldMill}
        backgroundColor="white"
        zoomOnScroll={false}
        containerStyle={{ width: "100%", height: "10%" }}
        containerClassName="map"
        series={{
          regions: [
            {
              values: countryColorMap,
              attribute: "fill",
            },
          ],
        }}
        regionStyle={{
          initial: {
            fill: "#E5E7EB", // Default color for all other countries
            "fill-opacity": 1,
            stroke: "none",
          },
        }}
      />
    </div>
  );
};

export default MyVectorMap;
