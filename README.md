# SIMCON Technology Pvt. Ltd. — Corporate Web Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.14-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![NABL Accredited](https://img.shields.io/badge/NABL-ISO%2FIEC%2017025-green.svg)](https://simcon.co.in/accreditations)

A modern, high-credibility corporate engineering web platform for **SIMCON Technology Pvt. Ltd.** — one of India's premier geotechnical investigation, geophysical exploration, non-destructive testing, and civil materials testing consulting firms.

---

## 🏛️ Brand & Engineering Heritage

- **Established**: 2008 (18+ Years of Field Excellence)
- **Projects Executed**: 6,480+ Infrastructure & Industrial Projects
- **Team**: 125+ Multidisciplinary Geotechnical Specialists, Geophysicists, and Lab Technicians
- **Drilling & Sounding**: 200,000+ Running Meters Investigated
- **Accreditation**: 3 NABL-Accredited Testing Facilities (Gandhidham `TC-5077`, Ahmedabad `TC-9050`, Lucknow `TC-13273`) with 581 accredited testing parameters
- **Approvals**: Empaneled with NHAI, RVNL, AAI, MES, DPA, AUDA, and leading EPC conglomerates (L&T, Adani, Afcons, Tata Projects)

---

## 🚀 Key Features & Architectural Highlights

1. **Authentic Corporate Assets**:
   - Zero AI-generated hallucinated imagery.
   - High-resolution NABL certificates extracted directly from authentic corporate records (`public/assets/certificates/`).
   - Executive portraits of Managing Director Mr. Vinesh Maheshwari, Director Dr. Kalpana Maheshwari, and Technical Advisors (Dr. Kannan Iyer, Dr. Shailesh Gandhi, Mr. Bharat Dhumania).
   - 84 authentic client logos categorized across PSU & Government Authorities, EPC Infrastructure, Energy & Ports, and Industrial Township.
   - High-fidelity field photography from live sites (Ahmedabad Metro, Mumbai-Ahmedabad High Speed Rail, Mundra Port, Thermal Power Stations).

2. **Interactive Engineering Modules**:
   - **NABL Certificate Modal**: Instant high-resolution certificate inspection with download triggers, parameter counts, and validity details.
   - **Interactive India Geo-Map**: Custom SVG visualization showcasing SIMCON's pan-India project reach, regional hubs, and testing coverage across 14+ states.
   - **Three-Tier Workflow Explorer**: Visual breakdown of SIMCON's rigorous three-step execution framework (`01 Ground Investigation` → `02 Computational Modeling` → `03 Foundation Engineering`).
   - **Project Filter System**: Real project filtering across Aviation, Metro & Rail, Roads, Ports, Energy, and Heavy Industrial sectors.
   - **Modular Financial Growth Component**: Real corporate revenue trajectory visualization (`2021-22: ₹14.07 Cr` to `2023-24: ₹23.82 Cr`), cleanly configurable via a boolean toggle (`src/data/company.ts`).

3. **Enterprise SEO & 301 Migration Protection**:
   - Complete 301 redirect map for all 21 historic `.html` URLs (`/about.html`, `/service.html`, `/Scope.html`, etc.) in `aws/cloudfront-function-rewrite.js` and `public/_redirects`.
   - Comprehensive OpenGraph and JSON-LD schema (Organization, LocalBusiness, Service, BreadcrumbList) on every route.
   - XML Sitemap (`public/sitemap.xml`) and production `public/robots.txt`.

4. **Zero-Backend Serverless Architecture**:
   - Formspree static endpoint integration for RFQ inquiries and job applications.
   - 1-click direct WhatsApp consultation link (`+91 70690 42756`).
   - Static AWS S3 + CloudFront deployment with enterprise security headers (HSTS, CSP, X-Frame-Options).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core Framework** | React 18.3 + TypeScript 5.6 |
| **Build Tool** | Vite 5.4 (Rollup engine) |
| **Routing** | React Router DOM v6 |
| **Styling** | Tailwind CSS v4 + Custom Engineering Design System |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Typography** | Inter & Manrope (Google Fonts) |
| **Hosting** | AWS S3 + CloudFront (Origin Access Control) |
| **Forms** | Formspree Serverless Webhooks |

---

## 📁 Project Structure

