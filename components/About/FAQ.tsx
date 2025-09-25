"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does Saba Group (Chennai, India) specialize in?",
      answer:
        "Saba Group specializes in chemical manufacturing and distribution, providing high-quality industrial chemicals and solutions to various sectors. We focus on innovative chemical processes and sustainable manufacturing practices to serve our clients' diverse needs.",
    },
    {
      question: "Where is Saba Group headquartered?",
      answer:
        "Saba Group is headquartered in Chennai, India. Our strategic location allows us to serve both domestic and international markets effectively, with easy access to major ports and industrial centers across South India.",
    },
    {
      question: "What industries does Saba Group serve?",
      answer:
        "We serve a wide range of industries including pharmaceuticals, textiles, automotive, agriculture, water treatment, construction, and manufacturing sectors. Our diverse product portfolio enables us to provide specialized chemical solutions tailored to each industry's unique requirements.",
    },
    {
      question: "Does Saba Group manufacture its own chemicals?",
      answer:
        "Yes, Saba Group operates state-of-the-art manufacturing facilities where we produce a comprehensive range of industrial chemicals. Our manufacturing processes adhere to strict quality standards and environmental regulations, ensuring consistent product quality and sustainable operations.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" max-w-5xl mx-auto px-6 py-16 bg-gradient-to-br ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`
               border-b border-gray-300
              transition-all duration-300 ease-in-out
            `}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full md:px-8 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-none rounded-2xl transition-colors duration-200"
            >
              <h3
                className={`
                text-lg font-medium pr-8 transition-colors duration-200
                ${activeIndex === index ? "text-secondary" : "text-black "}
              `}
              >
                {faq.question}
              </h3>
              <div
                className={`
                flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full
                transition-all duration-300 ease-in-out
                ${
                  activeIndex === index
                    ? "bg-green-100 text-secondary rotate-180"
                    : "bg-gray-100 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500"
                }
              `}
              >
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              </div>
            </button>

            {/* Answer Content */}
            <div
              className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
            >
              <div className="md:px-8 pb-6">
                <div
                  className={`
                  border-t border-gray-100 pt-6 transition-all duration-300
                  ${activeIndex === index ? "translate-y-0" : "translate-y-2"}
                `}
                >
                  <p className="text-gray-700 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 ">
        <div className="  rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4">
          <p className="font-medium text-lg md:text-xl text-center md:text-left">
            Can't find what you're looking for?<br /> Contact us here:
          </p>
          <Link href={'tel:+91 -8179987444'} className="inline-flex items-center px-6 py-3 border border-gray-300 text-light font-medium rounded-xl  duration-200  transform hover:scale-105 transition-transform">
            +91 -8179987444
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
