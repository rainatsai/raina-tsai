import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted border-2 border-divider flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Photo</span>
          </div>
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-text mb-6 leading-tight">
          Yu-Ting (Raina) Tsai
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Product Manager. Community Creator. Entrepreneur.
        </h2>
        
        <p className="text-lg md:text-xl text-primary-text mb-12 font-medium italic">
          "I build things that connect people, numbers, and stories."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('experience')}
            className="bg-accent hover:bg-hover-yellow hover:text-primary-text transition-all duration-300 px-8 py-3 text-base font-medium"
          >
            → View Work
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-divider text-primary-text hover:bg-muted transition-all duration-300 px-8 py-3 text-base font-medium"
          >
            ↓ Learn More
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-hover-yellow hover:text-primary-text transition-all duration-300 px-8 py-3 text-base font-medium"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;