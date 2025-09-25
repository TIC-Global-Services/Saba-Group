import { AboutSaba } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSabaGroup = () => {
  return (
    <div className="px-6 md:px-14 py-10 md:py-20">
      <div className="bg-secondary text-white grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto rounded-xl overflow-hidden">
        
        {/* Left: Text */}
        <div className="px-6 py-12 md:py-20 lg:py-28 flex flex-col items-start justify-center space-y-4">
          <p className="uppercase tracking-wide text-sm ">ABOUT SABA GROUP</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Pioneers in the Chemical <br /> Industry Since 1988
          </h1>
          <p className=" leading-relaxed text-lg">
            Saba Group of Companies stands as a trusted leader in the field of
            Speciality Chemicals, Basic Chemicals, and Solvents, with a legacy
            spanning over three decades. Established in 1988, we have been at
            the forefront of supplying high-quality chemicals to the Leather,
            Footwear, and related manufacturing sectors across India and
            internationally.
            <br />
            <br />
            With a dedicated workforce of over 600 professionals and a team of
            technically qualified experts, our strength lies in deep industry
            expertise, a customer-centric approach, and a wide-reaching
            commercial network.
          </p>
          <Link
            href="/about"
            className="bg-white rounded-lg px-6 py-2 text-black font-semibold shadow-md hover:bg-gray-100 transition"
          >
            View More
          </Link>
        </div>

        <div className="relative">
          <Image
            src={AboutSaba}
            alt="About Saba Group"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSabaGroup;
