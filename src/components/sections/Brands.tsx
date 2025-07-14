import { Heart, Users, TrendingUp, Star } from 'lucide-react';

const brands = [
  {
    name: "Lovesick Rehab",
    tagline: "Brand & Community",
    period: "Apr 2020 - present",
    description: "Established and operated a Facebook group of over 100,000 people, fan account of 50,000, and Instagram of 20,000+ followers with 2% monthly growth. Cooperated with Internet celebrities to increase exposure and established a fintech company focused on AI solutions for financial institutions.",
    metrics: ["100k+ Facebook Group", "50k+ Fan Page", "20k+ Instagram", "2% Monthly Growth"],
    icon: Heart,
    gradient: "from-pink-500/20 to-red-500/20"
  },
  {
    name: "The Mingle Studio", 
    tagline: "Career Community Platform",
    period: "Sept 2021 - present",
    description: "Founded a community to guide fresh graduates on career planning and studying abroad. Designed 4 events with 20+ speakers, attracting 300+ participants. Coordinated with Fu Jen Catholic University and negotiated with 5+ vendors, reducing total costs by 20%.",
    metrics: ["300+ Event Participants", "20+ Expert Speakers", "4 Major Events", "20% Cost Reduction"],
    icon: Users,
    gradient: "from-blue-500/20 to-purple-500/20"
  }
];

const Brands = () => {
  return (
    <section id="brands" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl font-bold text-primary-text mb-4">
            Company & Brands I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From community building to fintech innovation, I've created platforms that connect people and drive meaningful engagement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <div 
                key={index} 
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${brand.gradient} backdrop-blur-sm border border-white/10 hover-scale animate-fade-in group`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                {/* Floating Icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-background border-2 border-divider rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-primary-text mb-2">
                    {brand.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-accent font-medium">{brand.tagline}</span>
                    <span className="text-muted-foreground">•</span>
                    <time className="text-sm text-muted-foreground">{brand.period}</time>
                  </div>
                </div>

                <p className="text-primary-text mb-6 leading-relaxed">
                  {brand.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {brand.metrics.map((metric, metricIndex) => (
                    <div 
                      key={metricIndex}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/20 backdrop-blur-sm"
                    >
                      <Star className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-primary-text">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Trending indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-accent">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-medium">Growing</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;