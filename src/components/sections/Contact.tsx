import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "yuting092142@gmail.com",
      href: "mailto:yuting092142@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl font-bold text-primary-text mb-8">
          Contact
        </h2>
        
        <p className="prose-editorial text-lg mb-12">
          Let's talk ideas, products, or creative work.
        </p>
        
        <div className="space-y-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                className="flex items-center justify-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-200 group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-base font-medium">{contact.value}</span>
              </a>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;