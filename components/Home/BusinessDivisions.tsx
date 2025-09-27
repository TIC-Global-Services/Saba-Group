"use client";

import { Farming, Footwear, Healthcare, Infra, Leather } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BusinessDivisions = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="px-6 md:px-14 py-10 md:py-20 space-y-10">
      {/* Heading Section */}
      <div className="w-full text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Business <span className="text-secondary">Divisions</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Saba Group is the exclusive India agent for leading global chemical
          and machinery manufacturers. We deliver high-quality, sustainable, and
          innovative solutions to the Indian market.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Big Leather block */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[0] = el;
          }}
          className="md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl"
        >
          <Image
            src={Leather}
            alt="Leather"
            className="w-full aspect-[4/3] md:aspect-video object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-full flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Leather Chemical Division</h1>
            <Link
              href={"/products/leather"}
              className="bg-white rounded-full px-6 py-1 text-secondary font-medium"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Farming */}
        <div
          ref={(el) => { if (el) cardsRef.current[1] = el; }}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={Farming}
            alt="Farming"
            className="w-full aspect-[4/3] md:aspect-video object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-full flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Risa farm</h1>
            <Link
              href={"/products/farming"}
              className="bg-white rounded-full px-6 py-1 text-secondary font-medium"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Infra */}
        <div
          ref={(el) => { if (el) cardsRef.current[2] = el; }}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={Infra}
            alt="Infrastructure"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-full flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Infra</h1>
            <Link
              href={"/products/infra"}
              className="bg-white rounded-full px-6 py-1 text-secondary font-medium"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Healthcare */}
        <div
          ref={(el) => { if (el) cardsRef.current[3] = el; }}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={Healthcare}
            alt="Healthcare"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-full flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Healthcare</h1>
            <Link
              href={"/products/healthcare"}
              className="bg-white rounded-full px-6 py-1 text-secondary font-medium"
            >
              View More
            </Link>
          </div>
        </div>

        {/* Footwear */}
        <div
          ref={(el) => { if (el) cardsRef.current[4] = el; }}
          className="md:col-start-3 md:row-start-2 md:row-span-2 relative overflow-hidden rounded-xl"
        >
          <Image
            src={Footwear}
            alt="Footwear"
            className="w-full aspect-[4/3] md:aspect-[3/4] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white px-4 py-2 rounded-full flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Shoe Division</h1>
            <Link
              href={"/products/footwear"}
              className="bg-white rounded-full px-6 py-1 text-secondary font-medium"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDivisions;
