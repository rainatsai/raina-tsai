const Skills = () => {
  const languages = [
    "Mandarin (native)",
    "English (fluent, TOEIC Gold)",
    "Dutch (basic)"
  ];

  const tools = [
    "Excel", "PowerPoint", "Salesforce", "SAP", "G-Suite", "Photoshop"
  ];

  const certifications = [
    "Google Ads Display",
    "Google Digital Marketing", 
    "Google Analytics (Power User)"
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-12 text-center">
          Skills & Certifications
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-text mb-4">
              Languages
            </h3>
            <p className="prose-editorial text-base">
              {languages.join(", ")}
            </p>
          </div>
          
          <hr className="border-divider" />
          
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-text mb-4">
              Tools
            </h3>
            <p className="prose-editorial text-base">
              {tools.join(", ")}
            </p>
          </div>
          
          <hr className="border-divider" />
          
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-text mb-4">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="prose-editorial text-base flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;