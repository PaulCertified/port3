import React from 'react';
import { Container } from './components/layout';
import {
  Navbar,
  Hero,
  Features,
  Projects,
  Testimonials,
  Approach,
  Contact,
  Footer,
} from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0A0A1B] text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <Navbar />
      
      <Container>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="approach">
          <Approach />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </Container>
    </div>
  );
};

export default App;