```
simcon-technology-website/
├── aws/                                  # AWS Deployment configurations
│   ├── cloudfront-function-rewrite.js    # Viewer-request edge function (301s + SPA rewrite)
│   ├── cloudfront-response-headers-policy.json # Enterprise HSTS & CSP headers
│   └── s3-bucket-policy.json             # OAC restricted bucket policy
├── public/                               # Static production assets
│   ├── assets/
│   │   ├── certificates/                 # Real NABL certificate scans (Gandhidham, Ahmedabad, Lucknow)
│   │   ├── clients/                      # 84 authentic client logos
│   │   ├── leadership/                   # Directors & Technical Advisory portraits
│   │   ├── team/                         # 16 specialist engineers
│   │   ├── projects/                     # Verified site photography
│   │   └── services/                     # Discipline laboratory & field photography
│   ├── _redirects                        # Static fallback redirect rules
│   ├── 404.html                          # Static 404 fallback page
│   ├── favicon.svg                       # SIMCON vector favicon
│   ├── robots.txt                        # Search engine crawling rules
│   └── sitemap.xml                       # Search console XML sitemap
├── src/
│   ├── components/
│   │   ├── cards/                        # ProjectCard, ServiceCard, TeamCard
│   │   ├── common/                       # SectionHeading, IndiaMap, CertificateModal, SEOHead, WhatsAppButton
│   │   ├── layout/                       # Header, Footer
│   │   └── sections/                     # FinancialGrowth, WorkflowExplorer
│   ├── data/                             # Single Source of Truth from Simcon Profile.pdf
│   │   ├── company.ts                    # Stats, vision, mission, directors message, financial flag
│   │   ├── offices.ts                    # 4 branch offices (addresses, phones, emails, NABL codes)
│   │   ├── certificates.ts               # NABL testing parameters & approvals
│   │   ├── services.ts                   # 8 disciplines & 42 laboratory/field tests
│   │   ├── projects.ts                   # Landmark infrastructure case studies
│   │   ├── clients.ts                    # Client roster
│   │   ├── team.ts                       # Executive, Advisory, and Technical team roster
│   │   ├── careers.ts                    # Job openings & company culture
│   │   ├── insights.ts                   # Geotechnical articles & technical briefings
│   │   ├── migration.ts                  # Historic URL 301 migration map
│   │   └── seo.ts                        # Route metadata & structured schema
│   ├── pages/                            # 17 application routes
│   ├── App.tsx                           # Routing & layout shell
│   ├── index.css                         # Tailwind CSS & design tokens
│   └── main.tsx                          # React DOM entry point
├── DEPLOYMENT_GUIDE.md                   # Complete AWS S3 + CloudFront deployment handbook
├── URL_MIGRATION_GUIDE.md                # 301 URL redirect directory & Google Search Console guide
└── vite.config.ts                        # Vite & Rollup optimization config
```

---

## 💻 Local Development

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Kushalprajapati7/simcon-technology-website.git
cd simcon-technology-website
npm install
```

### 2. Configure Environment (Optional)
Create a `.env.local` file:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```
*(If unset, forms gracefully simulate submissions and advise the user to configure the endpoint).*

### 3. Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
Generates production-optimized static assets in `dist/`.

---

## 🌐 Production Deployment

Refer to [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) for full AWS S3 + CloudFront + ACM SSL + GoDaddy DNS deployment instructions.

Quick sync command after AWS CLI configuration:
```bash
# Sync static assets with 1-year immutable cache
aws s3 sync dist/ s3://simcon-technology-website-prod --delete --cache-control "max-age=31536000,public,immutable" --exclude "index.html" --exclude "*.json" --exclude "sitemap.xml" --exclude "robots.txt"

# Sync HTML & metadata with no-cache revalidation
aws s3 sync dist/ s3://simcon-technology-website-prod --delete --cache-control "max-age=0,must-revalidate,public" --include "index.html" --include "*.json" --include "sitemap.xml" --include "robots.txt"

# Invalidate CloudFront edge cache
aws cloudfront create-invalidation --distribution-id <YOUR_DISTRIBUTION_ID> --paths "/*"
```

---

## 🔒 SEO & URL Migration Compliance

Refer to [`URL_MIGRATION_GUIDE.md`](./URL_MIGRATION_GUIDE.md) for details on the 21 legacy URLs mapped with `301 Permanent Redirects` to retain 100% of SIMCON's historic organic search rankings.

---

## 📄 License & Attribution

Copyright © 2008–2026 **SIMCON Technology Pvt. Ltd.** All rights reserved.  
All brand assets, photography, and NABL accreditation references belong to SIMCON Technology Pvt. Ltd. and are verified against `Simcon Profile.pdf`.