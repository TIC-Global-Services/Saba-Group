import { InfraBanner } from "@/assets/Index";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";
import ChemicalDivision from "./ChemicalDivision";
import ChemicalGalleryGrid from "./ChemicalGalleryGrid";
import CertificationSlider from "./CertificationSlider";
import ProjectsSection from "./ProjectsSection";
import MajorClientsSection from "./MajorClients";

const InfraDivisionClient = () => {
  return (
    <>
      <HeroSection
        heading="Driving Growth Through Advanced Materials And Engineering Excellence"
        highlight="advanced materials"
        image={InfraBanner}
      />
      <ChemicalDivision/>
      <ChemicalGalleryGrid/>
      <CertificationSlider/>
      <ProjectsSection/>
      <MajorClientsSection/>
    </>
  );
};

export default InfraDivisionClient;
