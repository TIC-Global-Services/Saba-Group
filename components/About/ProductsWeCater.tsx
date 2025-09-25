"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Hotmelts,
  Lamination,
  SolventBased,
  WaterBased,
} from "@/assets/Index";

gsap.registerPlugin(ScrollTrigger);

const ProductsWeCater = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const cater = [
    { title: "Water Based Adhesives", image: WaterBased },
    { title: "Solvent Based Adhesives", image: SolventBased },
    { title: "Hotmelts - PSA & PURHMA", image: Hotmelts },
    { title: "Lamination Adhesives", image: Lamination },
    { title: "Hotmelts - PSA & PURHMA", image: Hotmelts },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;

    if (!section || !scrollContainer) return;

    const isDesktop = window.innerWidth >= 768; // md breakpoint

    if (isDesktop) {
      // Calculate the available viewport width for cards (excluding the heading section)
      const headingWidth = window.innerWidth * 0.3; // 30% for heading
      const availableWidth = window.innerWidth - headingWidth;
      
      // Calculate total scroll needed to show all cards fully
      const totalScroll = scrollContainer.scrollWidth - availableWidth;

      gsap.to(scrollContainer, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + 600}`, // Increased buffer
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (window.innerWidth >= 768) {
        const headingWidth = window.innerWidth * 0.3;
        const availableWidth = window.innerWidth - headingWidth;
        const totalScroll = scrollContainer.scrollWidth - availableWidth;

        gsap.to(scrollContainer, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll + 600}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Heading */}
        <div className="px-6 md:px-10 md:w-[30%] flex items-center bg-white z-50">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Products We Cater
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex md:flex-row flex-col gap-6 items-center px-6 py-6 md:pl-10 w-full"
        >
          {cater.map((item, index) => (
            <div
              key={index}
              className="relative w-full md:min-w-[250px] md:max-w-[300px] rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                className=" aspect-square md:aspect-[3/4] w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsWeCater;