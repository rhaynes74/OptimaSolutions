
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              RDH<span className="text-indigo-400">OptimalSolutions</span>
            </span>
            <p className="mt-6 max-w-md text-slate-500 text-lg leading-relaxed">
              Specialized consultancy in Scientific Computing, Mathematical Modeling and Optimization,  bridging the gap between theoretical research and industrial implementation.
            </p>
            <div className="flex gap-6 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><i className="fab fa-google-scholar"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-indigo-500 mt-1"></i>
                <span>rdhoptimalsolutions@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-indigo-500 mt-1"></i>
                <span>Memorial University<br />St. John's, NL, Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-globe text-indigo-500 mt-1"></i>
                <span>Global Remote Consulting Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Dr. Ronald Haynes | RDHOptimalSolutions Consultancy.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
