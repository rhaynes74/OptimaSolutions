
import React from 'react';

interface AboutProps {
  isStandalone?: boolean;
}

const About: React.FC<AboutProps> = ({ isStandalone }) => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isStandalone && (
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">The Consultant</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Dr. Ronald Haynes</h1>
        </div>
      )}

      {/* Philosophy Quote Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <i className="fas fa-quote-left text-indigo-100 text-6xl mb-6"></i>
        <p className="text-2xl md:text-4xl font-light italic text-slate-800 leading-tight mb-8">
          "My mission is to bridge the gap between abstract mathematical rigor and the pragmatic demands of modern industry, turning computational bottlenecks into strategic advantages."
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">Dr. Ronald Haynes</span>
          <div className="h-px w-12 bg-indigo-600"></div>
        </div>
      </div>

      {/* Main Portrait - Using the specific filename 'me.png' */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-100/50 rounded-[3rem] -z-10 blur-2xl"></div>
          <div className="bg-white p-3 rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
            <img
              src="me.png"
              alt="Dr. Ronald Haynes"
              className="w-full h-auto rounded-[2.5rem] shadow-inner"
              style={{ display: 'block' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.warn("Image 'me.png' not found, using professional placeholder.");
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-8 py-3 rounded-2xl shadow-xl font-bold whitespace-nowrap">
            Dr. Ronald Haynes, PhD
          </div>
        </div>
      </div>

      {/* Biography and Technical Depth */}
      <div className="max-w-4xl mx-auto mb-24 mt-12">
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-center">Expertise in Scientific Computing & Modeling</h3>
          <div className="prose prose-xl text-slate-600 max-w-none space-y-6 text-center">
            <p className="leading-relaxed">
              Specializing in the development and analysis of robust numerical methods for complex partial differential equations and multi-variable optimization.
            </p>
            <p className="leading-relaxed">
              Providing high-performance solution strategies for large-scale industrial systems, from adaptive grid methods to parallel scalability and domain decomposition.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-24 pt-20 border-t border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Consultancy Models</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Engagement Options</h2>
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
    </div>
  );
};

export default About;
