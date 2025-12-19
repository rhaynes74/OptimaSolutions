
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home', href: '#home' },
    { name: 'Services', path: 'services', href: '#services' },
    { name: 'Research', path: 'research', href: '#research' },
    { name: 'About', path: 'about', href: '#about' },
    { name: 'Contact', path: 'contact', href: '#contact' },
    { name: 'Admin', path: 'admin', href: '#/admin' },
  ];

  const landingPageSections = ['home', 'services', 'research', 'about', 'contact'];
  const isLandingPage = landingPageSections.includes(currentPath) || currentPath === '';

  const handleLinkClick = (path: string) => {
    // If clicking a link to the same section on the landing page, force a manual scroll
    if (path === currentPath && isLandingPage) {
      const element = document.getElementById(path);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
      } else if (path === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const getLinkClasses = (path: string) => {
    const isActive = currentPath === path || (path === 'home' && currentPath === '');
    const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer";
    const useDarkText = isScrolled || !isLandingPage;

    if (useDarkText) {
      return `${baseClasses} ${isActive ? 'text-indigo-600 font-bold' : 'text-slate-600 hover:text-indigo-600'}`;
    } else {
      return `${baseClasses} ${isActive ? 'text-white font-bold border-b-2 border-indigo-400 rounded-none' : 'text-slate-200 hover:text-white'}`;
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isLandingPage ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={() => handleLinkClick('home')}
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${(isScrolled || !isLandingPage) ? 'text-indigo-600' : 'text-white'}`}
            >
              Optima<span className={(isScrolled || !isLandingPage) ? 'text-slate-900' : 'text-indigo-300'}>Solutions</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.path)}
                  className={getLinkClasses(link.path)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${(isScrolled || !isLandingPage) ? 'text-slate-900' : 'text-white'} p-2 focus:outline-none`}
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 border-t border-slate-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.path)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${currentPath === link.path ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
