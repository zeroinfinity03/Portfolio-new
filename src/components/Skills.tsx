
import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCategory = ({ title, skills, delay = 0 }: SkillCategoryProps) => {
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('appear');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={categoryRef}
      className="animate-in glass-card rounded-xl p-6 md:p-8"
    >
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming and Data Processing',
      skills: ['Python', 'SQL', 'pandas', 'numPy']
    },
    {
      title: 'Data Science and Analytics',
      skills: ['Hypothesis Testing', 'Data Cleaning', 'Statistical Analysis', 'Machine Learning', 'A/B Testing', 'Predictive Modeling']
    },
    {
      title: 'Tools & Cloud',
      skills: ['AWS (S3, EC2, Lambda)', 'FastAPI', 'Scikit-learn', 'TensorFlow', 'Git and Github', 'Docker', 'PyTorch']
    },
    {
      title: 'Data Visualization',
      skills: ['Tableau', 'Matplotlib', 'Plotly']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText 
          text="Skills & Expertise" 
          className="section-title text-center mb-12"
          tag="h2"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
