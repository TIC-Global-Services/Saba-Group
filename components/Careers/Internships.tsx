"use client";
import { Internship } from "@/assets/Index";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Internships = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image
      gsap.from(imgRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate text with stagger
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="px-6 md:px-14 py-16 md:py-24 bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-none items-center">
        {/* Left Image */}
        <div ref={imgRef} className="flex justify-center">
          <Image
            src={Internship}
            alt="Internship"
            width={300}
            height={300}
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div ref={textRef} className="space-y-6 max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-secondary">
            Internships & Campus Hiring
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We actively collaborate with academic institutions to provide
            internships, industrial training, and entry-level positions for
            students and recent graduates. If you’re eager to start your career
            in a growth-driven environment, Saba Group is the place for you.
          </p>
          <Link
            href={"#"}
            className="inline-block text-secondary border-2 border-secondary rounded-full px-8 py-3 font-medium transition-transform duration-300 hover:scale-105 hover:bg-secondary hover:text-white"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internships;