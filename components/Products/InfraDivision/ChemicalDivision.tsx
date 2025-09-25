import Image from "next/image";
import React from "react";
import { InfraChemicalDivison } from "@/assets/Index";

const ChemicalDivision = () => {
  return (
    <div className="px-12 pb-[140px] pt-[104px]">
      <div className="grid grid-cols-[1.5fr_1fr] gap-[88px]">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-[44px] font-bold leading-10">Infra Division</h1>

          <div className="text-[22px] leading-[138%] tracking-[2%] mt-4 h-full flex flex-col justify-between">
            <p>
             Established in 2008, we are a highly efficient manufacturer of Crushed Stone Sand (M-Sand) for Concrete, Plaster Sand (P-Sand) for Plastering, and Construction Aggregates, located near Walajahpet, just 3 km off the Bangalore–Chennai Expressway. Our two state-of-the-art crushing units feature a 4-stage crushing process, enabling us to crush up to 700 tons per hour. Because our raw material is sourced from our own mines, we ensure consistent quality standards from start to finish.
            </p>
          </div>
        </div>

          <Image
            src={InfraChemicalDivison}
            alt="ChemicalDivisionImg"
            className="w-full h-full object-cover border"
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            priority // Optional: for faster loading
          />
        </div>
      </div>
  );
};

export default ChemicalDivision;
