import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-2 border-divider hover-scale">
            <AvatarImage 
              src="/lovable-uploads/661b9825-6698-4165-9ebe-1d216ae835b0.png"
              alt="Yu-Ting (Raina) Tsai"
              className="object-cover"
            />
            <AvatarFallback className="text-muted-foreground text-sm">YT</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-text mb-6 leading-tight animate-fade-in" style={{animationDelay: '200ms'}}>
          Yu-Ting (Raina) Tsai
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-fade-in" style={{animationDelay: '400ms'}}>
          Product Manager. Community Creator. Entrepreneur.
        </h2>
        
        <p className="text-lg md:text-xl text-primary-text mb-12 font-medium italic animate-fade-in" style={{animationDelay: '600ms'}}>
          "I build things that connect people, numbers, and stories."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '800ms'}}>
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