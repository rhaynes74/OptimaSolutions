
import React from 'react';

const Research: React.FC = () => {
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
