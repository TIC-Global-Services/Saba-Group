import { ProductBanner } from "@/assets/Index";
import ChemicalDivision from "@/components/Products/Leather/ChemicalDivision";
import ChemicalGalleryGrid from "@/components/Products/Leather/ChemicalGalleryGrid";
import FAQ from "@/components/Products/Leather/FAQ";
import GlobalPartners from "@/components/Products/Leather/GlobalPartners";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";

const LeatherClient = () => {
  return (
    <>
      <HeroSection
        heading="High-Performance Chemical Solutions for Leather, Footwear & Industrial Applications"
        highlight="Chemical Solutions"
        image={ProductBanner}
      />
      <ChemicalDivision/>
      <ChemicalGalleryGrid/>
      <GlobalPartners/>
      <FAQ/>
    </>
  );
};

export default LeatherClient;
