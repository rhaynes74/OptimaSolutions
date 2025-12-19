
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Research from './components/Research';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session storage for existing auth
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    const handleHashChange = () => {
      let hash = window.location.hash || '#home';
      
      // Normalize hash to path
      if (hash.startsWith('#/')) {
        hash = hash.substring(2);
      } else if (hash.startsWith('#')) {
        hash = hash.substring(1);
      }
      
      if (!hash || hash === '/') hash = 'home';
      setCurrentPath(hash.toLowerCase());
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'home' || sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const attemptScroll = () => {
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

    if (!attemptScroll()) {
      setTimeout(attemptScroll, 50);
      setTimeout(attemptScroll, 150);
    }
  }, []);

  const landingPageSections = ['home', 'services', 'expertise', 'research', 'about', 'contact'];
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
        <div className="pt-24 pb-20 animate-in fade-in duration-500 min-h-[80vh] flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-slate-600">Secure administrative tasks would be managed here.</p>
            <button 
              onClick={() => { setIsAuthenticated(false); sessionStorage.removeItem('admin_auth'); window.location.hash = '#home'; }}
              className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg font-bold"
            >
              Logout
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="animate-in fade-in duration-700">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="services" className="py-20 bg-white scroll-mt-20">
          <Services />
        </section>
        <section id="expertise" className="py-20 bg-slate-50 border-y border-slate-100 scroll-mt-20">
          <Solutions />
        </section>
        <section id="research" className="py-20 bg-white scroll-mt-20">
          <Research />
        </section>
        <section id="about" className="py-20 bg-slate-50 scroll-mt-20">
          <About />
        </section>
        <section id="contact" className="py-20 bg-white border-t border-slate-100 scroll-mt-20">
          <ContactForm />
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
