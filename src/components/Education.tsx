
import { GraduationCap } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Education = () => {
  const education = [
    {
      degree: 'MASTER OF SCIENCE IN INFORMATION SYSTEMS',
      institution: 'California State University',
      location: 'Fullerton, CA',
      period: 'Expected May 2025'
    },
    {
      degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
      institution: 'Rajasthan Technical University',
      location: 'Jaipur, RJ',
      period: 'Graduated Jul 2020'
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText 
          text="Education" 
          className="section-title text-center mb-12"
          tag="h2"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-10">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className={`rounded-lg glass-card p-6 md:text-right card-hover animate-in ${index % 2 === 0 ? 'md:animate-fade-in-right' : 'md:animate-fade-in-left'}`}>
                      <h3 className="text-lg font-medium">{edu.degree}</h3>
                      <p className="text-primary mt-1">{edu.institution}</p>
                      <p className="text-sm text-foreground/60 mt-2">{edu.location}</p>
                      <p className="text-sm text-foreground/60">{edu.period}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-6 transform -translate-x-1/2 bg-primary text-white p-2 rounded-full">
                    <GraduationCap size={20} />
                  </div>
                  
                  <div className="md:w-1/2 md:pl-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
