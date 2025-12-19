
import React from 'react';

const SolutionCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group h-full">
    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      <i className={`fas ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Solutions: React.FC = () => {
  const problemTypes = [
    { 
      title: "Linear Programming (LP)", 
      desc: "Optimizing a linear objective function, subject to linear equality and inequality constraints. Ideal for resource allocation and production planning.",
      icon: "fa-chart-line"
    },
    { 
      title: "Mixed-Integer Programming (MILP)", 
      desc: "Problems where some or all variables are restricted to be integers. Crucial for discrete decision making, facility location, and scheduling.",
      icon: "fa-network-wired"
    },
    { 
      title: "Non-Linear Programming (NLP)", 
      desc: "Handling complex relationships where the objective or constraints are non-linear. Used in engineering design and chemical process optimization.",
      icon: "fa-project-diagram"
    },
    { 
      title: "Stochastic Programming", 
      desc: "Incorporating uncertainty into the model using probability distributions. Helps in robust decision-making under volatile market conditions.",
      icon: "fa-shuffle"
    },
    { 
      title: "Combinatorial Optimization", 
      desc: "Finding an optimal object from a finite set of objects. Essential for the Traveling Salesperson Problem and network design.",
      icon: "fa-puzzle-piece"
    },
    { 
      title: "Multi-Objective Optimization", 
      desc: "Balancing multiple conflicting objectives simultaneously to find a Pareto-optimal frontier for complex trade-off analysis.",
      icon: "fa-crosshairs"
    }
  ];

  const complexityClasses = [
    {
      title: "Class P",
      desc: "Problems solvable in polynomial time. These are 'easy' problems where efficient, exact algorithms are readily available for large-scale use.",
      icon: "fa-bolt"
    },
    {
      title: "Class NP",
      desc: "Non-deterministic Polynomial time. Solutions can be verified quickly. Many industrial scheduling problems fall into this vast category.",
      icon: "fa-diagram-successor"
    },
    {
      title: "NP-Complete",
      desc: "The hardest problems in NP. If an efficient solution exists for one, it exists for all. We specialize in finding these optimal structures.",
      icon: "fa-diamond-turn-right"
    },
    {
      title: "NP-Hard",
      desc: "At least as hard as NP-complete problems. Often require advanced meta-heuristics or specific decomposition techniques to solve in real-time.",
      icon: "fa-mountain"
    },
    {
      title: "Approximability",
      desc: "Determining how close we can get to the optimum for NP-Hard problems within a guaranteed theoretical bound or error margin.",
      icon: "fa-wave-square"
    },
    {
      title: "Search Space Complexity",
      desc: "Analyzing the exponential growth of possibilities in combinatorial sets to determine whether to use exact solvers or heuristics.",
      icon: "fa-magnifying-glass-chart"
    }
  ];

  const methods = [
    { 
      name: "Exact Methods", 
      items: ["Branch and Bound", "Cutting Plane Algorithms", "Interior Point Methods", "Dynamic Programming"],
      icon: "fa-binary" 
    },
    { 
      name: "Heuristics & Meta-heuristics", 
      items: ["Genetic Algorithms", "Simulated Annealing", "Large Neighborhood Search", "Tabu Search"],
      icon: "fa-wand-magic-sparkles" 
    },
    { 
      name: "Decomposition Techniques", 
      items: ["Benders Decomposition", "Dantzig-Wolfe Decomposition", "Lagrangian Relaxation"],
      icon: "fa-arrows-split-up-and-left" 
    }
  ];

  const software = [
    { category: "Commercial Solvers", tools: ["Gurobi Optimizer", "IBM CPLEX", "FICO Xpress"], color: "bg-indigo-600" },
    { category: "Open Source Solvers", tools: ["SCIP", "CBC (COIN-OR)", "GLPK", "HiGHS"], color: "bg-slate-700" },
    { category: "Modeling Languages", tools: ["Pyomo (Python)", "JuMP (Julia)", "AMPL", "GAMS"], color: "bg-blue-600" },
    { category: "Frameworks & Libraries", tools: ["Google OR-Tools", "SciPy.optimize", "COIN-OR Suite"], color: "bg-teal-600" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Technical Capabilities</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Optimization Landscape</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A comprehensive overview of the mathematical frameworks, solution methodologies, and computational tools we leverage to solve high-complexity problems.
        </p>
      </div>

      {/* Problem Classifications Section */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-2 bg-indigo-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Problem Classifications</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemTypes.map((type, idx) => (
            <SolutionCard key={idx} {...type} />
          ))}
        </div>
      </section>

      {/* NEW: Computational Complexity Classifications Subsection */}
      <section className="mb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-2 bg-indigo-400 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Computational Complexity Classifications</h2>
        </div>
        <p className="text-slate-600 mb-10 max-w-3xl">
          Understanding the theoretical limits of computation allows us to select the most appropriate algorithmic approach. We evaluate every problem against its complexity class to ensure scalability.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complexityClasses.map((type, idx) => (
            <SolutionCard key={idx} {...type} />
          ))}
        </div>
      </section>

      {/* Solution Methods */}
      <section className="mb-24 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-2 bg-indigo-400 rounded-full"></div>
            <h2 className="text-3xl font-bold">Solution Methodologies</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {methods.map((method, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <i className={`fas ${method.icon} text-indigo-400 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{method.name}</h3>
                </div>
                <ul className="space-y-3">
                  {method.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-2 bg-indigo-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Computational Stack</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {software.map((sw, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className={`w-full md:w-48 py-3 px-4 rounded-lg ${sw.color} text-white text-center font-bold text-sm shrink-0`}>
                {sw.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {sw.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-sm border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-24 text-center">
        <p className="text-slate-500 mb-6 italic">Not sure which approach is right for your specific constraints?</p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
          Request a Feasibility Study <i className="fas fa-arrow-right text-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default Solutions;
