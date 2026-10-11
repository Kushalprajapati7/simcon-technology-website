import React from 'react';
import { User, GraduationCap } from 'lucide-react';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  member,
  featured = false
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-[#1268B3]/40 ${
        featured ? 'ring-1 ring-[#062B5C]/15 shadow-sm' : ''
      }`}
    >
      <div>
        {/* Photo Container */}
        <div className="relative aspect-[4/4.5] bg-slate-100 overflow-hidden">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.designation} at SIMCON`}
              className="w-full h-full object-cover object-[center_top] transition-transform duration-300 hover:scale-102"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
              <User className="w-16 h-16 opacity-40" />
            </div>
          )}
        </div>

        {/* Member Details */}
        <div className="p-3.5 sm:p-4 space-y-1">
          <h3 className="font-display font-bold text-xs sm:text-sm text-[#062B5C] leading-snug line-clamp-1">
            {member.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-slate-600 font-medium line-clamp-1">
            {member.designation || member.department}
          </p>

          {member.yearsWithSimcon && (
            <p className="text-[10px] font-mono font-bold text-slate-500 tracking-tight uppercase pt-0.5">
              ({member.yearsWithSimcon})
            </p>
          )}

          {member.qualifications && (
            <div className="flex items-center gap-1 text-[11px] text-slate-500 pt-0.5">
              <GraduationCap className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="font-mono">{member.qualifications}</span>
            </div>
          )}

          {member.bioSnippet && (
            <p className="text-[11px] text-[#536271] pt-2 mt-2 leading-relaxed border-t border-slate-100 line-clamp-2">
              {member.bioSnippet}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
