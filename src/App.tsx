import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/common/SEOHead';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

// Page Imports
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Leadership } from '@/pages/Leadership';
import { Team } from '@/pages/Team';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
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

// ScrollToTop component ensuring route changes start at top
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SEOHead />
      <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#17212B]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/team" element={<Team />} />
            
            <Route path="/services" element={<Services />} />
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
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
