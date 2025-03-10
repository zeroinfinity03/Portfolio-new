
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-foreground/80 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Surya Singh. All rights reserved.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={scrollToTop}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Scroll to top"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
