import { FootWearBanner } from "@/assets/Index";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";
import ChemicalDivision from "./ChemicalDivision";
import ChemicalGalleryGrid from "./ChemicalGalleryGrid";
import GlobalPartners from "./GlobalPartners";
import ServicesSection from "./ServicesSection";
import WhatWeOffer from "./WhatWeOffer";

const FootWearClient = () => {
  return (
    <>
      <HeroSection
        heading="High-Performance Shoe Division for Leather, Footwear & Industrial Applications"
        highlight="Shoe Division"
        image={FootWearBanner}
      />
      <ChemicalDivision />
      <WhatWeOffer />
      <ChemicalGalleryGrid />
      <GlobalPartners />
      <ServicesSection />
    </>
  );
};

export default FootWearClient;
