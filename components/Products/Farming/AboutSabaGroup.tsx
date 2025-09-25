import AboutRisaForm from "@/assets/Products/Farming/AboutRisaForm.png";
import Image from "next/image";
import React from "react";

const AboutSabaGroup = () => {
  return (
    <div className="px-6 md:px-14 py-10 md:py-20">
      <div className="bg-secondary text-white grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto rounded-xl overflow-hidden">
        {/* Left: Text */}
        <div className="px-6 py-12 md:py-20 lg:py-28 flex flex-col items-start justify-center space-y-4">
          {/* <p className="uppercase tracking-wide text-sm ">About Risa Farm</p> */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            About Risa Farm
          </h1>
          <p className="leading-relaxed text-lg">
            At Risa Farm, farming isn’t just our livelihood — it’s our passion.
            Established with a vision to embrace nature and cultivate health, we
            blend traditional farming methods with modern techniques to produce
            fresh, natural, and chemical-free products for your family
            <br />
            <br />
          </p>
          <p>Our farm specializes in: </p>
          <ul className="leading-relaxed text-lg">
            <li className="list-disc ml-6">
              Agricultural Crops: Lush paddy fields, nutrient-rich banana
              plantations, seasonal vegetables, juicy mangoes, and farm-fresh
              coconuts.
            </li>
            <li className="list-disc ml-6">
              Livestock Farming: Healthy cattle providing fresh milk, happy
              goats raised in clean and natural surroundings, and poultry
              offering farm-fresh eggs and meat.
              <br />
              We also take pride in maintaining an eco-friendly and
              self-sustaining farmhouse — a peaceful retreat nestled amidst
              nature
            </li>
          </ul>
        </div>

        <div className="relative">
          <Image
            src={AboutRisaForm}
            alt="About Saba Group"
            className="w-full h-full object-cover object-right"
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            priority // Optional: for faster loading
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSabaGroup;
