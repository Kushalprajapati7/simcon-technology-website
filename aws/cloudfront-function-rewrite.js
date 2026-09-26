/**
 * CloudFront Function (Viewer Request) for SIMCON Technology
 * Runtime: cloudfront-js-2.0
 * 
 * Functions:
 * 1. 301 Redirect legacy URLs (e.g., /about.html -> /about) to preserve SEO equity.
 * 2. Enforce canonical apex domain (redirect www.simcon.co.in to simcon.co.in).
 * 3. Route clean SPA URLs to /index.html while serving static files directly.
 */

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    var host = request.headers.host ? request.headers.host.value : '';

    // 1. Enforce canonical domain (Redirect www to apex)
    if (host === 'www.simcon.co.in') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://simcon.co.in' + uri }
            }
        };
    }

    // 2. Legacy URL 301 Mappings
    var legacyRedirects = {
        '/index.html': '/',
        '/about.html': '/about',
        '/service.html': '/services',
        '/Scope.html': '/accreditations',
        '/certification.html': '/accreditations',
        '/approval.html': '/approvals',
        '/projects.html': '/projects',
        '/clients.html': '/clients',
        '/career.html': '/careers',
        '/contact.html': '/contact',
        '/gallery.html': '/projects',
        '/airport.html': '/projects?category=Aviation',
        '/metro-railways.html': '/projects?category=Metro%20%26%20Bullet%20Train',
        '/railways.html': '/projects?category=Railway',
        '/roadways.html': '/projects?category=Roads%20%26%20Highways',
        '/port-jetty.html': '/projects?category=Ports%20%26%20Marine',
        '/green-energy.html': '/projects?category=Energy',
        '/building-infrastructure.html': '/projects?category=Industrial',
        '/petroleum-industry.html': '/projects?category=Industrial',
        '/military-engineering-services.html': '/projects?category=Infrastructure',
        '/irrigation.html': '/projects?category=Infrastructure'
    };

    if (legacyRedirects[uri]) {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: legacyRedirects[uri] }
            }
        };
    }

    // 3. Static assets bypass (files with extensions)
    if (uri.indexOf('.') !== -1) {
        return request;
    }

    // 4. Default to index.html for client-side routing
    request.uri = '/index.html';
    return request;
}
