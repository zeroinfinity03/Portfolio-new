import { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { Database, CloudCog, BrainCircuit, Code, Server, GitBranch, LayoutDashboard, LineChart, MessagesSquare, BarChart, PieChart, ChartBar } from 'lucide-react';

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
      // Programming & Data Science
      'Python': <Code size={iconSize} />,
      'SQL': <Database size={iconSize} />,
      'Pandas': <Database size={iconSize} />,
      'NumPy': <BrainCircuit size={iconSize} />,
      'scikit-learn': <BrainCircuit size={iconSize} />,
      'SciPy': <BrainCircuit size={iconSize} />,
      'PyTorch': <BrainCircuit size={iconSize} />,
      'ETL Pipelines': <Database size={iconSize} />,
      'A/B Testing': <LineChart size={iconSize} />,
      'Matplotlib': <LineChart size={iconSize} />,
      'Seaborn': <BarChart size={iconSize} />,
      'Plotly': <ChartBar size={iconSize} />,
      'Power-BI': <PieChart size={iconSize} />,
      'Tableau': <LayoutDashboard size={iconSize} />,
      'Predictive Modeling': <LineChart size={iconSize} />,
      
      // NLP & LLM Development
      'RAG pipelines': <Database size={iconSize} />,
      'LangChain/LangGraph': <BrainCircuit size={iconSize} />,
      'Hugging Face': <MessagesSquare size={iconSize} />,
      'NLTK': <MessagesSquare size={iconSize} />,
      
      // Software Engineering & Cloud
      'FastAPI (API Development)': <Server size={iconSize} />,
      'AWS': <CloudCog size={iconSize} />,
      'Git & GitHub': <GitBranch size={iconSize} />,
      'Scalable System Design': <Server size={iconSize} />,
      'Object-Oriented Programming': <Code size={iconSize} />,
      'Code Optimization': <Code size={iconSize} />,
    };
    
    return {
      name,
      icon: iconMap[name] || <div className="w-4 h-4" /> // Fallback empty div if icon not found
    };
  };

  const skillCategories = [
    {
      title: 'Programming & Data Science',
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'scikit-learn', 'SciPy', 'PyTorch', 'ETL Pipelines', 'A/B Testing', 'Matplotlib', 'Seaborn', 'Plotly', 'Power-BI', 'Tableau', 'Predictive Modeling'].map(getSkillWithIcon)
    },
    {
      title: 'NLP & LLM Development',
      skills: ['RAG pipelines', 'LangChain/LangGraph', 'Hugging Face', 'NLTK'].map(getSkillWithIcon)
    },
    {
      title: 'Software Engineering & Cloud',
      skills: ['FastAPI (API Development)', 'AWS', 'Git & GitHub', 'Scalable System Design', 'Object-Oriented Programming', 'Code Optimization'].map(getSkillWithIcon)
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
