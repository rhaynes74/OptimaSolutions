
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden gradient-bg pt-32 pb-24 md:pt-48 md:pb-40">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-indigo-500/10 border border-indigo-400/20 backdrop-blur-sm">
          <span className="text-indigo-300 text-sm font-bold uppercase tracking-widest">Scientific Computing & Optimization</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
          Optima<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
            Solutions
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
          High-performance mathematical modeling and customized algorithmic strategies led by <strong>Dr. Ronald Haynes</strong>. Bridging the gap between theory and industrial impact.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#services"
            className="group px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl shadow-white/5 flex items-center gap-3"
          >
            Explore Services
            <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a
            href="#about"
            className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
          >
            The Consultant
          </a>
        </div>

        <div className="mt-24 animate-bounce opacity-40">
          <a href="#services" className="text-white text-xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
