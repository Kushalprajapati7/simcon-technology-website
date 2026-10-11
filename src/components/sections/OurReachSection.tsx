import React from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { IndiaMap } from '@/components/common/IndiaMap';

export const OurReachSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <SectionHeading
          technicalLabel="OPERATING REACH"
          title="Strategic Regional Hubs. Pan-India Execution."
          description="With permanent testing laboratories and hubs in Gandhidham, Ahmedabad, Lucknow, and Indore, we mobilize specialized crews to any site nationwide."
        />

        <IndiaMap />
      </div>
    </section>
  );
};
