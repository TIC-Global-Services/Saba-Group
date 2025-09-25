"use client";

import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      title: "Industry Leaders You Can Trust!",
      desc: "Saba Group has been a game-changer for our business. Their high-quality specialty chemicals and solvents have consistently met our exacting standards. Their expertise and commitment to excellence make them true pioneers in the industry!",
      name: "David",
    },
    {
      rating: 5,
      title: "Unmatched Quality & Reliability",
      desc: "We've been sourcing basic and specialty chemicals from Saba Group for years, and their reliability is second to none. The quality of their products, coupled with exceptional service, has helped us streamline our operations.",
      name: "Preethi",
    },
    {
      rating: 5,
      title: "Innovation at Its Best",
      desc: "Saba Group doesn’t just supply chemicals—they provide innovative solutions tailored to our needs. Their knowledge and customer-centric approach set them apart in the industry.",
      name: "Kumari",
    },
    {
      rating: 5,
      title: "Top-notch Service!",
      desc: "The team at Saba Group goes above and beyond. Their responsiveness and professionalism are unmatched in the industry.",
      name: "Anil",
    },
  ];

  return (
    <div className=" py-10 md:py-20 space-y-10 overflow-hidden bg-[#ECEFF3]">
      {/* Heading */}
      <div className="w-full text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          What our <span className="text-secondary">Clients Say</span>
        </h1>
      </div>

      {/* Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden py-10">
        <div className="flex animate-scroll-slow gap-3">
          {[...testimonials, ...testimonials].map((testi, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-sm bg-white rounded-2xl  p-6 flex flex-col justify-between gap-4 min-h-[40dvh] md:min-h-[60dvh]"
            >
              <div className=" space-y-3">
                {/* Stars */}
                <div className="flex text-secondary">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>
                <h2 className="text-lg font-medium">{testi.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {testi.desc}
                </p>
              </div>

              <div>
                <hr className="my-2 text-gray-500" />
                <p className="font-medium ">{testi.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
