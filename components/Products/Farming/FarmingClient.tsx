import { FootWearBanner } from "@/assets/Index";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";
import ChemicalDivision from "./ChemicalDivision";
import ChemicalGalleryGrid from "./ChemicalGalleryGrid";
import AboutSabaGroup from "./AboutSabaGroup";
import OurVision from "./OurVision";


const FarmingClient = () => {
  return (
    <>
      <HeroSection
        heading="Excellence in Farming Through Innovation and Technology"
        highlight="Farming"
        image={FootWearBanner}
      />
      <ChemicalDivision/>
      <AboutSabaGroup/>
      <OurVision/>
      <ChemicalGalleryGrid/>
    </>
  );
};

export default FarmingClient;
