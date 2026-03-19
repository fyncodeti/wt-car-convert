import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ServiceListSection from "@/components/ServiceListSection";
import CTAFinalSection from "@/components/CTAFinalSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ServiceListSection />
      <CTAFinalSection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
