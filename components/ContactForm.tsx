
import React, { useState } from 'react';
import { analyzeProblemWithAI } from '../services/geminiService';

interface ContactFormProps {
  isStandalone?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isStandalone }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    problemDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAiAnalysis = async () => {
    if (!formData.problemDescription || formData.problemDescription.length < 20) {
      alert("Please provide a more detailed description for the AI to analyze.");
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const result = await analyzeProblemWithAI(formData.problemDescription);
      setAiAnalysis(result);
    } catch (error) {
      console.error("AI Analysis failed:", error);
      setAiAnalysis("I'm sorry, I couldn't perform the AI analysis at this moment, but our team will review your description manually.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you'd send this to your backend/email service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 text-center py-20 bg-indigo-50 rounded-3xl border border-indigo-100 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-4xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
        <p className="text-lg text-slate-600 mb-8">
          Thank you, {formData.name}. I have received your inquiry regarding {formData.company || 'your project'}. 
          I will review your problem and get back to you within 24-48 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', company: '', problemDescription: '' });
            setAiAnalysis(null);
          }}
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isStandalone && (
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Contact</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Start a Project</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to tackle your most complex optimization bottlenecks? Get in touch today.
          </p>
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          {!isStandalone && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Next Steps</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Fill out the form to start the conversation. Describe your problem in a few sentences and I'll get back to you with a preliminary assessment.
              </p>
            </>
          )}
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <p className="font-bold text-slate-900">rhaynes@mun.ca</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <p className="text-sm text-slate-500">Global Coverage</p>
                <p className="font-bold text-slate-900">Remote & On-site Consulting</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">What happens next?</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-slate-600">
                <span className="text-indigo-600 font-bold">1.</span> Initial review of your problem description.
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <span className="text-indigo-600 font-bold">2.</span> 30-minute discovery call to scope requirements.
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <span className="text-indigo-600 font-bold">3.</span> Proposal for a feasibility study or pilot project.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Company / Institution</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Describe Your Optimization Problem</label>
                <button 
                  type="button"
                  onClick={handleAiAnalysis}
                  disabled={isAnalyzing || !formData.problemDescription}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 disabled:text-slate-400 flex items-center gap-1 transition-colors"
                >
                  {isAnalyzing ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-robot"></i>}
                  Get Initial AI Perspective
                </button>
              </div>
              <textarea
                name="problemDescription"
                required
                rows={5}
                value={formData.problemDescription}
                onChange={handleChange}
                placeholder="e.g., We have 50 delivery trucks and need to optimize their daily routes while considering driver fatigue and variable time windows..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            {aiAnalysis && (
              <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-sm text-indigo-900 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2 mb-2 font-bold text-indigo-700">
                  <i className="fas fa-sparkles"></i> AI Assessment
                </div>
                {aiAnalysis}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 disabled:bg-indigo-400"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Processing...
                </>
              ) : (
                <>
                  Send Inquiry <i className="fas fa-paper-plane text-sm"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
