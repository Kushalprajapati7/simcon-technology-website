import React from 'react';
import {
  GraduationCap,
  Award,
  Settings,
  BarChart3,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

const FEATURE_CARDS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2563EB]" />,
    iconBg: "bg-blue-50",
    title: "IIT & NIT Academic Guidance",
    desc: "Senior engineering decisions reviewed and guided by doctorate advisors with deep research expertise in soil mechanics."
  },
  {
    icon: <Award className="w-6 h-6 text-[#E11D48]" />,
    iconBg: "bg-red-50",
    title: "NABL Accreditation (581 Parameters)",
    desc: "ISO/IEC 17025:2017 accredited laboratories in Gandhidham, Ahmedabad, and Lucknow ensuring strict audit compliance."
  },
  {
    icon: <Settings className="w-6 h-6 text-[#2563EB]" />,
    iconBg: "bg-blue-50",
    title: "Modern Digitalized Testing Labs",
    desc: "Automated triaxial compression, digital consolidation, and servo-controlled UTM setups eliminating manual transcription."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#2563EB]" />,
    iconBg: "bg-blue-50",
    title: "Advanced Numerical Modeling",
    desc: "Full in-house modeling using PLAXIS 2D, LPILE, StoneC, and LIQSVS for complex soil-structure interaction."
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#E11D48]" />,
    iconBg: "bg-red-50",
    title: "Rapid Pan-India Mobilization",
    desc: "Four strategic regional hubs and owned drilling fleet capable of deploying to remote transit and energy corridors."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#2563EB]" />,
    iconBg: "bg-blue-50",
    title: "Rigorous Chain of Custody",
    desc: "Systematic undisturbed core sampling, electronic tracking, and verifiable reporting for EPCs and government authorities."
  }
];

export const WhySimcon: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Heading, Subtitle & Director's Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold font-display text-[#062B5C] tracking-tight leading-[1.12]">
                Engineering Decisions<br className="hidden sm:block" />
                Built on <span className="text-[#1E60FF]">Evidence</span><span className="text-[#D71920]">.</span>
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#536271] leading-relaxed max-w-xl">
                At SIMCON Technology, we believe foundational decisions must be driven by verifiable technical facts and strict ethics - never by commercial pressure.
              </p>
            </div>

            {/* Director's Principle Quote Box (Expands to match right side height) */}
            <div className="bg-[#062B5C] text-white p-7 sm:p-9 lg:p-10 rounded-2xl relative shadow-md mt-8 sm:mt-10 flex-1 flex flex-col justify-between">
              <div className="flex-1 flex flex-col justify-center py-2 sm:py-4">
                <blockquote className="text-xl sm:text-2xl lg:text-[23px] font-display font-medium leading-relaxed italic text-white/95">
                  <span className="text-3xl sm:text-4xl text-[#4A8BE2] font-serif font-black mr-1.5 select-none leading-none inline-block align-top">“</span>
                  Engineering decisions must be driven by facts, technical competence and ethics - not by commercial pressure.
                  <span className="text-3xl sm:text-4xl text-[#4A8BE2] font-serif font-black ml-1.5 select-none leading-none inline-block">”</span>
                </blockquote>
              </div>

              <div className="pt-6 sm:pt-7 mt-6 sm:mt-7 border-t border-white/15 flex items-center gap-3.5 sm:gap-4">
                <img
                  src="/assets/leadership/vinesh-maheshwari.jpeg"
                  alt={COMPANY_INFO.directorsMessage.author}
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white/25 shrink-0 shadow-sm"
                />
                <div>
                  <div className="font-bold text-base sm:text-lg text-white font-display">
                    {COMPANY_INFO.directorsMessage.author}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-normal mt-0.5">
                    {COMPANY_INFO.directorsMessage.title} ({COMPANY_INFO.directorsMessage.credentials})
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {FEATURE_CARDS.map((card, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:bg-white hover:border-[#1E60FF]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
              >
                <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mb-4 sm:mb-5 shrink-0`}>
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-[#062B5C] mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#536271] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
