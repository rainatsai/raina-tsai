import { Heart, Users, Smartphone } from 'lucide-react';

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
  },
  {
    company: "Lovesick Rehab",
    title: "Co-founder",
    period: "Apr 2020 - present",
    description: "Established and operated a Facebook group of over 100,000 people, fan account of 50,000, and Instagram of 20,000+ followers with 2% monthly growth. Cooperated with Internet celebrities to increase exposure and established a fintech company focused on AI solutions for financial institutions.",
    icon: "heart"
  },
  {
    company: "The Mingle Studio", 
    title: "Co-founder",
    period: "Sept 2021 - present",
    description: "Founded a community to guide fresh graduates on career planning and studying abroad. Designed 4 events with 20+ speakers, attracting 300+ participants. Coordinated with Fu Jen Catholic University and negotiated with 5+ vendors, reducing total costs by 20%.",
    icon: "users"
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
                {exp.icon === "uber-eats" && (
                  <img 
                    src="/lovable-uploads/uber-eats-logo.png" 
                    alt="Uber Eats" 
                    className="w-5 h-5 object-contain"
                  />
                )}
                {exp.icon === "smartphone" && <Smartphone className="w-4 h-4 text-accent" />}
                {exp.icon === "heart" && <Heart className="w-4 h-4 text-accent" />}
                {exp.icon === "users" && <Users className="w-4 h-4 text-accent" />}
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