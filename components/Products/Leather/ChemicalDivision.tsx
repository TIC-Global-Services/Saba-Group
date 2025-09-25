import Image from "next/image";
import React from "react";
import { ChemicalDivisionImg } from "@/assets/Index";

const ChemicalDivision = () => {
  return (
    <div className="px-12 pb-[140px] pt-[104px]">
      <div className="grid grid-cols-[1.5fr_1fr] gap-[88px]">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-[44px] font-bold leading-10">
            Leather Chemical Division
          </h1>

          <div className="text-[22px] leading-[138%] tracking-[2%] mt-4 h-full flex flex-col justify-between">
            <p>
              Innovating Leather Processing with Global Excellence & Local
              Expertise
            </p>

            <p>
              For over three decades, Saba Group’s Leather Chemical Division has
              been a cornerstone of the Indian leather industry. Backed by
              international partnerships, in-house manufacturing, and deep
              technical knowledge, we provide complete chemical solutions
              tailored to the needs of tanneries and leather finishers across
              the country
            </p>

            <p>
              Serving as one of the foundational pillars of Saba Group, this
              division delivers world-class chemical solutions to tanneries and
              leather processors. We represent Trumpler GmbH and PielColor,
              offering complete solutions across all stages of leather
              processing.
            </p>

            <p>
              We also manufacture our proprietary range of syntans and
              fatliquors under the brand Hebachemi, which are ZDHC MRSL Level 3
              certified and BISphenol-free—developed to meet both environmental
              norms and performance expectations.
            </p>

            <p>
              In partnership with T&J (China), we supply high-quality vegetable
              tanning extracts, reinforcing our commitment to sustainable and
              eco-conscious leather solutions.
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
