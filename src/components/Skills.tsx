import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { Database, CloudCog, BrainCircuit, Code, Server, GitBranch, LayoutDashboard, LineChart, MessagesSquare } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{name: string, icon: JSX.Element}>;
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
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1.5"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  // Icon mapping for skills
  const getSkillWithIcon = (name: string) => {
    const iconSize = 14; // Small icon size
    
    const iconMap: Record<string, JSX.Element> = {
      // Programming & ML
      'Python': <Code size={iconSize} />,
      'SQL': <Database size={iconSize} />,
      'TensorFlow': <BrainCircuit size={iconSize} />,
      'PyTorch': <BrainCircuit size={iconSize} />,
      'Scikit-learn': <BrainCircuit size={iconSize} />,
      'LLMs': <BrainCircuit size={iconSize} />,
      'RAG pipelines': <Database size={iconSize} />,
      'LangChain/LangGraph': <BrainCircuit size={iconSize} />,
      
      // Software Engineering
      'Scalable System Design': <Server size={iconSize} />,
      'Object-Oriented Programming': <Code size={iconSize} />,
      'API Development (FastAPI)': <Server size={iconSize} />,
      'Code Optimization': <Code size={iconSize} />,
      'Version Control (Git, GitHub)': <GitBranch size={iconSize} />,
      'AWS': <CloudCog size={iconSize} />,
      
      // Data & AI
      'Machine Learning': <BrainCircuit size={iconSize} />,
      'Statistical Analysis': <LineChart size={iconSize} />,
      'Predictive Modeling': <LineChart size={iconSize} />,
      'Data Cleaning': <Database size={iconSize} />,
      'A/B Testing': <LineChart size={iconSize} />,
      'ETL Pipelines': <Database size={iconSize} />,
      'Dashboard Development': <LayoutDashboard size={iconSize} />,
      'PowerBI': <LayoutDashboard size={iconSize} />,
      'Matplotlib': <LineChart size={iconSize} />,
      'SciPy': <BrainCircuit size={iconSize} />,
      'NLP': <MessagesSquare size={iconSize} />,
    };
    
    return {
      name,
      icon: iconMap[name] || <div className="w-4 h-4" /> // Fallback empty div if icon not found
    };
  };

  const skillCategories = [
    {
      title: 'Programming & ML',
      skills: ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'RAG pipelines', 'LangChain/LangGraph'].map(getSkillWithIcon)
    },
    {
      title: 'Software Engineering',
      skills: ['Scalable System Design', 'Object-Oriented Programming', 'API Development (FastAPI)', 'Code Optimization', 'Version Control (Git, GitHub)', 'AWS'].map(getSkillWithIcon)
    },
    {
      title: 'Data & AI',
      skills: ['Machine Learning', 'Statistical Analysis', 'Predictive Modeling', 'Data Cleaning', 'A/B Testing', 'ETL Pipelines', 'Dashboard Development', 'PowerBI', 'Matplotlib', 'SciPy', 'NLP'].map(getSkillWithIcon)
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
