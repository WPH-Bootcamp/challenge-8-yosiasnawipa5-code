import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Process from './components/sections/Process';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

const App: React.FC = () => (
  <div style={{ background:'#0a0a0a', color:'#fff', minHeight:'100vh', overflowX:'hidden' }}>
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Process />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </div>
);
export default App;
