import { Bike, Building, Smartphone } from 'lucide-react';

const experiences = [
  {
    company: "Hua Nan Securities",
    title: "Product & Project Manager",
    period: "May 2024 – Present",
    description: "Led the development of the sub-brokerage app \"e指沖,\" managing the entire product cycle: from requirement gathering to go-live and audit preparation. Authored investment reports on U.S. ETFs, stocks, and bonds for institutional use.",
    icon: "hua-nan"
  },
  {
    company: "Uber Eats",
    title: "PayFac AML Intern",
    period: "Jul – Aug 2022",
    description: "Executed third-party payment (PayFac) verification for 3,000+ merchants, achieving the highest completion rate (90%). Managed cross-team coordination and CRM systems (Salesforce, SAP) for 500+ merchant profiles.",
    icon: "uber-eats"
  },
  {
    company: "Mitte 3C",
    title: "Marketing Assistant",
    period: "Feb – Oct 2019",
    description: "Doubled social growth across FB, IG, and YouTube by running themed campaigns and events. Created a viral YouTube mini-drama series with 200K+ views and 1M+ revenue in event-related sales.",
    icon: "smartphone"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-12 text-center">
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article key={index} className="border-l-2 border-divider pl-6 relative">
              <div className="absolute w-8 h-8 bg-background border-2 border-divider rounded-full -left-5 top-1 flex items-center justify-center">
                {exp.icon === "hua-nan" && (
                  <img 
                    src="/lovable-uploads/037f1a73-49ba-433f-96a5-47c0a76032f1.png" 
                    alt="Hua Nan Securities" 
                    className="w-5 h-5 object-contain"
                  />
                )}
                {exp.icon === "uber-eats" && <Bike className="w-4 h-4 text-accent" />}
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