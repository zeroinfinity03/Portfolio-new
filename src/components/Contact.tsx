
import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation classes after component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
      
      // Add appear class to animate-in elements
      const elements = document.querySelectorAll('.animate-in');
      elements.forEach(el => {
        el.classList.add('appear');
      });
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    // Show success message using toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="neural-bg absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedText 
          text="Get in Touch" 
          className="section-title text-center mb-12"
          tag="h2"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className={`glass-card rounded-xl p-6 md:p-8 flex flex-col h-full justify-between animate-in ${isVisible ? 'appear' : ''}`}>
              <div>
                <h3 className="text-xl font-medium mb-6 text-foreground">Connect with Me</h3>
                
                <div className="space-y-6 text-foreground/90">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                      <Phone size={20} className="animate-pulse-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/60 mb-1">Phone</p>
                      <a href="tel:+17142532411" className="hover:text-primary transition-colors">
                        +1 714-253-2411
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                      <Mail size={20} className="animate-pulse-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/60 mb-1">Email</p>
                      <a href="mailto:vik03surya@gmail.com" className="hover:text-primary transition-colors break-all">
                        vik03surya@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-full text-primary">
                      <MapPin size={20} className="animate-pulse-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/60 mb-1">Location</p>
                      <span>Fullerton, California</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-6 text-foreground">Social Profiles</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/surya-singh-412564233/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/zeroinfinity03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className={`glass-card rounded-xl p-6 md:p-8 animate-in ${isVisible ? 'appear' : ''}`} style={{ animationDelay: '100ms' }}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-muted bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground/80">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-muted bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground/80">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-muted bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="mt-6 w-full button-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
