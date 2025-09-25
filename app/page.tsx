import { HomeHero } from "@/assets/Index";
import AboutSabaGroup from "@/components/Home/AboutSabaGroup";
import BusinessDivisions from "@/components/Home/BusinessDivisions";
import CoreValues from "@/components/Home/CoreValues";
import GlobalPartnerships from "@/components/Home/GlobalPartnerships";
import InternationalOperations from "@/components/Home/InternationalOperations";
import OurNetwork from "@/components/Home/OurNetwork";
import Testimonials from "@/components/Home/Testimonials";
import HeroSection from "@/components/Reusable/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        image={HomeHero}
        heading="Pioneering Excellence in Specialty Chemicals & Industrial Solutions"
        highlight="Chemicals & Industrial"
        buttonText="Know More"
        buttonLink="/about"
      />
      <AboutSabaGroup />
      <OurNetwork />
      <BusinessDivisions />
      <GlobalPartnerships />
      <InternationalOperations />
      <CoreValues />
      <Testimonials />
    </div>
  );
}
