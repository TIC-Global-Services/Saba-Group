import { Baladitya, Sabapathy } from "@/assets/Index";
import Image from "next/image";
import React from "react";

const directors = [
  {
    name: "Mr. S.K.Sabapathy",
    position: "Managing Director",
    image: Sabapathy,
  },
  {
    name: "Mr. S.Baladitya Saba",
    position: "Director",
    image: Baladitya,
  },
];

const BoardOfDirectors = () => {
  return (
    <div className="w-full  mx-auto px-6 md:px-16 py-10 md:py-20 flex flex-col md:flex-row">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Board of <span className="text-secondary">Directors</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[500px] w-full">
        {directors.map((director, index) => (
          <div
            key={index}
            className={`
              group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer
              transition-all duration-500 ease-in-out
              ${
                index === 0
                  ? "flex-[2] lg:hover:flex-[3]"
                  : "flex-[1] hover:flex-[4] lg:hover:flex-[4]"
              }
              hover:shadow-2xl
            `}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={director.image}
                alt={director.name}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <div className="transform transition-all duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {director.name}
                </h3>
                <p className="text-lg text-gray-200 opacity-90">
                  {director.position}
                </p>

              </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute top-4 right-4 transform transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
