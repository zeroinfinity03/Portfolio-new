
import React from 'react';

interface ProjectSectionProps {
  title: string;
  delay?: number;
  children: React.ReactNode;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, delay = 0, children }) => {
  return (
    <div className="glass-card rounded-xl p-6 md:p-8 shadow-lg mb-8 animate-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      {children}
    </div>
  );
};

export default ProjectSection;
