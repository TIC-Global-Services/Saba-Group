import React from "react";
import Image from "next/image";
import { CareerHistoryImg } from "@/assets/Index";

const JoinUs = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-14">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2  items-center">
          {/* Content */}
          <div className="space-y-6 bg-light shadow-lg p-6 rounded-t-2xl md:rounded-2-xl  ">
            <div>
              <p className="text-3xl md:text-4xl text-gray-200 leading-relaxed font-medium">Join Us!</p>
            </div>

            <div>
              <p className="text-base md:text-lg text-white leading-relaxed">
                If you’re driven, curious, and ready to make a difference, we’d
                love to hear from you. <br /> Send your resume to:
                [careers@sabagroup.in] or check out current openings below. <br /> Shape your future with Saba Group where every career is a
                journey of growth and impact.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-white text-secondary font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg">
                Apply Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:-ml-4">
            <div className=" rounded-b-2xl md:rounded-2xl overflow-hidden shadow-lg">
              {/* Replace src with your actual image */}
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-700 to-gray-900 relative">
                {/* Placeholder for career image - replace with actual Image component */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  {/* This would be your actual career image */}
                  <span className="text-sm opacity-70">
                    Career Image Placeholder
                  </span>
                </div>

                <Image
                  src={CareerHistoryImg}
                  alt="Career opportunities at Saba Group"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
