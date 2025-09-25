"use client";

import DottedMap from "dotted-map";

export default function IndiaMap() {
  const map = new DottedMap({ height: 60, grid: "diagonal" });

  map.addPin({
    lat: 28.6139,
    lng: 77.209,
    svgOptions: { color: "#16a34a", radius: 0.8 },
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#ffffff",
    shape: "circle",
    backgroundColor: "transparent",
  });

  return (
    <div className="relative flex justify-center items-center px-0 md:px-10 py-10  ">
      <div
        className="w-full h-auto  bg-[#559CFF]/50 rounded-2xl p-10"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />
    </div>
  );
}
