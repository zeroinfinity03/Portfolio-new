import AnimatedText from './AnimatedText';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      company: 'California State University, Fullerton',
      position: 'Graduate Student Assistant',
      location: 'Fullerton, California, United States',
      period: 'Oct 2024 – Present',
      responsibilities: [
        'Designed a real-time student appointments with staff performance analytics dashboard using Streamlit and Plotly.',
        'Created ETL workflows leveraging regex and pandas to extract, cleanse, and normalize unstructured appointment data across 200+ records.'
      ]
    },
    {
      company: 'iNeuron.ai',
      position: 'Associate Data Scientist',
      location: 'Bengaluru, KA',
      period: 'Aug 2020 – Jul 2022',
      responsibilities: [
        'Built a sales forecasting model using Python and Scikit-learn, incorporating feature engineering and hyperparameter tuning, which improved prediction accuracy (R2 = 0.82) and supported marketing strategy adjustments.',
        'Collaborated with product and marketing teams to develop an XGBoost-based customer segmentation model (F1-score: 0.85), enabling targeted campaigns that increased user engagement with key features by 15%.',
        'Conducted exploratory data analysis on a customer churn dataset using Pandas and Matplotlib, identifying three key churn drivers (one of them being high billing costs), which informed retention strategies that improved customer retention.',
        'Created data validation checks for incoming datasets using Pandas and automated weekly model retraining workflows for production models.'
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
