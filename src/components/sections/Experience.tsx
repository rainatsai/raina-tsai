import { Smartphone } from 'lucide-react';

const experiences = [
  {
    company: "華南永昌證券 (Hua Nan Securities)",
    title: "Project and Product Manager",
    period: "May 2024 - present",
    description: "Conducted in-depth research and authored reports on U.S. stocks, ETFs, and bonds, providing strategic market insights for HNCB and institutions. Managed product development for the in-house 'e指沖' sub-brokerage app, overseeing end-to-end project management including requirements analysis, system planning, testing, and regulatory compliance.",
    icon: "hua-nan"
  },
  {
    company: "Uber Eats",
    title: "PayFac AML Intern", 
    period: "Jul 2022 - Aug 2022",
    description: "Promoted PayFac (third-party payment) verification project by reaching out to 3,000+ restaurants, achieving the highest completion rate of 90%. Maintained an 80% retention rate by collaborating with cross-functional teams and utilized CRM systems (G-Suite, Salesforce, SAP) to handle 500+ restaurant information.",
    icon: "uber-eats"
  },
  {
    company: "Mitte 3C",
    title: "Marketing Assistant",
    period: "Feb 2019 - Oct 2019", 
    description: "Increased target audience growth rate by nearly 100% by managing Facebook, Instagram, and YouTube channels. Accomplished one million turnovers by hosting 4+ marketing events from conception to execution. Achieved highest CTR and 200k+ views through innovative YouTube soap opera series.",
    icon: "smartphone"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-accent rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-12 text-center animate-fade-in">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article key={index} className="border-l-2 border-divider pl-6 relative hover-scale animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="absolute w-8 h-8 bg-background border-2 border-divider rounded-full -left-5 top-1 flex items-center justify-center">
                {exp.icon === "hua-nan" && (
                  <img 
                    src="/lovable-uploads/037f1a73-49ba-433f-96a5-47c0a76032f1.png" 
                    alt="Hua Nan Securities" 
                    className="w-5 h-5 object-contain"
                  />
                )}
                {exp.icon === "uber-eats" && (
                  <img 
                    src="/lovable-uploads/uber-eats-logo.png" 
                    alt="Uber Eats" 
                    className="w-5 h-5 object-contain"
                  />
                )}
                {exp.icon === "smartphone" && <Smartphone className="w-4 h-4 text-accent" />}
              </div>
              
              <div className="mb-4">
                <h3 className="font-display text-xl font-semibold text-primary-text mb-1">
                  {exp.company}
                  <span className="font-inter text-base font-normal text-muted-foreground ml-2">
                    — {exp.title}
                  </span>
                </h3>
                <time className="text-sm text-muted-foreground font-medium">
                  {exp.period}
                </time>
              </div>
              
              <p className="prose-editorial text-base leading-relaxed">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;