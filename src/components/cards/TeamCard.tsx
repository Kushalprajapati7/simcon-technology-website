import React from 'react';
import { User, Clock, GraduationCap } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, featured = false }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#1268B3]/50 transition-all ${
        featured ? 'ring-1 ring-[#062B5C]/10' : ''
      }`}
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-64 sm:h-72 bg-slate-100 overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.designation} at SIMCON`}
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
              <User className="w-16 h-16 opacity-40" />
            </div>
          )}

          {member.yearsWithSimcon && (
            <div className="absolute bottom-3 left-3 bg-[#062B5C]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[10px] font-mono flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3 h-3 text-[#2B7EC8]" />
              <span>{member.yearsWithSimcon}</span>
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D71920] font-bold">
              {member.department}
            </span>
          </div>

          <h3 className="font-display font-bold text-base text-[#062B5C] leading-snug">
            {member.name}
          </h3>

          <p className="text-xs font-medium text-[#1268B3]">
            {member.designation}
          </p>

          {member.qualifications && (
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-mono text-[11px]">{member.qualifications}</span>
            </div>
          )}

          {member.bioSnippet && (
            <p className="text-xs text-[#536271] pt-2 leading-relaxed border-t border-slate-100 mt-2">
              {member.bioSnippet}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
