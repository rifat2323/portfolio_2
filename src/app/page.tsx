import PizzaAutomatSection from "@/components/custom/Home/Auto/Auto";
import Brief from "@/components/custom/Home/Brif/Brif";
import ContactForm from "@/components/custom/Home/Contact/ContactForm";
import CStorage from "@/components/custom/Home/CStrotage/CStrorage";




import HeroSection from "@/components/custom/Home/Hero/HeroSection";
import ModelsSection from "@/components/custom/Home/ModelSeaction/ModelSection";
import PaymentMethodsSection from "@/components/custom/Home/Paymnet/PaymentMethodsSection";
import PizzaAutomatSectionUser from "@/components/custom/Home/PizzaAutomatSection/PizzaAutomatSection";
import ProfitableSection from "@/components/custom/Home/profitableSeaction/ProfitableSection";
import RemoteControlSection from "@/components/custom/Home/RemoteControlSection/RemoteControlSection";
import Sales from "@/components/custom/Home/Sales/Sales";
import Loader from "@/components/custom/Loader";
import { Suspense } from "react";



export default function Home() {
  return (
    <div className=" w-full flex flex-col min-h-dvh">
      <section id="hero_station" className=" w-full">
      <HeroSection/>
      </section>
      <section id="Brif" className=" w-full ">
        <Suspense fallback={<Loader/>}>

      <Brief/>
        </Suspense>
      </section>
      <section id="Models" className=" w-full ">
        <Suspense fallback={<Loader/>}>

      <ModelsSection/>
        </Suspense>

      </section>
      <section id="Card" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <Sales/>
        </Suspense>
     
      </section>
      <section id="Automated" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <PizzaAutomatSection/>
     </Suspense>
    
      </section>
      <section id="storage" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <CStorage/>
     </Suspense>
    
      </section>
      <section id="control" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <RemoteControlSection/>
     </Suspense>
     
      </section>
      <section id="payment" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <PaymentMethodsSection/>
     </Suspense>
 
      </section>
      <section id="contact_form" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <ContactForm/>
     </Suspense>
    
      </section>
      <section id="profit" className=" w-full "> 
      <Suspense fallback={<Loader/>}>

      <ProfitableSection/>
    </Suspense>

   
      </section>
      <section id="autoMated" className=" w-full ">
      <Suspense fallback={<Loader/>}>

      <PizzaAutomatSectionUser/>
     </Suspense>
   
      </section>

    </div>
  );
}
