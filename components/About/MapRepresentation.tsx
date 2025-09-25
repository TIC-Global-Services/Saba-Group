"use client";

import { useState } from "react";
import WorldMap from "./WorldMap"; 
import IndiaMap from "./IndiaMap";

export default function MapRepresentation() {
  const [view, setView] = useState<"global" | "national">("global");

  return (
    <div className="w-full flex flex-col items-center px-6">
      {/* Toggle Buttons */}
      <div className="flex items-center border rounded-full overflow-hidden p-1 ">
        <button
          onClick={() => setView("global")}
          className={`px-6 py-2 text-sm font-medium cursor-pointer rounded-full transition ${
            view === "global"
              ? "bg-secondary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Global representation
        </button>
        <button
          onClick={() => setView("national")}
          className={`px-6 py-2 text-sm font-medium cursor-pointer rounded-full transition ${
            view === "national"
              ? "bg-secondary text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          National representation
        </button>
      </div>

      {/* Map Section */}
      <div className="w-full ">
        {view === "global" ? <WorldMap /> : <IndiaMap />}
      </div>
    </div>
  );
}
