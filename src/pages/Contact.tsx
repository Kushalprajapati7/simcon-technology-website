import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { OFFICES } from '@/data/offices';
import { SERVICES } from '@/data/services';
import { SectionHeading } from '@/components/common/SectionHeading';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck 
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: 'Geotechnical Investigation',
    projectLocation: '',
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
      }, 700);
    }
  };

  const whatsappPhone = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-[#062B5C] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="technical-tag text-[#2B7EC8] font-mono tracking-widest uppercase">
              // TECHNICAL ENQUIRIES & LOCATIONS //
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display leading-[1.12]">
              Connect with Our Engineering Teams.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed pt-2">
              Reach our geotechnical specialists and NABL-accredited laboratory directors in Gandhidham, Ahmedabad, Lucknow, and Indore to initiate project discussions or request formal testing quotations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-20 bg-[#F7F8FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block">
                  TECHNICAL CONSULTATION
                </span>
                <h2 className="text-3xl font-extrabold font-display text-[#062B5C] leading-tight">
                  Let's Talk About Your Project.
                </h2>
                <p className="text-sm text-[#536271] leading-relaxed">
                  Every infrastructure project begins with an accurate understanding of subsurface ground behavior. Our senior advisors provide immediate technical guidance for your borehole plans, pile testing programs, and laboratory scopes.
                </p>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#062B5C] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#2B7EC8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      CENTRAL TELEPHONE ENQUIRY
                    </span>
                    <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-base font-bold font-mono text-[#062B5C] hover:text-[#1268B3]">
                      {COMPANY_INFO.officialPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded bg-[#062B5C] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2B7EC8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      OFFICIAL COMMUNICATIONS
                    </span>
                    <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="text-sm font-mono font-medium text-[#062B5C] hover:text-[#1268B3]">
                      {COMPANY_INFO.officialEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                      WHATSAPP TECHNICAL CHAT
                    </span>
                    <a
                      href={`https://wa.me/${whatsappPhone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-medium text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                    >
                      {COMPANY_INFO.whatsappNumber} →
                    </a>
                  </div>
                </div>
              </div>

              {/* Turnaround Assurance */}
              <div className="p-4 rounded-lg bg-blue-50 border border-[#1268B3]/20 flex items-start gap-3 text-xs text-[#062B5C]">
                <ShieldCheck className="w-5 h-5 text-[#1268B3] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Rapid Response SLA:</span>
                  <span className="text-slate-600">
                    Formal technical proposals and test schedules are processed within 24 business hours across our 4 regional hubs.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Project Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D71920] font-bold block mb-1">
                  PROJECT ENQUIRY
                </span>
                <h3 className="text-2xl font-bold font-display text-[#062B5C]">
                  Request an Engineering Proposal
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit site details to connect with the relevant regional laboratory manager.
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-display font-bold text-lg text-emerald-900">
                    Thank You. Your Enquiry Has Been Received.
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    A technical lead from the appropriate regional hub will review your project parameters and respond with testing specifications or quotation within committed timelines.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono font-bold text-emerald-800 underline mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Something went wrong. Please try again or contact us directly by phone or email.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Anand Patel"
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Company / EPC Organization *
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Larsen & Toubro"
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Corporate Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="patel@company.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Service Required *
                      </label>
                      <select
                        id="contact-service"
                        value={formState.serviceRequired}
                        onChange={(e) => setFormState({ ...formState, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      >
                        {SERVICES.map(srv => (
                          <option key={srv.id} value={srv.title}>{srv.title}</option>
                        ))}
                        <option value="Numerical Modeling & PLAXIS">Numerical Modeling & PLAXIS</option>
                        <option value="Comprehensive Tender Testing Package">Comprehensive Tender Testing Package</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-location" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                        Project Site Location *
                      </label>
                      <input
                        id="contact-location"
                        type="text"
                        required
                        value={formState.projectLocation}
                        onChange={(e) => setFormState({ ...formState, projectLocation: e.target.value })}
                        placeholder="e.g. Mundra, Gujarat"
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#062B5C] font-semibold mb-1">
                      Project Specifications / Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify borehole depths, estimated pile counts, required NABL parameters, or mobilization timeline..."
                      className="w-full px-3.5 py-2.5 text-xs rounded border border-slate-200 focus:outline-none focus:border-[#062B5C] bg-[#F7F8FA]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 text-xs font-bold font-mono uppercase tracking-wider text-white bg-[#062B5C] hover:bg-[#1268B3] rounded transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Get Started</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-400 text-center font-mono">
                    Official tender and engineering proposals treated under standard non-disclosure confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Office Locations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            technicalLabel="// OPERATING BASES"
            title="Our Four Regional Laboratories & Hubs"
            description="Direct postal addresses and regional email channels for our certified testing facilities."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((off) => (
              <div
                key={off.id}
                className="bg-[#F7F8FA] p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#D71920] uppercase">
                      {off.city}
                    </span>
                    {off.nablCode && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#062B5C] text-white rounded">
                        {off.nablCode}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#062B5C]">
                    {off.role}
                  </h3>
                  <p className="text-xs text-[#536271] mt-2 leading-relaxed">
                    {off.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 space-y-1.5 text-xs font-mono text-[#536271]">
                  <a href={`tel:${off.phone}`} className="hover:text-[#062B5C] flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1268B3]" /> {off.phone}
                  </a>
                  <a href={`mailto:${off.email}`} className="hover:text-[#062B5C] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#1268B3]" /> {off.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
