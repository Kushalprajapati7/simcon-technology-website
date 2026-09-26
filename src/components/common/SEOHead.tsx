import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_SEO, DEFAULT_SEO, SeoMetadata } from '@/data/seo';
import { COMPANY_INFO } from '@/data/company';

interface SEOHeadProps {
  customSeo?: Partial<SeoMetadata>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ customSeo }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const seoConfig: SeoMetadata = {
    ...DEFAULT_SEO,
    ...(PAGE_SEO[currentPath] || {}),
    ...(customSeo || {})
  };

  useEffect(() => {
    // 1. Update Title
    document.title = seoConfig.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 3. Set standard SEO meta tags
    setMetaTag('name', 'description', seoConfig.description);
    if (seoConfig.keywords) {
      setMetaTag('name', 'keywords', seoConfig.keywords);
    }

    // 4. Set Open Graph & Twitter
    setMetaTag('property', 'og:title', seoConfig.title);
    setMetaTag('property', 'og:description', seoConfig.description);
    setMetaTag('property', 'og:url', seoConfig.canonical);
    if (seoConfig.ogImage) {
      setMetaTag('property', 'og:image', seoConfig.ogImage);
      setMetaTag('property', 'twitter:image', seoConfig.ogImage);
    }
    setMetaTag('property', 'twitter:title', seoConfig.title);
    setMetaTag('property', 'twitter:description', seoConfig.description);

    // 5. Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoConfig.canonical);

    // 6. Inject Structured Data JSON-LD
    const existingScript = document.getElementById('seo-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-structured-data';
    script.type = 'application/ld+json';

    const schemaData = {
      "@context": "https://schema.org",
      "@type": seoConfig.structuredDataType === "LocalBusiness" ? "ProfessionalService" : "Organization",
      "name": COMPANY_INFO.name,
      "alternateName": COMPANY_INFO.shortName,
      "url": COMPANY_INFO.websiteUrl,
      "logo": `${COMPANY_INFO.websiteUrl}/favicon.svg`,
      "foundingDate": "2008",
      "description": COMPANY_INFO.subTagline,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 52, Ward 6 (Industrial)",
        "addressLocality": "Gandhidham",
        "addressRegion": "Gujarat",
        "postalCode": "370201",
        "addressCountry": "IN"
      },
      "telephone": COMPANY_INFO.officialPhone,
      "email": COMPANY_INFO.officialEmail,
      "sameAs": [
        "https://www.linkedin.com/company/simcon-technology-pvt-ltd/",
        "https://www.facebook.com/profile.php?id=100086505309653",
        "https://instagram.com/simcontech"
      ]
    };

    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // cleanup structured data if needed
    };
  }, [seoConfig]);

  return null;
};
