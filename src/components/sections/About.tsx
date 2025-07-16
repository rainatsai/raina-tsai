const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-12 text-center">
          About
        </h2>
        
        <div className="prose-editorial space-y-6">
          <p>
            Hi, I'm Raina, a bilingual product manager with degrees in Finance and English Literature.
          </p>
          
          <p>
            Currently at Hua Nan Securities, I lead the development of a sub-brokerage app and produce investment insights on U.S. equities, ETFs, and bonds.
          </p>
          
          <p>
            My past work includes:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Verifying 3,000+ merchants at Uber Eats, achieving a 90% success rate</li>
            <li>Co-founding a 100K-member lifestyle brand</li>
            <li>Running career events for 300+ students at The Mingle Studio</li>
          </ul>
          
          <p>
            I work where finance meets creativity and recharge through drawing, baking, and weightlifting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;