
import React from 'react';

interface AboutProps {
  isStandalone?: boolean;
}

const About: React.FC<AboutProps> = ({ isStandalone }) => {
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const serviceOfferings = [
    {
      title: "Complete Problem Solution",
      desc: "A full investigation including summary, results, and conclusions provided in a customized, professional report.",
      icon: "fa-file-invoice"
    },
    {
      title: "Staff Collaboration",
      desc: "Working directly with your internal team to help you develop and produce robust in-house solutions.",
      icon: "fa-user-tie"
    },
    {
      title: "Open-Source Software",
      desc: "A complete software solution for your specific problem built entirely on flexible, open-source tools.",
      icon: "fa-code"
    },
    {
      title: "Software Licensing",
      desc: "Dedicated software licenses which include regular updates and on-going technical support.",
      icon: "fa-key"
    }
  ];

  const coreCompetencies = [
    "Numerical Analysis of PDEs",
    "Domain Decomposition Methods",
    "Adaptive Grid Techniques",
    "Parallel Scientific Computing",
    "Stochastic Optimization",
    "Large-scale Linear Algebra"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isStandalone && (
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">The Principal Consultant</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Dr. Ronald Haynes</h1>
        </div>
      )}

      {/* Executive Bio Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
        {/* Portrait Column */}
        <div className="w-full lg:w-5/12 shrink-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] -z-10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
            <div className="bg-white p-3 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/me.jpg"
                alt="Dr. Ronald Haynes"
                className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale-[10%] hover:grayscale-0 transition-all duration-500 shadow-inner"
                style={{ display: 'block' }}
                onError={(e) => {
                   (e.target as HTMLImageElement).src = '/me.jpg';
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-800 hidden md:block animate-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-xl">
                  {/*<i className="fas fa-graduation-cap"></i>*/}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Consultant</p>
                  <p className="font-bold text-lg">Ronald Haynes (PhD)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="w-full lg:w-7/12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            Academic Rigor & Industrial Precision
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Bridging Abstract Theory and <span className="text-indigo-600">Impact</span>.
          </h3>
          <div className="prose prose-lg text-slate-600 space-y-6">
            <p className="leading-relaxed">
              With a deep-rooted foundation in computational mathematics and decades of experience in numerical analysis, Dr. Ronald Haynes specializes in transforming high-complexity theoretical problems into efficient, scalable software solutions.
            </p>
            <p className="leading-relaxed">
              His consultancy focuses on <strong>Scientific Computing</strong> and <strong>Mathematical Modeling</strong>, helping organizations navigate the intricate landscape of partial differential equations and multi-objective optimization.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                <i className="fas fa-check-circle text-indigo-500 text-sm"></i>
                <span className="text-sm md:text-base">{comp}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Consultation Request
            </a>
            <a href="https://orcid.org/0000-0002-4804-3152" target="_blank" rel="noopener" className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
              Research Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Engagement Options */}
      <div className="pt-20 border-t border-slate-200 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Consultancy Models</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Collaborate</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceOfferings.map((s, i) => (
            <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <i className={`fas ${s.icon} text-2xl`}></i>
              </div>
              <h4 className="font-bold text-slate-900 text-lg mb-3 leading-snug">{s.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Callout */}
      <div className="mb-24 py-16 px-8 bg-indigo-900 rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <i className="fas fa-quote-left text-indigo-300 text-5xl mb-8 opacity-50"></i>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
            "Every complex industrial problem has underlying mathematical structures waiting to be exploited and optimized."
          </p>
          <div className="h-1 w-12 bg-indigo-400 mx-auto mb-4"></div>
          {/* <p className="uppercase tracking-[0.3em] font-bold text-sm">Innovation through Calculation</p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
