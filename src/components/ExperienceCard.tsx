
import { useEffect, useRef } from 'react';

interface ExperienceCardProps {
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
  delay?: number;
}

const ExperienceCard = ({
  company,
  position,
  location,
  period,
  responsibilities,
  delay = 0
}: ExperienceCardProps) => {
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
      className="animate-in glass-card card-hover rounded-xl p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
        <div>
          <h3 className="text-xl font-medium">{position}</h3>
          <div className="mt-1 text-primary font-medium">{company}</div>
        </div>
        <div className="text-sm text-foreground/60 shrink-0">
          <div>{location}</div>
          <div>{period}</div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-foreground/80 flex">
            <span className="text-primary mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
