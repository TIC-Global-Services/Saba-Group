import Image from "next/image";
import React from "react";
import RisaFarm from "@/assets/Products/Farming/RisaFarm.png"; 

const ChemicalDivision = () => {
  return (
    <div className="px-12 pb-[140px] pt-[104px]">
      <div className="grid grid-cols-[1.5fr_1fr] gap-[88px]">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-[44px] font-bold leading-10">Risa farm</h1>

          <div className="text-[22px] leading-[138%] tracking-[2%] mt-4 h-full flex flex-col justify-between">
            <p>
              Nurturing Nature, Growing Prosperity
              <br />
              Located in the serene village of Thalarapadi near Cheyyar, Risa
              Farm is a vibrant and diverse agricultural haven dedicated to
              sustainable farming practices and quality produce. Spread across
              lush green landscapes, our farm is more than just a piece of land
              — it's a living, breathing ecosystem where crops, cattle, poultry,
              and people thrive in harmony.
            </p>
          </div>
        </div>

          <Image
            src={RisaFarm}
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
