import { OurVisionImg } from "@/assets/Index";
import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <div className="px-12 pb-[140px] pt-[104px]">
      <div className="grid grid-cols-[1fr_1.5fr] gap-[88px]">
        <Image
          src={OurVisionImg}
          alt="ChemicalDivisionImg"
          className="w-full h-full object-cover border"
          width={600} // Set appropriate width
          height={400} // Set appropriate height
          priority // Optional: for faster loading
        />

        <div className="flex flex-col justify-center items-start">
          <p>// Our Vision</p>
          <h1 className="text-[44px] font-bold leading-10 mt-4">Vision of Risa farm ?</h1>

          <div className="text-[22px] leading-[138%] tracking-[2%] mt-4 flex flex-col justify-between">
            <p>
              Our mission is to provide pure, nutritious, and ethically produced food to families while promoting sustainable agriculture. We believe in honest farming, caring for our animals and land, and ensuring quality at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
