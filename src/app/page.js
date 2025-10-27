import AboutUs from "@/components/sections/AboutUs";
import { Banner } from "@/components/sections/Banner";
import { VisionMission } from "@/components/sections/VisionMission";
import Image from "next/image";

export default function Home() {
  return (
    <main  >
      <Banner/>
      <AboutUs/>
      <VisionMission/>
    </main>
  );
}
