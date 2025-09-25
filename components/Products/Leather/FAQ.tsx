"use client";

import React from "react";
import FAQCard from "./FAQCard";

const FAQ: React.FC = () => {
  const faqData = [
    {
      title: "Our Own Brand: Hebachemi",
      description:
        "Under the Hebachemi brand, we manufacture a line of high-performance syntans, fatliquors, and auxiliaries at our in-house facilities. Hebachemi products are ZDHC MRSL Level 3 certified, BISphenol-free, and formulated to meet both local demands and global environmental norms. Known for their high concentration, optimized consumption, and reliable performance, Hebachemi solutions are trusted by leading tanneries across India.",
      isFirst: true,
    },
    {
      title: "Sustainability Focus",
      description:
        "Under the Hebachemi brand, we manufacture a line of high-performance syntans, fatliquors, and auxiliaries at our in-house facilities. Hebachemi products are ZDHC MRSL Level 3 certified, BISphenol-free, and formulated to meet both local demands and global environmental norms. Known for their high concentration, optimized consumption, and reliable performance, Hebachemi solutions are trusted by leading tanneries across India.",
      isFirst: false,
    },
    {
      title: "Technical Support & Services",
      description:
        "Under the Hebachemi brand, we manufacture a line of high-performance syntans, fatliquors, and auxiliaries at our in-house facilities. Hebachemi products are ZDHC MRSL Level 3 certified, BISphenol-free, and formulated to meet both local demands and global environmental norms. Known for their high concentration, optimized consumption, and reliable performance, Hebachemi solutions are trusted by leading tanneries across India.",
      isFirst: false,
    },
    {
      title: "Applications We Support",
      description:
        "Under the Hebachemi brand, we manufacture a line of high-performance syntans, fatliquors, and auxiliaries at our in-house facilities. Hebachemi products are ZDHC MRSL Level 3 certified, BISphenol-free, and formulated to meet both local demands and global environmental norms. Known for their high concentration, optimized consumption, and reliable performance, Hebachemi solutions are trusted by leading tanneries across India.",
      isFirst: false,
    },
  ];

  return (
    <div className="min-h-screen px-20 py-[140px]">
      <div className="mx-auto">
        {faqData.map((item, index) => (
          <FAQCard
            key={index}
            title={item.title}
            description={item.description}
            isFirst={item.isFirst}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
