import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose";
import ProjectForm from "./components/ProjectForm";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#061116] font-[Hind_Siliguri,Inter,system-ui,sans-serif]">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#00C878] focus:px-4 focus:py-2 focus:font-bold focus:text-[#061116]"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Packages />
        <Portfolio />
        <WhyChoose />
        <ProjectForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
