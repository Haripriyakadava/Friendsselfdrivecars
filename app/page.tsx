import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative">

        <div id="home" className="scroll-mt-40"><Hero /></div>

        <div id="cars" className="scroll-mt-40"><Fleet /></div>

        <div id="why-choose-us" className="scroll-mt-40"><Services /></div>

        <div id="about" className="scroll-mt-40"><WhyChooseUs /></div>

        <div id="contact" className="scroll-mt-40"><CTA /></div>

        <Footer />

      </main>
    </>
  );
}