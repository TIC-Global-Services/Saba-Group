import { CircleIcon } from "@/assets/Index";
import Image from "next/image";
import React from "react";

const CoreValues = () => {
  const values = [
    {
        title: "Quality",
        desc: "We deliver chemical solutions that meet global standards, with strict quality checks ensuring safety, reliability, and consistency in every batch."
    },
    {
        title: "Technology",
        desc: "Using advanced processes and modern tools, we optimize performance, safety, and scalability across all stages of production."
    },
    {
        title: "Innovation",
        desc: "Driven by research and insights, we create formulations and processes that address today’s needs and anticipate future opportunities."
    },
    {
        title: "Sustainability",
        desc: "With eco-friendly practices and greener formulations, we reduce environmental impact while supporting clients’ sustainability goals."
    },
  ];
  return (
    <div className=" px-6 md:px-14 py-10 md:py-20 space-y-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className=" space-y-4">
        <p>CORE VALUES</p>
        <h1 className=" text-3xl md:text-5xl font-semibold">
          The <span className="text-secondary">Core of Engineering</span> and
          Manufacturing <span className="text-secondary">Synergy.</span>
        </h1>
      </div>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 space-x-4">
            {values.map((value, idx)=>(
                <div key={idx} className=" bg-[#f5f5f5] p-4 md:p-6 rounded-2xl space-y-4 mb-4">
                    <Image src={CircleIcon} alt="Circle" width={25} />
                    <h2 className=" font-semibold text-lg">{value.title}</h2>
                    <p className=" text-gray-600">{value.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
