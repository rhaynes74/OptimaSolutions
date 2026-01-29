
import React, { useState } from 'react';

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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact", 
          ...formData 
        })
      });
      
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("There was an error sending your message. Please try again or email directly.");
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 animate-in zoom-in duration-500">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-indigo-100 overflow-hidden text-center">
          <div className="p-12 md:p-20">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
              <i className="fas fa-check text-5xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Message Sent Successfully</h2>
            <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-indigo-600">{formData.name}</span>. 
              Your inquiry has been received. Dr. Haynes will review your request and contact you within 24-48 business hours.
            </p>
            <div className="mt-12">
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', company: '', problemDescription: '' });
                }}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center gap-2 mx-auto"
              >
                <i className="fas fa-arrow-left"></i> Return to Form
              </button>
            </div>
          </div>
        </div>
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
            Ready to tackle your most complex optimization bottlenecks? Get in touch today for a technical assessment.
          </p>
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          {!isStandalone && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Next Steps</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Provide a brief overview of your problem. I will review the mathematical structure and computational requirements before our initial consultation.
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
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i className="fas fa-info-circle text-indigo-500"></i>
              Consultation Protocol
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <span>Direct review by Dr. Haynes within 2 business days.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <span>Technical feasibility check against current solver capabilities.</span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0">3</span>
                <span>Discovery call to define project scope and deliverables.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
          
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 relative z-10"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Company / Institution</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                placeholder="Organization name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Problem Description</label>
              <textarea
                name="problemDescription"
                required
                rows={5}
                value={formData.problemDescription}
                onChange={handleChange}
                placeholder="Describe the optimization challenge, constraints, or desired mathematical outcomes..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100 flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-200 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending Inquiry...
                </>
              ) : (
                <>
                  Submit Inquiry <i className="fas fa-paper-plane text-sm"></i>
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400">Your information is handled with strict academic and professional confidentiality.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
