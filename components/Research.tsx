
import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
         
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
