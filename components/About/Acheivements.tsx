import React from "react";
import {
  Acheive1,
  Acheive2,
  Acheive3,
  Acheive4,
  Acheive5,
  Acheive6,
} from "@/assets/Index";
import Image from "next/image";

const Achievements = () => {
  return (
    <div className="px-6 md:px-14 py-10 md:py-20 bg-gray-50">
      <div className=" mx-auto">
        <div className="mb-12 text-center ">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-secondary">Achievements</span>{" "}
            <span className="text-gray-900">of Saba Group</span>
          </h1>
        </div>

        <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[120dvh] ">
          {/* Achievement 1 - Large featured */}
          <div className="col-span-3 row-span-2 group relative overflow-hidden rounded-2xl bg-white  hover:-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive1}
                alt="Achievement 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Achievement 2 */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-white   transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive2}
                alt="Achievement 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl bg-white   transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive3}
                alt="Achievement 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Achievement 4 */}
          <div className="col-span-3 row-span-2 group relative overflow-hidden rounded-2xl bg-white   transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive4}
                alt="Achievement 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Achievement 5 - Wide bottom */}
          <div className=" col-span-3 md:col-span-4 row-span-2 group relative overflow-hidden rounded-2xl bg-white   transition-all duration-300 hover:scale-[1.02] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive5}
                alt="Achievement 5"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>

          {/* Achievement 6 - Square */}
          <div className=" col-span-2 md:col-span-1 row-span-2 group relative overflow-hidden rounded-2xl bg-white   transition-all duration-300 hover:scale-[1.05] cursor-pointer">
            <div className="absolute inset-0">
              <Image
                src={Acheive6}
                alt="Achievement 6"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
