
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string[];
  link: string;
  detailLink: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  link,
  detailLink,
  delay = 0
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="animate-in glass-card card-hover rounded-xl p-6 md:p-8 flex flex-col h-full"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-medium">{title}</h3>
        
        <ul className="mt-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-foreground/80 flex">
              <span className="text-primary mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-4">
        <Link
          to={detailLink}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <span>View full case study</span>
          <ArrowRight size={16} />
        </Link>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Github size={18} />
          <span>GitHub repo</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
