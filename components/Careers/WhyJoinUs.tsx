"use client";
import React, { useEffect, useState } from "react";

const data = [
  {
    title: "A Trusted Legacy",
    description:
      "With over three decades of industry leadership, joining Saba Group means being part of a respected name known for reliability and commitment",
  },
  {
    title: "Culture",
    description:
      "We foster a culture of respect, teamwork, and accountability. With offices across India and operations abroad, you’ll be part of a networked yet close-knit team.",
  },
  {
    title: "Fosterous Learning",
    description:
      "We encourage continuous learning, on-the-job training, and professional development. Our collaborative work environment supports your journey from potential to performance",
  },
];

const WhyJoinUs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === current) return "center";
    if (index === (current - 1 + data.length) % data.length) return "left";
    if (index === (current + 1) % data.length) return "right";
    return "hidden";
  };

  return (
    <div className="px-6 md:px-14 py-10 md:py-20 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Why <span className="text-secondary">Join Us?</span>
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative flex  justify-center items-center py-12 h-[350px] gap-6 md:gap-0">
        {data.map((item, index) => {
          const position = getPosition(index);

          // Default classes for mobile stacked cards
          let classes =
            "transition-all duration-700 ease-in-out max-w-md p-6 rounded-2xl shadow-xl text-center flex-shrink-0 w-full absolute ";

          if (position === "center") {
            classes += " opacity-100 scale-100 blur-0 z-20 bg-white";
          } else if (position === "left") {
            classes += " opacity-70 scale-90 blur-xs -translate-x-40 z-10 bg-gray-100";
          } else if (position === "right") {
            classes += " opacity-70 scale-90 blur-xs  translate-x-40 z-10 bg-gray-100";
          } else {
            classes += " opacity-0 scale-75 blur-xs z-0";
          }

          return (
            <div key={index} className={classes}>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-secondary scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUs;
