
import React from 'react';

interface ResearchArea {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const Research: React.FC = () => {
  const researchAreas: ResearchArea[] = [
    {
      title: "Domain Decomposition Methods",
      description: "Developing robust parallel algorithms for the solution of large-scale systems arising from the discretization of partial differential equations. Focus on optimized Schwarz and FETI-type methods.",
      icon: "fa-network-wired",
      tags: ["Parallel Computing", "Linear Algebra", "Schwarz Methods"]
    },
    {
      title: "Adaptive Mesh Refinement",
      description: "Implementing dynamic grid strategies to optimize computational resources, focusing resolution on regions with high gradients or complex physics for both deterministic and stochastic problems.",
      icon: "fa-border-none",
      tags: ["Error Estimation", "Efficiency", "Spatiotemporal Grids"]
    },
    {
      title: "Numerical Analysis of PDEs",
      description: "Rigorous theoretical investigation of convergence, stability, and consistency for finite volume and finite element discretizations of complex physical systems.",
      icon: "fa-function",
      tags: ["Convergence Proofs", "Stability Analysis", "Discretization"]
    },
    {
      title: "Mathematical Biology & Industry",
      description: "Translating real-world biological and industrial phenomena into tractable mathematical models, utilizing parameter estimation and multi-objective optimization.",
      icon: "fa-dna",
      tags: ["Modeling", "Biological Systems", "Fluid Dynamics"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Academic Expertise</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Research Domains</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Leading-edge research in numerical analysis and computational mathematics provides the rigorous foundation for our industrial solutions.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="https://scholar.google.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <i className="fab fa-google text-indigo-500"></i> Full Publication List
          </a>
          <a href="https://arxiv.org" target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <i className="fas fa-file-pdf text-red-500"></i> Latest Preprints
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {researchAreas.map((area, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <i className={`fas ${area.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {area.title}
              </h3>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              {area.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {area.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/50">
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-100">
            <i className="fas fa-flask text-2xl"></i>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Theoretical Collaboration</h4>
            <p className="text-slate-600">We partner with universities and research institutes on joint projects and grant development.</p>
          </div>
        </div>
        <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 whitespace-nowrap">
          Inquire About Research Partnerships
        </a>
      </div>
    </div>
  );
};

export default Research;
