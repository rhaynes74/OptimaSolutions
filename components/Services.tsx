
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group h-full">
    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      <i className={`fas ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

interface ServicesProps {
  isStandalone?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isStandalone }) => {
  const services = [
    {
      icon: 'fa-bullseye',
      title: 'State of the Art Optimization Strategies',
      description: 'High-level architectural planning to identify bottlenecks and define objective functions that align with your business or research goals.'
    },
    {
      icon: 'fa-calculator',
      title: 'Mathematical Modeling',
      description: 'Transforming complex real-world constraints into rigorous Mixed-Integer Linear Programming (MILP), Stochastic, or Non-linear models.'
    },
    {
      icon: 'fa-gears',
      title: 'Customized Algorithms',
      description: 'Developing bespoke meta-heuristics (Genetic Algorithms, Large Neighborhood Search) for NP-hard problems where standard solvers need an edge.'
    },
    {
      icon: 'fa-industry',
      title: 'Industrial Collaboration',
      description: 'Integrating sophisticated solvers (Gurobi, CPLEX, OR-Tools) into existing production environments and supply chain workflows.'
    },
    {
      icon: 'fa-microscope',
      title: 'Academic Collaboration',
      description: 'Assisting academic teams in formalizing proofs, validating computational results, and scaling simulations for high-impact publication.'
    },
    {
      icon: 'fa-database',
      title: 'Data-Driven Insights',
      description: 'Advanced preprocessing and feature engineering to extract optimization variables from noisy, large-scale industrial or experimental datasets.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`text-center ${isStandalone ? 'mb-20' : 'mb-16'}`}>
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
        <h1 className={`${isStandalone ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-bold text-slate-900 mb-4`}>
          Custom Optimization Solutions for Every Scale
        </h1>
        {isStandalone && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Deep technical expertise across the entire spectrum of operations research and computational science.
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      
      {!isStandalone && (
        <div className="mt-16 text-center">
          <a 
            href="#expertise" 
            className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group"
          >
            Explore our technical landscape, algorithms, and software stack 
            <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      )}
      
      {isStandalone && (
        <div className="mt-24 p-12 bg-indigo-900 rounded-3xl text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Need a custom technical implementation?</h3>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
              Beyond standard consulting, I provide full-stack implementation services to integrate these models directly into your enterprise software.
            </p>
            <a href="#contact" className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Schedule a Technical Audit
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        </div>
      )}
    </div>
  );
};

export default Services;
