import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Brands from '@/components/sections/Brands';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Brands />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
