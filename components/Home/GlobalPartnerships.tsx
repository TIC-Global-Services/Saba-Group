"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Trumpler,
  Pielcolor,
  TandJ,
  Henkel,
  ACI,
  QuinnItaliana,
  Protima,
  Essebi,
} from "@/assets/Index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalPartnerships = () => {
  const partners = [
    Trumpler,
    Pielcolor,
    TandJ,
    Henkel,
    ACI,
    QuinnItaliana,
    Protima,
    Essebi,
  ];

  const logosRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    logosRef.current.forEach((logo) => {
      if (logo) {
        gsap.fromTo(
          logo,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: logo,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="px-6 md:px-14 py-10 md:py-20 space-y-10">
      {/* Heading */}
      <div className="w-full text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Global <span className="text-secondary">Partnerships</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We proudly collaborate with globally renowned partners to bring the
          best solutions and innovations to the Indian market.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) logosRef.current[index] = el;
            }}
            className=" w-20 h-20 md:w-32 md:h-32 relative"
          >
            <Image
              src={partner}
              alt={`Partner ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalPartnerships;
