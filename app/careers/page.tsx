import { CareersHero } from "@/assets/Index";
import CareerSection from "@/components/Careers/CareerSection";
import ImageGallery from "@/components/Careers/ImageGallery";
import Internships from "@/components/Careers/Internships";
import JoinUs from "@/components/Careers/JoinUs";
import Openings from "@/components/Careers/Openings";
import WhyJoinUs from "@/components/Careers/WhyJoinUs";
import HeroSection from "@/components/Reusable/HeroSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection 
       image={CareersHero}
       heading="Grow With a Legacy of Innovation and Excellence"
       highlight="Legacy"
      />
      <CareerSection />
      <WhyJoinUs />
      <ImageGallery />
      <Openings />
      <Internships />
      <JoinUs />
    </div>
  );
};

export default page;
