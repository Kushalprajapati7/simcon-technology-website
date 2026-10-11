import React, { useState } from 'react';
import { CertificateModal } from '@/components/common/CertificateModal';
import { FinancialGrowth } from '@/components/sections/FinancialGrowth';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySimcon } from '@/components/sections/WhySimcon';
import { EngineeringFramework } from '@/components/sections/EngineeringFramework';
import { ComprehensiveServices } from '@/components/sections/ComprehensiveServices';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { NablAccreditations } from '@/components/sections/NablAccreditations';
import { RecentProjectsPreview } from '@/components/sections/RecentProjectsPreview';
import { OurReachSection } from '@/components/sections/OurReachSection';
import { ClientLogoWall } from '@/components/sections/ClientLogoWall';
import { CareersCallout } from '@/components/sections/CareersCallout';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { AccreditationCertificate } from '@/data/certificates';

export const Home: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<AccreditationCertificate | null>(null);

  return (
    <div className="pt-[72px]">
      <HeroSection />
      <WhySimcon />
      <EngineeringFramework />
      <ComprehensiveServices />
      <FeaturedProject />
      <NablAccreditations onSelectCertificate={setSelectedCertificate} />
      <RecentProjectsPreview />
      <FinancialGrowth />
      <OurReachSection />
      <ClientLogoWall />
      <CareersCallout />
      <FinalCTA />

      {/* NABL Certificate Inspection Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};
