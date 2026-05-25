import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

// ─── HomePage ─────────────────────────────────────────────────────────────────
// Halaman utama: merakit semua section dalam urutan yang sesuai dengan design.

const HomePage = () => (
  <main id="main-content" aria-label="Main content">
    {/* 1. Hero — pembuka dengan headline dan CTA */}
    <HeroSection />

    {/* 2. About — brand logos, stats, dan process accordion */}
    <AboutSection />

    {/* 3. Services — grid 9 layanan */}
    <ServicesSection />

    {/* 4. Industry — tabs per industri */}
    <IndustrySection />

    {/* 5. Portfolio — showcase 3 project */}
    <PortfolioSection />

    {/* 6. Testimonials — review klien */}
    <TestimonialsSection />

    {/* 7. Contact — FAQ accordion + form kontak */}
    <ContactSection />
  </main>
);

export default HomePage;
