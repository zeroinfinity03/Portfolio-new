import React from 'react';
import AnimatedText from './AnimatedText';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  fallbackImageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  subtitle,
  imageSrc,
  fallbackImageSrc,
  githubUrl,
  liveUrl
}) => {
  return (
    <>
      <AnimatedText 
        text={title}
        className="text-3xl md:text-4xl font-bold mb-6"
        tag="h1"
      />
      
      <div className="flex justify-between items-center mb-8">
        <AnimatedText 
          text={subtitle}
          className="text-xl md:text-2xl text-foreground/80"
          tag="h2"
          delay={100}
        />
        
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Github size={18} />
              <span className="hidden sm:inline">View on GitHub</span>
              <ExternalLink size={16} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View Live</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      <div className="relative w-full rounded-xl overflow-hidden mb-10 shadow-lg">
        <img 
          src={imageSrc}
          alt="Project hero image" 
          className="w-full object-cover h-[300px]"
          onError={(e) => {
            e.currentTarget.src = fallbackImageSrc;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHero;
