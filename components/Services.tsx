
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group h-full w-full">
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
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const services = [
    {
      icon: 'fa-calculator',
      title: 'Mathematical Modeling',
      description: 'Develop mathematical descriptions of the problem to allow for fast simulation'
    },
    {
      icon: 'fa-bullseye',
      title: 'State of the Art Optimization Strategies',
      description: 'Theoretical matching of problem and choice of optimization algorithm'
    },
    {
      icon: 'fa-gears',
      title: 'Customized Algorithms',
      description: 'Provide customized software solutions'
    },
    {
      icon: 'fa-industry',
      title: 'Industrial Collaboration',
      description: 'Integrating sophisticated solvers into existing production environments and supply chain workflows.'
    },
    {
      icon: 'fa-microscope',
      title: 'Academic Collaboration',
      description: 'Assisting academic teams with mathematical formulation, generation of numerical results, and scaling simulations for high-impact publication.'
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

      <div className="flex flex-wrap justify-center -mx-4">
        {services.map((service, index) => (
          <div key={index} className="px-4 mb-8 w-full md:w-1/2 lg:w-1/3 flex">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      
      <div className="mt-24 p-12 bg-indigo-900 rounded-3xl text-white text-center relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-6">Need a custom technical implementation?</h3>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            Beyond standard consulting, I provide full-stack implementation services to integrate these models directly into your enterprise software.
          </p>
          <a 
            href="#resources" 
            onClick={(e) => handleLinkClick(e, 'resources')}
            className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
          >
            Schedule a Technical Audit
          </a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </div>
    </div>
  );
};

export default Services;
