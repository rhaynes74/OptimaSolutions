
import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default password for consultancy endeavor
    if (password === 'optima2024') {
      onLogin(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 animate-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-lock text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Protected Area</h2>
          <p className="text-slate-500 mt-2 text-sm">Please enter the administrator password to access consultancy resources.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-500 ring-2 ring-red-100' : 'border-slate-200'} bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all`}
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2 text-center animate-bounce">Incorrect password. Please try again.</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
          >
            Unlock Content <i className="fas fa-key text-sm"></i>
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="#home" className="text-sm text-slate-400 hover:text-indigo-600 transition-colors">
            <i className="fas fa-arrow-left mr-2"></i> Return to Landing Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
