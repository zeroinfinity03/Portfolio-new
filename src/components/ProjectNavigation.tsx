
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectNavigationProps {
  backLink?: string;
  backText?: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  backLink = "/",
  backText = "Back to portfolio"
}) => {
  return (
    <div className="flex items-center mb-6">
      <Link 
        to={backLink} 
        className="flex items-center text-primary hover:text-primary/80 transition-colors gap-1"
      >
        <ArrowLeft size={16} />
        <span>{backText}</span>
      </Link>
    </div>
  );
};

export default ProjectNavigation;
