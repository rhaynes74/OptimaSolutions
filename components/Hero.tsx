
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden gradient-bg pt-32 pb-24 md:pt-48 md:pb-44">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[160px]"></div>
        {/* Added grid overlay for technical feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-indigo-500/10 border border-indigo-400/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">Scientific Computing & Optimization</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-bold text-white mb-8 leading-[0.85] tracking-tighter animate-in fade-in zoom-in-95 duration-700 delay-100">
          Optima<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">
            Solutions
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-14 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Strategic mathematical modeling and customized algorithmic architecture led by <span className="text-white font-medium">Dr. Ronald Haynes</span>. Advancing the frontier of computational impact.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <a
            href="#services"
            className="group px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-2xl shadow-white/5 flex items-center gap-3"
          >
            Explore Expertise
            <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </a>
          <a
            href="#about"
            className="px-10 py-5 bg-white/5 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Meet the Consultant
          </a>
        </div>

        <div className="mt-24 animate-bounce opacity-20 hover:opacity-100 transition-opacity">
          <a href="#services" className="text-white text-xl">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
