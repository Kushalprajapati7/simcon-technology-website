import React, { useState } from 'react';
import { CAREER_OPENINGS, WORK_CULTURE_HIGHLIGHTS } from '@/data/careers';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Send, CheckCircle2, AlertCircle, Clock, MapPin } from 'lucide-react';

export const Careers: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Senior Geotechnical Engineer',
    department: 'Geotech Section',
    experience: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formState)
        });
        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (err) {
        setStatus('error');
      }
    } else {
      // Simulate static form receipt in development
      setTimeout(() => {
        setStatus('success');
      }, 800);
    }
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // CAREERS AT SIMCON //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Build Your Career with SIMCON Technology.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Join an engineering enterprise guided by IIT & NIT doctorates, operating modern digitalized testing laboratories and executing strategic infrastructure projects across India.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// WORK ENVIRONMENT"
            title="Why Engineers Build Their Future Here"
            description="Our people-first philosophy pairs challenging technical assignments with long-term professional stability and academic mentoring."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORK_CULTURE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8FA] p-6 rounded-xl border border-slate-200 hover:border-[#1268B3] transition-colors"
              >
                <span className="font-mono text-xs font-bold text-[#D71920] block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-base text-[#062B5C] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#536271] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings & Static Application Form */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Openings List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                  // CURRENT VACANCIES
                </span>
                <h2 className="text-2xl font-bold font-display text-[#062B5C]">
                  Active Technical Positions
                </h2>
              </div>

              <div className="space-y-4">
                {CAREER_OPENINGS.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 bg-blue-50 text-[#1268B3] text-[10px] font-mono font-bold rounded">
                        {job.department}
                      </span>
                      <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {job.experienceRequired}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display text-[#062B5C]">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-xs text-[#536271] leading-relaxed">
                      {job.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                        Key Responsibilities:
                      </span>
                      <ul className="space-y-1">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="text-xs text-[#536271] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3] shrink-0 mt-1.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Static Application Form */}
            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm lg:sticky lg:top-24">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                  ONLINE APPLICATION
                </span>
                <h3 className="text-xl font-bold font-display text-[#062B5C]">
                  Submit Your Candidacy
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  No account or login required. Submit details directly to SIMCON HR.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-display font-bold text-base text-emerald-900">
                    Application Successfully Received
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Thank you. Our human resources department has received your profile and will contact you regarding potential interviews.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono font-bold text-emerald-800 underline mt-2"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Something went wrong. Please try again or email hr@simcon.co.in directly.</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="engineer@domain.com"
                        className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="position" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Position Applied For *
                      </label>
                      <select
                        id="position"
                        value={formState.position}
                        onChange={(e) => setFormState({ ...formState, position: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      >
                        {CAREER_OPENINGS.map(job => (
                          <option key={job.id} value={job.title}>{job.title}</option>
                        ))}
                        <option value="General Engineering Application">General Engineering Application</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Total Experience *
                      </label>
                      <input
                        id="experience"
                        type="text"
                        required
                        value={formState.experience}
                        onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                        placeholder="e.g. 5 Years in Geotech"
                        className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                      Brief Profile / Cover Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Outline your testing expertise, university background, or project experience..."
                      className="w-full px-3.5 py-2 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Submitting Application...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center font-mono">
                    Protected by Formspree API integration • Private & Confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
