"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface HeroSectionProps {
  image: StaticImageData;
  heading: string;
  highlight: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  heading,
  highlight,
  buttonText,
  buttonLink,
  overlay = "bg-black/40",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Split heading and inject highlight
  const renderHeading = () => {
    const parts = heading.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="text-primary">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-dvh flex items-end justify-start"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Text + Button */}
      <div ref={textRef} className="relative z-10 p-8 md:p-16  max-w-3xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 text-white">
          {renderHeading()}
        </h1>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="inline-flex items-center font-semibold rounded-lg overflow-hidden shadow-md"
          >
            <span className="bg-secondary text-white px-6 py-3">
              {buttonText}
            </span>
            <span className="bg-white text-secondary px-4 py-3 font-bold ">
              +
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
