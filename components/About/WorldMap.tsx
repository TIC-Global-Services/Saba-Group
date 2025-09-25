"use client";

import DottedMap from "dotted-map";
import { useState } from "react";
import Link from "next/link";

type Marker = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
  link: string;
};

const markers: Marker[] = [
  { id: 1, name: "India", lat: 28.6139, lng: 77.209, description: "New Delhi, India", link: "/india" },
  { id: 2, name: "Nepal", lat: 27.7172, lng: 85.324, description: "Kathmandu, Nepal", link: "/nepal" },
  { id: 3, name: "China", lat: 39.9042, lng: 116.407, description: "Beijing, China", link: "/china" },
];

export default function WorldMap() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Create map instance
  const map = new DottedMap({ height: 60, grid: "diagonal" });

  // Add pins
  markers.forEach((m) =>
    map.addPin({
      lat: m.lat,
      lng: m.lng,
      svgOptions: { color: "#16a34a", radius: 0.8 },
    })
  );

  // Generate SVG
  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#ffffff",
    shape: "circle",
    backgroundColor: "transparent",
  });

  return (
    <div className="relative flex justify-center items-center px-0 md:px-10 py-10 rounded-xl ">
      {/* Map */}
      <div
        className="w-full p-4 md:p-10 bg-[#559CFF]/50 rounded-2xl"
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />

      {/* Tooltips */}
      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={{
            top: `${50 - m.lat / 4}%`,
            left: `${50 + m.lng / 4}%`,
          }}
          onMouseEnter={() => setHovered(m.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === m.id && (
            <div className="absolute -top-12 -left-10 bg-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
              <Link href={m.link} className="font-semibold text-blue-600 hover:underline">
                {m.name}
              </Link>
              <p className="text-gray-600">{m.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
