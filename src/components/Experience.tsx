
import AnimatedText from './AnimatedText';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      company: 'CSUF Fullerton, CA',
      position: 'Graduate Student Assistant',
      location: 'Fullerton, CA',
      period: 'Oct 2024 – Present',
      responsibilities: [
        'Extracted and cleaned student records (500+ entries) using Python and SQL, enabling precise dashboard reporting.',
        'Created 10+ Plotly visualizations to track appointments and performance, delivering insights that boosted academic program engagement by 15%.',
        'Partnered with diverse teams, providing strategic recommendations to shape student initiatives through actionable analytics.'
      ]
    },
    {
      company: 'iNeuron.ai',
      position: 'Data Scientist',
      location: 'Bengaluru, KA',
      period: 'Aug 2020 – Jul 2022',
      responsibilities: [
        'Developed predictive models using Python, SQL, and regression analysis, achieving 82% forecasting accuracy (R2) for sales predictions.',
        'Analyzed expansive customer datasets with Python and SQL, developing a Linear Regression model for sales forecasts (R2: 0.82, RMSE: 4.5) to pinpoint growth opportunities.',
        'Applied XGBoost to segment users (F1: 0.85), informing feature adoption strategies that increased uptake by 15% and influenced development roadmaps.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText 
          text="Work Experience" 
          className="section-title text-center mb-12"
          tag="h2"
        />
        
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              company={exp.company}
              position={exp.position}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
