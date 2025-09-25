import { Mission, StateOfArt } from "@/assets/Index";
import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="px-6 md:px-14 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Mission Image */}
        <div className="md:col-span-2 bg-[#f5f5f5] rounded-2xl overflow-hidden ">
          <Image
            src={Mission}
            alt="Our Mission"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mission Content */}
        <div className="md:col-span-4 bg-[#f5f5f5]  rounded-2xl  p-6 md:p-10 flex flex-col justify-center">
          <p className="text-xs md:text-sm uppercase tracking-wide text-gray-500">
            Our Mission
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 leading-snug">
            Driving{" "}
            <span className="text-secondary">Innovation</span> Through{" "}
            <span className="text-secondary">High-Quality</span> Chemical
            Solutions
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            At Saba Group, our mission is to provide high-quality specialty
            chemicals, basic chemicals, and solvents that drive innovation and
            efficiency across industries. We are committed to delivering
            reliable and sustainable solutions to the leather, shoe, and
            industrial sectors while maintaining strong partnerships with
            globally renowned brands. Through continuous research, development,
            and strategic expansion, we aim to enhance our customers' processes
            and contribute to their success.
          </p>
        </div>

        {/* Stats Block */}
        <div className="md:col-span-3 bg-[#f5f5f5] rounded-2xl  p-8 flex flex-col justify-center">
          <h1 className="text-xl md:text-4xl font-medium leading-snug mb-6">
            Our <span className="text-secondary font-semibold">state-of-the-art</span>{" "}
            facilities have the annual capacity to produce
          </h1>
          <div className="flex gap-4">
            <div className="bg-white rounded-xl p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold text-secondary">
                200+
              </h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Employees
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-extrabold text-secondary">
                15 Lakh
              </h1>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Shipments
              </p>
            </div>
          </div>
        </div>

        {/* State of Art Image */}
        <div className="md:col-span-3 bg-[#f5f5f5] rounded-2xl overflow-hidden ">
          <Image
            src={StateOfArt}
            alt="Our State of Art Facilities"
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
