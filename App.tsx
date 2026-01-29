
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Research from './components/Research';
import Solutions from './components/Solutions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import { PrivateContent } from './private';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    if (!sectionId || sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    if (!performScroll()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (performScroll() || attempts > 10) {
          clearInterval(interval);
        }
      }, 50);
    }
  }, []);

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    const handleHashChange = () => {
      let hash = window.location.hash || '#home';
      
      if (hash.startsWith('#/')) {
        hash = hash.substring(2);
      } else if (hash.startsWith('#')) {
        hash = hash.substring(1);
      }
      
      if (!hash || hash === '/') hash = 'home';
      const cleanPath = hash.toLowerCase();
      setCurrentPath(cleanPath);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const landingPageSections = ['home', 'services', 'about', 'research', 'contact'];
  const isLandingPage = landingPageSections.includes(currentPath) || currentPath === '';

  useEffect(() => {
    if (isLandingPage) {
      scrollToSection(currentPath);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath, isLandingPage, scrollToSection]);

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
    }
  };

  const renderContent = () => {
    if (currentPath === 'admin') {
      if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
      }
      return (
        <div className="pt-24 pb-20 animate-in fade-in duration-500 bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <button 
              onClick={() => { setIsAuthenticated(false); sessionStorage.removeItem('admin_auth'); window.location.hash = '#home'; }}
              className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors"
            >
              Logout
            </button>
          </div>
          <PrivateContent />
        </div>
      );
    }

    if (currentPath === 'resources') {
      return (
        <div className="pt-24 animate-in fade-in duration-700 bg-white">
          <div className="bg-slate-50 py-16 border-b border-slate-200">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Expert Resources</h1>
               <p className="text-xl text-slate-600 max-w-3xl">Technical landscape, solver documentation, and consultation engagement models.</p>
             </div>
          </div>
          <section id="technical-landscape" className="py-20 bg-white">
            <Solutions />
          </section>
          <section id="next-steps" className="py-24 bg-slate-50 border-t border-slate-200">
            <ContactForm />
          </section>
        </div>
      );
    }

    return (
      <div className="animate-in fade-in duration-700">
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>
        <section id="about" className="py-20 bg-slate-50">
          <About />
        </section>
        <section id="research" className="py-20 bg-white">
          <Research />
        </section>
        <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
          <ContactForm />
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
