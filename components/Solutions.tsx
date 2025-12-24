
import React from 'react';

interface SolverInfo {
  name: string;
  license: 'Commercial' | 'Open Source' | 'Academic';
  strengths: string;
  url: string;
}

interface ProblemCategory {
  title: string;
  problemUrl: string;
  description: string;
  solvers: SolverInfo[];
}

const SolverTable: React.FC<{ category: ProblemCategory }> = ({ category }) => (
  <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          <a 
            href={category.problemUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors flex items-center gap-2"
          >
            {category.title}
            <i className="fas fa-external-link-alt text-xs opacity-30"></i>
          </a>
        </h3>
        <p className="text-slate-600 mt-1 max-w-2xl">{category.description}</p>
      </div>
    </div>
    
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Solver / Library</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-center">License</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Key Strengths</th>
              <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Resources</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {category.solvers.map((solver, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <span className="font-bold text-slate-900">{solver.name}</span>
                </td>
                <td className="px-6 py-4 text-center whitespace-nowrap">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    solver.license === 'Commercial' ? 'bg-indigo-100 text-indigo-700' : 
                    solver.license === 'Open Source' ? 'bg-emerald-100 text-emerald-700' : 
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {solver.license}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 min-w-[200px]">
                  {solver.strengths}
                </td>
                <td className="px-6 py-4 text-right">
                  <a 
                    href={solver.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors"
                  >
                    Documentation <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const categories: ProblemCategory[] = [
    {
      title: "Linear Programming (LP)",
      problemUrl: "https://en.wikipedia.org/wiki/Linear_programming",
      description: "Optimizing a linear objective function subject to linear constraints.",
      solvers: [
        { name: "Gurobi Optimizer", license: "Commercial", strengths: "State-of-the-art performance, world-record benchmarks.", url: "https://www.gurobi.com/" },
        { name: "IBM CPLEX", license: "Commercial", strengths: "Enterprise reliability, excellent parallel scaling.", url: "https://www.ibm.com/products/ilog-cplex-optimization-studio" },
        { name: "HiGHS", license: "Open Source", strengths: "Modern, high-performance C++ code. Best-in-class open source.", url: "https://highs.dev/" },
        { name: "GLPK", license: "Open Source", strengths: "Robust GNU implementation for simpler LP tasks.", url: "https://www.gnu.org/software/glpk/" },
        { name: "SCS", license: "Open Source", strengths: "Splitting Conic Solver. Excellent for very large-scale conic problems.", url: "https://www.cvxgrp.org/scs/" },
        { name: "OSQP", license: "Open Source", strengths: "Operator Splitting Quadratic Program solver. Extremely fast and lightweight.", url: "https://osqp.org/" },
        { name: "Clp", license: "Open Source", strengths: "COIN-OR LP Solver. Highly reliable simplex and interior point codes.", url: "https://github.com/coin-or/Clp" },
        { name: "SoPlex", license: "Academic", strengths: "Sequential Object-oriented Simplex. High-quality academic solver.", url: "https://soplex.zib.de/" }
      ]
    },
    {
      title: "Mixed-Integer Programming (MILP)",
      problemUrl: "https://en.wikipedia.org/wiki/Integer_programming",
      description: "Involving discrete decision variables. Critical for scheduling and facility location.",
      solvers: [
        { name: "Gurobi Optimizer", license: "Commercial", strengths: "Cutting-edge heuristics and branch-and-cut logic.", url: "https://www.gurobi.com/" },
        { name: "SCIP", license: "Academic", strengths: "Highly flexible framework for constraint integer programming.", url: "https://www.scipopt.org/" },
        { name: "COIN-OR Cbc", license: "Open Source", strengths: "Mature, widely-used open source MILP solver.", url: "https://github.com/coin-or/Cbc" },
        { name: "Xpress", license: "Commercial", strengths: "Advanced MOSSEL modeling integration.", url: "https://www.fico.com/en/products/fico-xpress-optimization" },
        { name: "COPT", license: "Commercial", strengths: "Cardinal Optimizer. Rapidly becoming a top-tier performer in MILP.", url: "https://www.shanshu.ai/copt" },
        { name: "SYMPHONY", license: "Open Source", strengths: "COIN-OR parallel MILP solver with flexible customization.", url: "https://github.com/coin-or/SYMPHONY" },
        { name: "MindOpt", license: "Commercial", strengths: "Cloud-native optimization engine with strong MILP capabilities.", url: "https://opt.aliyun.com/" },
        { name: "SAS Optimization", license: "Commercial", strengths: "Deep integration with SAS analytics for large-scale enterprise ops.", url: "https://www.sas.com/en_us/software/optimization.html" }
      ]
    },
    {
      title: "Non-Linear Programming (NLP)",
      problemUrl: "https://en.wikipedia.org/wiki/Nonlinear_programming",
      description: "Complex non-linear relationships. Essential for high-fidelity physics models.",
      solvers: [
        { name: "Ipopt", license: "Open Source", strengths: "Interior Point Optimizer for large-scale non-linear problems.", url: "https://coin-or.github.io/Ipopt/" },
        { name: "Knitro", license: "Commercial", strengths: "Specialized for non-convex and large-scale NLP.", url: "https://www.artelys.com/solvers/knitro/" },
        { name: "SNOPT", license: "Commercial", strengths: "Sequential quadratic programming for smooth functions.", url: "https://web.stanford.edu/group/SOL/snopt.htm" },
        { name: "BARON", license: "Commercial", strengths: "Global optimization solver for non-convex MINLP/NLP problems.", url: "https://minlp.com/baron-solver" },
        { name: "Octeract", license: "Commercial", strengths: "Massively parallel global optimization solver.", url: "https://octeract.com/" },
        { name: "Couenne", license: "Open Source", strengths: "COIN-OR solver for global optimization of MINLPs.", url: "https://github.com/coin-or/Couenne" },
        { name: "Bonmin", license: "Open Source", strengths: "Basic Open-source Nonlinear Mixed Integer programming solver.", url: "https://github.com/coin-or/Bonmin" },
        { name: "WORHP", license: "Commercial", strengths: "Sparse NLP solver specifically for trajectory optimization.", url: "https://worhp.de/" }
      ]
    },
    {
      title: "Unconstrained Non-linear Optimization",
      problemUrl: "https://en.wikipedia.org/wiki/Unconstrained_optimization",
      description: "Minimizing a function without constraints on its variables.",
      solvers: [
        { name: "NLopt", license: "Open Source", strengths: "Library for non-linear optimization, providing many algorithms.", url: "https://nlopt.readthedocs.io/" },
        { name: "Ceres Solver", license: "Open Source", strengths: "Google's solver for large-scale non-linear least squares.", url: "http://ceres-solver.org/" },
        { name: "L-BFGS-B", license: "Open Source", strengths: "Limited-memory BFGS algorithm with box constraints.", url: "https://en.wikipedia.org/wiki/Limited-memory_BFGS" },
        { name: "OptimLib", license: "Open Source", strengths: "Lightweight C++ library for numerical optimization.", url: "https://github.com/kthohr/optim" },
        { name: "Optim.jl", license: "Open Source", strengths: "Robust optimization suite in Julia for unconstrained problems.", url: "https://julianlsolvers.github.io/Optim.jl/stable/" }
      ]
    },
    {
      title: "Constraint Programming (CP)",
      problemUrl: "https://en.wikipedia.org/wiki/Constraint_programming",
      description: "Focuses on finding feasible solutions in highly constrained combinatorial spaces.",
      solvers: [
        { name: "Google OR-Tools", license: "Open Source", strengths: "Incredible speed for CP-SAT and vehicle routing.", url: "https://developers.google.com/optimization" },
        { name: "IBM CP Optimizer", license: "Commercial", strengths: "Advanced automatic tuning for complex scheduling.", url: "https://www.ibm.com/products/ilog-cplex-optimization-studio" },
        { name: "MiniZinc", license: "Open Source", strengths: "High-level modeling language for diverse CP solvers.", url: "https://www.minizinc.org/" },
        { name: "Gecode", license: "Open Source", strengths: "Generic Constraint Development Environment in C++.", url: "https://www.gecode.org/" },
        { name: "Choco Solver", license: "Open Source", strengths: "Pure Java library for CP, very flexible and extensible.", url: "https://choco-solver.org/" },
        { name: "JaCoP", license: "Open Source", strengths: "Java Constraint Programming solver with a rich set of constraints.", url: "https://jacop.osdn.jp/" },
        { name: "OscaR", license: "Open Source", strengths: "Scala-based library for Operations Research and CP.", url: "https://bitbucket.org/oscarlib/oscar/wiki/Home" },
        { name: "LocalSolver", license: "Commercial", strengths: "Heuristic solver designed for huge-scale combinatorial problems.", url: "https://www.localsolver.com/" }
      ]
    },
    {
      title: "Python Optimization Libraries",
      problemUrl: "https://www.python.org/doc/essays/blurb/",
      description: "General-purpose libraries for modeling and solving optimization problems within Python.",
      solvers: [
        { name: "SciPy (optimize)", license: "Open Source", strengths: "Standard library for local optimization, curve fitting, and root-finding.", url: "https://docs.scipy.org/doc/scipy/reference/optimize.html" },
        { name: "CVXPY", license: "Open Source", strengths: "Domain-specific language for convex optimization modeling.", url: "https://www.cvxpy.org/" },
        { name: "PuLP", license: "Open Source", strengths: "Linear programming modeler in Python with easy solver integration.", url: "https://coin-or.github.io/pulp/" },
        { name: "Pyomo", license: "Open Source", strengths: "Full-featured algebraic modeling language for all problem types.", url: "http://www.pyomo.org/" },
        { name: "CasADi", license: "Open Source", strengths: "Specialized for algorithmic differentiation and optimal control.", url: "https://web.casadi.org/" },
        { name: "Gekko", license: "Open Source", strengths: "Specialized for dynamic optimization and mixed-integer differential algebraic equations.", url: "https://gekko.readthedocs.io/" },
        { name: "Google OR-Tools (Python)", license: "Open Source", strengths: "Python wrappers for CP-SAT, LP, and Routing solvers.", url: "https://developers.google.com/optimization/introduction/python" },
        { name: "Optuna", license: "Open Source", strengths: "Hyperparameter optimization framework with efficient search algorithms.", url: "https://optuna.org/" },
        { name: "PySwarms", license: "Open Source", strengths: "Extensible Particle Swarm Optimization (PSO) library.", url: "https://pyswarms.readthedocs.io/" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Technical Landscape</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Solver Compatibility & Selection</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We match your specific problem architecture with the most efficient mathematical solvers available in the industry. Our expertise spans the entire computational stack.
        </p>
      </div>

      <div className="space-y-4">
        {categories.map((category, idx) => (
          <SolverTable key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
