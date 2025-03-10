import React from 'react';

export interface TimelineStepProps {
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

interface ProjectTimelineProps {
  steps: TimelineStepProps[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ steps }) => {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
      {steps.map((step, index) => (
        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index === steps.length - 1 ? "" : "mb-12"}`}>
          
          {/* Timeline connector and dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow-md text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {step.icon || (
              <span className="text-sm font-bold">{index + 1}</span>
            )}
          </div>
          
          {/* Content card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-4 md:p-6 rounded-xl">
            <div className="flex flex-col h-full">
              <div className="mb-3">
                <div className="font-bold text-lg text-primary mb-1">{step.title}</div>
              </div>
              
              {step.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.imageAlt || step.title} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <div className="text-foreground/90">{step.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTimeline; 