import Image from "next/image";
import React from "react";
import { ChemicalDivisionImg } from "@/assets/Index";

const ChemicalDivision = () => {
  return (
    <div className="px-12 pb-[140px] pt-[104px]">
      <div className="grid grid-cols-[1.5fr_1fr] gap-[88px]">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-[44px] font-bold leading-10">
            Footwear Chemical Division
          </h1>

          <div className="text-[22px] leading-[138%] tracking-[2%] mt-4 h-full flex flex-col justify-between">
            <p>
              Fast, Reliable, and Technically Backed Solutions for the Footwear Industry
            </p>

            <p>
              Saba Group’s Footwear Chemical Division is committed to being a trusted partner and technical extension of leading multinational manufacturers. Serving large-scale and export-oriented footwear producers across India, we offer an extensive range of adhesives, chemicals, machinery, and accessories designed to meet the highest standards of performance and compliance.
            </p>

            <p>
              We act as the official Indian agents and local extension for several globally reputed manufacturers—bringing their technologies, know-how, and support directly into our customers’ production lines.
            </p>

            <p>
              Catering to India’s growing footwear sector, this division offers a complete line of adhesives, primers, and specialty finishes. We represent Henkel, ACI, and Quinn Italiana, bringing tested and proven solutions to high-volume manufacturers.
            </p>

            <p>
             As the exclusive agent for Protima (Taiwan), we also offer precision adhesive dispensing systems that improve efficiency, reduce waste, and streamline production.
            </p>
          </div>
        </div>

        <div>
          <Image
            src={ChemicalDivisionImg}
            alt="ChemicalDivisionImg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ChemicalDivision;
