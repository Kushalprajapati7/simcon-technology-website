import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/common/SEOHead';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { ScrollObserver } from '@/components/common/ScrollObserver';
import { ScrollProgressBar } from '@/components/common/ScrollProgressBar';
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton';
import { PageLoader } from '@/components/common/PageLoader';

// Page Imports
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Leadership } from '@/pages/Leadership';
import { Team } from '@/pages/Team';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { GeotechnicalServices } from '@/pages/services/GeotechnicalServices';
import { GeophysicalServices } from '@/pages/services/GeophysicalServices';
import { NdtServices } from '@/pages/services/NdtServices';
import { MaterialTestingServices } from '@/pages/services/MaterialTestingServices';
import { Expertise } from '@/pages/Expertise';
import { Projects } from '@/pages/Projects';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { Accreditations } from '@/pages/Accreditations';
import { Approvals } from '@/pages/Approvals';
import { Clients } from '@/pages/Clients';
import { Reach } from '@/pages/Reach';
import { Careers } from '@/pages/Careers';
import { Insights } from '@/pages/Insights';
import { InsightDetail } from '@/pages/InsightDetail';
import { Contact } from '@/pages/Contact';
import { Legal } from '@/pages/Legal';
import { NotFound } from '@/pages/NotFound';

// ScrollToTop component ensuring route changes start at top or smoothly scroll to target hash
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -90; // offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      // Temporarily override smooth scrolling so page navigation jumps to top immediately
      // This prevents the browser from smooth-scrolling past new elements and pre-revealing them
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
      });
    }
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <PageLoader />
      <ScrollObserver />
      <ScrollProgressBar />
      <SEOHead />
      <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#17212B]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/accreditations" element={<Accreditations />} />
            <Route path="/about/approvals" element={<Approvals />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/geotechnical-services" element={<GeotechnicalServices />} />
            <Route path="/services/geophysical-survey" element={<GeophysicalServices />} />
            <Route path="/services/ndt-structural-integrity" element={<NdtServices />} />
            <Route path="/services/material-testing-services" element={<MaterialTestingServices />} />

            {/* Legacy Aliases & Direct Redirects */}
            <Route path="/services/geotechnical-investigation" element={<GeotechnicalServices />} />
            <Route path="/services/material-testing" element={<MaterialTestingServices />} />
            <Route path="/services/structural-health-assessment" element={<NdtServices />} />

            {/* Dynamic slug fallback for any custom or external URLs */}
            <Route path="/services/:slug" element={<ServiceDetail />} />

            <Route path="/expertise" element={<Expertise />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/reach" element={<Reach />} />

            <Route path="/careers" element={<Careers />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy-policy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/cookie-policy" element={<Legal />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating Actions: Aligned in one horizontal line at bottom-right */}
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 sm:gap-3 pointer-events-none">
          <ScrollToTopButton />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
};

export default App;
