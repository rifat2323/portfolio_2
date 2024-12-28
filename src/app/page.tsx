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
      <section id="Models" className=" w-full mt-3">

      <Sales/>
      </section>
      <section id="Automated" className=" w-full mt-3">

      <PizzaAutomatSection/>
      </section>
      <section id="storage" className=" w-full mt-3">

     <CStorage/>
      </section>
      <section id="control" className=" w-full mt-3">

     <RemoteControlSection/>
      </section>
      <section id="payment" className=" w-full mt-3">

     <PaymentMethodsSection/>
      </section>
      <section id="contact_form" className=" w-full mt-3">

     <ContactForm/>
      </section>
      <section id="profit" className=" w-full mt-3">

     <ProfitableSection/>
      </section>
      <section id="autoMated" className=" w-full mt-3">

     <PizzaAutomatSectionUser/>
      </section>
      
    </div>
  );
}
