# SIMCON Technology Pvt. Ltd. — URL Migration & SEO Equity Preservation Guide

## 1. Executive Summary & Objective

This document outlines the strict **301 Permanent Redirect Strategy** implemented during the migration from the legacy static HTML website (`simcon.co.in/*.html`) to the new modern engineering web platform.

### Primary Objectives:
1. **Preserve 100% of Historic Organic Search Equity**: Retain PageRank, domain authority, and backlinks accumulated since 2008 across government tenders, infrastructure authorities (NHAI, RVNL, AAI), and engineering institutions.
2. **Prevent 404 Not Found Crawl Errors**: Ensure every inbound link from external directories, PDFs, and client portals resolves cleanly to its modern counterpart.
3. **Enforce Canonical Apex Domain**: Automatically redirect `https://www.simcon.co.in/*` to `https://simcon.co.in/*` to eliminate duplicate content penalties.
4. **Sub-5ms Edge Execution**: Execute 301 redirects at AWS CloudFront edge locations before hitting the S3 origin, reducing latency and server load.

---

## 2. Complete 301 Permanent Redirect Mapping Matrix

All legacy URLs have been audited and mapped to their exact modern routes:

| # | Legacy URL (`simcon.co.in`) | New Canonical Route | HTTP Status | Rationale & User Intent |
|---|-----------------------------|---------------------|-------------|-------------------------|
| 1 | `/index.html` | `/` | `301 Permanent` | Legacy homepage mapped to root domain |
| 2 | `/about.html` | `/about` | `301 Permanent` | Corporate background, MD message, and 18-year history |
| 3 | `/service.html` | `/services` | `301 Permanent` | Comprehensive 8-discipline engineering services hub |
| 4 | `/Scope.html` | `/accreditations` | `301 Permanent` | NABL ISO/IEC 17025 testing scope & parameters |
| 5 | `/certification.html` | `/accreditations` | `301 Permanent` | NABL certificates viewer (TC-5077, TC-9050, TC-13273) |
| 6 | `/approval.html` | `/approvals` | `301 Permanent` | Government and authority empanelment certificates |
| 7 | `/projects.html` | `/projects` | `301 Permanent` | Landmark engineering project database |
| 8 | `/clients.html` | `/clients` | `301 Permanent` | Client roster across PSU, private infra, & MNCs |
| 9 | `/career.html` | `/careers` | `301 Permanent` | Engineering job openings & application form |
| 10 | `/contact.html` | `/contact` | `301 Permanent` | Four branch offices (Gandhidham, Ahmedabad, Lucknow, Indore) |
| 11 | `/gallery.html` | `/projects` | `301 Permanent` | Legacy image gallery mapped to authentic project studies |
| 12 | `/airport.html` | `/projects?category=Aviation` | `301 Permanent` | Filtered aviation projects (AAI airports) |
| 13 | `/metro-railways.html` | `/projects?category=Metro%20%26%20Bullet%20Train` | `301 Permanent` | High-speed rail & metro corridor investigations |
| 14 | `/railways.html` | `/projects?category=Railway` | `301 Permanent` | Dedicated freight corridors & railway bridges |
| 15 | `/roadways.html` | `/projects?category=Roads%20%26%20Highways` | `301 Permanent` | Expressways, NHAI highways, and bridges |
| 16 | `/port-jetty.html` | `/projects?category=Ports%20%26%20Marine` | `301 Permanent` | Marine terminals, berths, and offshore bathymetry |
| 17 | `/green-energy.html` | `/projects?category=Energy` | `301 Permanent` | Renewable solar/wind foundation investigations |
| 18 | `/building-infrastructure.html` | `/projects?category=Industrial` | `301 Permanent` | Heavy industrial plants, townships, and commercial |
| 19 | `/petroleum-industry.html` | `/projects?category=Industrial` | `301 Permanent` | Refineries, pipelines, and petrochemical storage |
| 20 | `/military-engineering-services.html` | `/projects?category=Infrastructure` | `301 Permanent` | Defense stations, airbases, and military installations |
| 21 | `/irrigation.html` | `/projects?category=Infrastructure` | `301 Permanent` | Barrages, canal embankments, and hydraulic structures |

