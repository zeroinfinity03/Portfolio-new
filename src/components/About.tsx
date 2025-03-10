
import AnimatedText from './AnimatedText';
import { FileCode, Database, Brain, TrendingUp, Mail, Phone, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="data-grid-bg absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText 
            text="About Me" 
            className="section-title mb-8 mx-auto"
            tag="h2"
          />
          
          <div className="glass-card rounded-2xl p-8 md:p-10 shadow-card border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
              <h3 className="text-2xl font-semibold text-primary">SURYA SINGH</h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:vik03surya@gmail.com" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
                  <Mail size={16} className="text-primary" />
                  vik03surya@gmail.com
                </a>
                <a href="tel:+17142532411" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
                  <Phone size={16} className="text-primary" />
                  +1 714-253-2411
                </a>
                <a href="https://linkedin.com/in/surya-singh-412564233/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
                  <Linkedin size={16} className="text-primary" />
                  LinkedIn
                </a>
                <a href="https://github.com/zeroinfinity03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors text-sm">
                  <Github size={16} className="text-primary" />
                  GitHub
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary mb-3">
                  <FileCode size={24} className="animate-pulse-glow" />
                </div>
                <p className="text-sm font-medium">Development</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary mb-3">
                  <Database size={24} className="animate-pulse-glow" />
                </div>
                <p className="text-sm font-medium">Data Engineering</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary mb-3">
                  <Brain size={24} className="animate-pulse-glow" />
                </div>
                <p className="text-sm font-medium">Machine Learning</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary mb-3">
                  <TrendingUp size={24} className="animate-pulse-glow" />
                </div>
                <p className="text-sm font-medium">Data Analysis</p>
              </div>
            </div>
            
            <AnimatedText 
              text="I'm a Data Scientist and Information Systems graduate student with expertise in transforming complex data into actionable insights and innovative solutions." 
              className="text-lg font-medium text-foreground"
              delay={100}
              tag="p"
            />
            
            <AnimatedText 
              text="My technical background includes Python, SQL, and various data science frameworks like TensorFlow, PyTorch, and scikit-learn, which I've used to create forecasting models, optimize business processes, and build intelligent applications." 
              className="mt-4 text-foreground/80"
              delay={200}
              tag="p"
            />
            
            <AnimatedText 
              text="I've developed predictive models achieving 82% forecasting accuracy (R2) for sales predictions and applied machine learning techniques like XGBoost for user segmentation with an F1 score of 0.85, increasing feature adoption by 15%." 
              className="mt-4 text-foreground/80"
              delay={300}
              tag="p"
            />
            
            <AnimatedText 
              text="I'm passionate about using AI and data science to solve meaningful problems, combining technical expertise with strategic thinking to deliver data-driven solutions that create real business impact." 
              className="mt-4 text-foreground/80"
              delay={400}
              tag="p"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
