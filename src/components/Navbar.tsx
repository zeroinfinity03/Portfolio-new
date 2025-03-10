import { useState, useEffect } from 'react';
import { Menu, X, Database, BarChartBig } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    // Removed "Contact" item
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border/40 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {isHomePage ? (
            <a 
              href="#" 
              className="flex items-center space-x-2 text-xl font-semibold text-primary"
            >
              <Database className="h-5 w-5" />
              <span>SURYA SINGH</span>
            </a>
          ) : (
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-semibold text-primary"
            >
              <Database className="h-5 w-5" />
              <span>SURYA SINGH</span>
            </Link>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {isHomePage ? (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={`/${link.href}`}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              {isHomePage ? (
                <a
                  href="#contact"
                  className="button-primary text-sm flex items-center space-x-1"
                >
                  <BarChartBig className="h-4 w-4" />
                  <span>Let's Connect</span>
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="button-primary text-sm flex items-center space-x-1"
                >
                  <BarChartBig className="h-4 w-4" />
                  <span>Let's Connect</span>
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/40 py-4 animate-slide-in">
            <ul className="flex flex-col items-center space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  {isHomePage ? (
                    <a
                      href={link.href}
                      className="block py-2 text-center text-foreground/80 hover:text-primary transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={`/${link.href}`}
                      className="block py-2 text-center text-foreground/80 hover:text-primary transition-colors"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="w-full pt-2">
                {isHomePage ? (
                  <a
                    href="#contact"
                    className="block button-primary text-center flex items-center justify-center space-x-1"
                    onClick={toggleMobileMenu}
                  >
                    <BarChartBig className="h-4 w-4" />
                    <span>Let's Connect</span>
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="block button-primary text-center flex items-center justify-center space-x-1"
                    onClick={toggleMobileMenu}
                  >
                    <BarChartBig className="h-4 w-4" />
                    <span>Let's Connect</span>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