---

## 3. Multi-Layer Technical Implementation

### Layer 1: AWS CloudFront Edge Function (Primary Production Route)
The file `aws/cloudfront-function-rewrite.js` is associated with the CloudFront Distribution on the **Viewer Request** event.

```javascript
// Sample snippet from aws/cloudfront-function-rewrite.js
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var host = request.headers.host ? request.headers.host.value : '';

    // Apex domain enforcement
    if (host === 'www.simcon.co.in') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { 'location': { value: 'https://simcon.co.in' + uri } }
        };
    }

    // 301 Legacy Redirect Table
    var legacyRedirects = {
        '/about.html': '/about',
        '/service.html': '/services',
        // ... all 21 mappings
    };

    if (legacyRedirects[uri]) {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { 'location': { value: legacyRedirects[uri] } }
        };
    }

    // SPA index fallback for client-side routing
    if (uri.indexOf('.') === -1) {
        request.uri = '/index.html';
    }
    return request;
}
```

### Layer 2: Static Hosting Rule Fallback (`public/_redirects`)
For preview environments (Cloudflare Pages, Netlify, or Amplify), the file `public/_redirects` ensures identical 301 behavior:

```text
# Domain Canonicalization
https://www.simcon.co.in/* https://simcon.co.in/:splat 301!

# Legacy 301 Redirects
/about.html                       /about                                    301
/service.html                     /services                                 301
/Scope.html                       /accreditations                           301
/certification.html               /accreditations                           301
/approval.html                    /approvals                                301
/projects.html                    /projects                                 301
/clients.html                     /clients                                  301
/career.html                      /careers                                  301
/contact.html                     /contact                                  301
/gallery.html                     /projects                                 301
/airport.html                     /projects?category=Aviation               301
/metro-railways.html              /projects?category=Metro%20%26%20Bullet%20Train  301
/railways.html                    /projects?category=Railway                301
/roadways.html                    /projects?category=Roads%20%26%20Highways 301
/port-jetty.html                  /projects?category=Ports%20%26%20Marine   301
/green-energy.html                /projects?category=Energy                 301
/building-infrastructure.html     /projects?category=Industrial             301
/petroleum-industry.html          /projects?category=Industrial             301
/military-engineering-services.html /projects?category=Infrastructure      301
/irrigation.html                  /projects?category=Infrastructure         301

# SPA fallback
/*                                /index.html                               200
```

---

## 4. Post-Cutover Verification & Google Search Console Checklist

### Step 1: Curl Status Verification
Run the following curl commands to verify `301 Moved Permanently` responses and proper `Location` headers:

```bash
# 1. Verify apex redirect
curl -I https://www.simcon.co.in/
# Expected: HTTP/2 301, Location: https://simcon.co.in/

# 2. Verify legacy page redirect
curl -I https://simcon.co.in/about.html
# Expected: HTTP/2 301, Location: /about

# 3. Verify target page loads 200 OK
curl -I https://simcon.co.in/about
# Expected: HTTP/2 200 OK
```

### Step 2: Google Search Console Actions
1. Log into [Google Search Console](https://search.google.com/search-console).
2. Select property `https://simcon.co.in`.
3. Submit the updated XML sitemap:
   - Sitemap URL: `https://simcon.co.in/sitemap.xml`
4. Use the **URL Inspection Tool** to inspect high-priority legacy URLs (`https://simcon.co.in/about.html`, `https://simcon.co.in/service.html`) and verify Google detects the 301 redirect to the new canonical URL.
5. Monitor **Coverage / Page indexing** report over the next 14 days to confirm zero new 404 errors.
