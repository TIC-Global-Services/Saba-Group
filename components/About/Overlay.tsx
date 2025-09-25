import Image from "next/image";
import React from "react";
import { Delivery, Special, TechSupport } from "@/assets/Index";

const Overlay = () => {
  const items = [
    {
      src: Special,
      title: null, // no overlay
      desc: null,
      colSpan: "md:col-span-2",
      overlay: null,
    },
    {
      src: TechSupport,
      title: "24/7 Tech Support",
      desc: "We believe in providing unparalleled support to our clients. Our technical expertise is available around the clock to ensure seamless operations and address any challenges that arise.",
      colSpan: "",
      overlay: "bg-secondary/70",
    },
    {
      src: Delivery,
      title: "Delivery",
      desc: "Timeliness is at the heart of our business. We understand the importance of prompt delivery and work tirelessly to ensure our products reach our customers on time, every time.",
      colSpan: "",
      overlay: "bg-secondary/90",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className={`relative w-full h-[300px] md:h-[500px] ${item.colSpan}`}
        >
          <Image
            src={item.src}
            alt={item.title ?? "Service Image"}
            fill
            className="object-cover"
          />
          {item.title && (
            <>
              <div className={`absolute inset-0 ${item.overlay}`} />
              <div className="absolute inset-0 flex flex-col justify-start py-10 gap-6 items-start text-start text-white px-8">
                <h1 className="text-3xl md:text-4xl font-medium  mb-2">
                  {item.title}
                </h1>
                <p className="text-sm md:text-base max-w-md">{item.desc}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Overlay;
