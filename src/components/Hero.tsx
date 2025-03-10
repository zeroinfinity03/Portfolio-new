import { useEffect, useState } from 'react';
import { ChevronDown, Database, BarChartBig, BrainCircuit, LineChart, PieChart, Network } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataPoints, setDataPoints] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    setIsLoaded(true);
    
    // Generate random data points for the animated chart
    const points = Array.from({ length: 20 }, (_, i) => ({
      x: i,
      y: Math.floor(Math.random() * 40) + 10
    }));
    setDataPoints(points);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="neural-bg absolute inset-0 opacity-20"></div>
      <div className="floating-dots absolute inset-0"></div>
      
      {/* Animated data visualization background */}
      <div className="data-visualization absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
          <path
            d={`M 0,50 ${dataPoints.map(p => `L ${p.x * 5},${50 - p.y}`).join(' ')} L 100,50`}
            fill="url(#gradient)"
            className="transition-all duration-1000"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  <Database size={14} className="mr-1" /> Data Science
                </Badge>
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  <BarChartBig size={14} className="mr-1" /> Analytics
                </Badge>
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  <BrainCircuit size={14} className="mr-1" /> ML/AI
                </Badge>
              </div>
              
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Turning Data into
                <span className="text-gradient block mt-1"> Meaningful Insights</span>
              </h1>
              
              <p className="mt-6 text-lg text-foreground/80 max-w-xl leading-relaxed">
                I'm Surya, a data scientist and developer passionate about transforming complex data into 
                actionable business intelligence and innovative applications.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="button-primary">
                  Get in Touch
                </a>
                <a href="#projects" className="button-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="glow-effect">
              <Card className="relative overflow-hidden border-primary/30 bg-background/30 backdrop-blur-md">
                <CardContent className="p-0">
                  <div className="absolute top-0 right-0 p-2 flex gap-2">
                    <LineChart size={18} className="text-primary animate-pulse-glow" />
                    <PieChart size={18} className="text-primary animate-pulse-glow" />
                    <Network size={18} className="text-primary animate-pulse-glow" />
                  </div>
                  
                  <div className="image-reveal rounded-2xl w-[280px] h-[280px] md:w-[360px] md:h-[360px] overflow-hidden">
                    <img 
                      src="/images/profile.png" 
                      alt="Surya Singh" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Data visualization overlay */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="20" cy="30" r="2" className="text-primary fill-current animate-pulse-glow" />
                        <circle cx="50" cy="70" r="2" className="text-primary fill-current animate-pulse-glow" />
                        <circle cx="80" cy="40" r="2" className="text-primary fill-current animate-pulse-glow" />
                        <line x1="20" y1="30" x2="50" y2="70" stroke="currentColor" className="text-primary stroke-1 opacity-40" />
                        <line x1="50" y1="70" x2="80" y2="40" stroke="currentColor" className="text-primary stroke-1 opacity-40" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="animate-bounce-small p-2 rounded-full bg-primary/20 shadow-subtle border border-primary/30"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
