import AboutUs from "@/components/sections/AboutUs";
import { Banner } from "@/components/sections/Banner";
import { Consultancy } from "@/components/sections/Consultancy";
import { CTA } from "@/components/sections/CTA";
import { Products } from "@/components/sections/Products";
import { VisionMission } from "@/components/sections/VisionMission";
import { WhyUs } from "@/components/sections/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main  >
      <Banner/>
      <AboutUs/>
      <VisionMission/>
      <Products/>
      <Consultancy/>
      <WhyUs/>
      <CTA/>
    </main>
  );
}
