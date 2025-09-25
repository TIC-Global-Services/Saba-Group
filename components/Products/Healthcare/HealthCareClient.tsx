import { HealthCareBanner } from "@/assets/Index";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";
import CTASection from "./CTASection";

const HealthCareClient = () => {
  return (
    <>
      <HeroSection
        heading="High-Performance Shoe Division for Leather, Footwear & Industrial Applications"
        highlight="Shoe Division"
        image={HealthCareBanner}
      />
      <p
        className=" mb-16 mt-40 max-w-6xl mx-auto"
        style={{
          fontWeight: 400,
          fontSize: "32px",
          lineHeight: "112%",
          letterSpacing: "2%",
          textAlign: "center",
        }}
      >
        An emerging vertical focused on health, wellbeing, and holistic living,
        with upcoming ventures in wellness products and services.
      </p>
      <CTASection />
    </>
  );
};

export default HealthCareClient;
