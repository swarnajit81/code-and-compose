import HowItWorksSection from "@/components/HowItWorksSection";
import LandingSection from "@/components/LandingSection";
import ListingSection from "@/components/ListingSection";
import OurTeam from "@/components/OurTeam";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  min-h-screen" >
      <LandingSection />
      <ListingSection />
      <HowItWorksSection/>
      <OurTeam />
    </div>
  );
}
