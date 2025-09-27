'use client';
import ContactSection from "@/components/Contact/ContactForm";
import DivisionsSection from "@/components/Contact/DivisionsSection";
import MapSection from "@/components/Contact/MapSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactSection />
      <DivisionsSection/>
      <MapSection/>
    </div>
  );
};

export default page;
