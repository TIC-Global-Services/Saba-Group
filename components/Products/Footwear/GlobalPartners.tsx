import React from "react";
import PartnerCard from "../../Reusable/PartnerCard";
import { Trumpler, Dytan, Peicolor, TJ } from "@/assets/Index";

const GlobalPartners = () => {
  return (
    <div className=" mx-auto px-20">
      <h1 className="text-[44px] font-bold text-center leading-10 mb-[67px]">
        Our Global Partners
      </h1>
      <div className="flex flex-col gap-12">
        <PartnerCard
          heroImage={Trumpler}
          title="TRUMPLER GmbH & Co., Germany"
          description="Founded in 1868, Trumpler is globally recognized for its excellence in leather processing chemicals, particularly in the wet-end segment. Their fatliquors, syntans, and the innovative DYTAN® series are widely adopted for their performance and environmental compliance."
        />

        <PartnerCard
          heroImage={Dytan}
          title="DyTan®"
          description="DyTan® is a revolutionary chrome-free, metal-free, and aldehyde-free tanning system developed by Trumpler. It offers excellent dye penetration, brilliant shades, high abrasion resistance, and strong shaving properties—all while operating at neutral pH. DyTan® simplifies the tanning process by enabling tanning and dyeing in a single step, with no additional syntan or pickling required. Its biodegradable, bisphenol-free nature makes it ideal for modern, eco-conscious leather production."
        />

        <PartnerCard
          heroImage={Peicolor}
          title="Pielcolor Trends in Leather, Spain"
          description="Part of the Stahl Group, PielColor has been a benchmark for leather finishing for over 45 years. They offer a wide range of high-performance and fashion-forward topcoats, pigments, and auxiliaries—such as their acclaimed Magic Line. Their products are REACH-compliant and tailored to meet the demands of global fashion and lifestyle brands."
        />

        <PartnerCard
          heroImage={TJ}
          title="T&J (China) – Sustainable Tanning Extracts"
          description="T&J specializes in natural, vegetable-based tanning extracts that support eco-friendly wet-end processing. These products align with international environmental standards, helping tanneries shift toward cleaner, bio-based alternatives. Our partnership with T&J reinforces Saba Group's mission to promote greener tanning practices throughout India."
        />
      </div>
    </div>
  );
};

export default GlobalPartners;
