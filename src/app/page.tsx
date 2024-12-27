import Brief from "@/components/custom/Home/Brif/Brif";

import HeroSection from "@/components/custom/Home/Hero/HeroSection";
import ModelsSection from "@/components/custom/Home/ModelSeaction/ModelSection";


export default function Home() {
  return (
    <div className=" w-full flex flex-col min-h-dvh">
      <section id="hero_station" className=" w-full">
      <HeroSection/>
      </section>
      <section id="Brif" className=" w-full mt-3">
      <Brief/>
      </section>
      <section id="Models" className=" w-full mt-3">

      <ModelsSection/>
      </section>
      
    </div>
  );
}
