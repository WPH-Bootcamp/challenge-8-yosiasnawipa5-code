import HeroSection         from "../components/sections/HeroSection";
import StatsSection        from "../components/sections/StatsSection";
import ServicesSection     from "../components/sections/ServicesSection";
import IndustrySection     from "../components/sections/IndustrySection";
import PortfolioSection    from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection      from "../components/sections/ContactSection";
import ReadyToStartSection from "../components/sections/ReadyToStartSection";

const HomePage = () => (
  <main id="main-content" aria-label="Main content">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <IndustrySection />
    <PortfolioSection />
    <TestimonialsSection />
    <ContactSection />         {/* FAQ + orange CTA card */}
    <ReadyToStartSection />    {/* "Ready to Start?" form */}
  </main>
);

export default HomePage;
