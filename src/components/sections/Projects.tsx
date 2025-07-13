const projects = [
  {
    title: "Eastern Union Future",
    subtitle: "A fintech startup for retail investors.",
    description: "Built a bilingual equity platform using S&P Global data, positioning it as \"Bloomberg for retail.\""
  },
  {
    title: "Lovesick Rehab",
    subtitle: "A lifestyle brand and community with 100K+ FB members, 50K fans.",
    description: "Worked with creators and media like @bigtan___bibi, Tinder, and EBC News."
  },
  {
    title: "The Mingle Studio",
    subtitle: "A career and study-abroad community for young professionals.",
    description: "Organized 4 large-scale events with 20+ speakers and over 300 attendees."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-12 text-center">
          Company & Brands I've Built
        </h2>
        
        <div className="space-y-10">
          {projects.map((project, index) => (
            <article key={index} className="group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                  <span className="text-accent font-semibold text-sm">→</span>
                </div>
                
                <div className="flex-1">
                  {project.title === "Lovesick Rehab" ? (
                    <a 
                      href="https://linktr.ee/lovesick.rehab?utm_source=linktree_profile_share&ltsid=6f9e5e3a-11e5-4013-9d1c-def30e459d30"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl font-semibold text-primary-text mb-2 group-hover:text-accent transition-colors duration-200 hover:text-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="font-display text-xl font-semibold text-primary-text mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                  )}
                  
                  <p className="text-base text-muted-foreground mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  
                  <p className="prose-editorial text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {index < projects.length - 1 && (
                <hr className="border-divider my-8" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;