import { ExpImg } from "@/assets/Index";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center  mx-auto">
        {/* Text Section */}
        <div className=" px-6 md:pl-14">
          <p className="uppercase tracking-wide text-sm text-gray-500">
            SABA GROUP
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mt-2">
            With over <span className="text-secondary">37+ Years</span> of
            Experience
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We are dedicated to being a trusted and strong partner for
            multinational manufacturers across various industries specializing in
            a wide range of products, including adhesives, chemicals, release
            agents, pigments, and footwear accessories. We are your reliable
            partner in driving industry excellence and growth.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our customers are our priority. We focus on building long-term
            relationships by understanding their unique needs and consistently
            exceeding their expectations.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={ExpImg}
            alt="Experience Image"
            className="w-full md:w-[80%] md:rounded-l-xl object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
