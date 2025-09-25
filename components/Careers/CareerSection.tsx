import React from "react";
import Image from "next/image";
import { CareerHistoryImg } from "@/assets/Index";


const CareerSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-14">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className=" rounded-t-2xl md:rounded-2xl overflow-hidden shadow-lg">
              {/* Replace src with your actual image */}
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-700 to-gray-900 relative">
                
                
                <Image
                  src={CareerHistoryImg}
                  alt="Career opportunities at Saba Group"
                  fill
                  className="object-cover"
                />
               
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 bg-white shadow-lg p-6 rounded-b-2xl md:rounded-2xl md:-ml-20 z-20">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold text-gray-900">Saba Group</span>, we believe that our people are our greatest strength. <span className="font-semibold text-gray-900">Since 1988</span>, we have built a dynamic organization grounded in integrity, innovation, and inclusivity—and we continue to grow by investing in talent that shares our vision.
              </p>
            </div>

            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Whether you are an experienced professional or a fresh graduate eager to learn, Saba Group offers exciting career opportunities across diverse industries—from chemicals and manufacturing to infrastructure, wellness, and sustainable farming.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-secondary text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Explore Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;