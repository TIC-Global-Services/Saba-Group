import React from "react";
import { AboutHero } from "@/assets/Index";
import HeroSection from "@/components/Reusable/HeroSection";
import Experience from "@/components/About/Experience";
import Overlay from "@/components/About/Overlay";
import OurMission from "@/components/About/OurMission";
import ProductsWeCater from "@/components/About/ProductsWeCater";
import WorldMap from "@/components/About/WorldMap";
import MapRepresentation from "@/components/About/MapRepresentation";
import BoardOfDirectors from "@/components/About/BoardOfDirectors";
import Acheivements from "@/components/About/Acheivements";
import FAQ from "@/components/About/FAQ";

const page = () => {
  return (
    <div>
      <HeroSection
        image={AboutHero}
        heading="Decades of Innovation. Built for Tomorrow."
        highlight="Innovation"
      />
      <Experience />
      <Overlay />
      <OurMission />
      <ProductsWeCater />
      <MapRepresentation />
      <BoardOfDirectors />
      <Acheivements />
      <FAQ />
    </div>
  );
};

export default page;
