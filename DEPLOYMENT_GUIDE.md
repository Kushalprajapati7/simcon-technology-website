# SIMCON Technology Pvt. Ltd. — Production Deployment Guide
### Architecture: AWS S3 + CloudFront (OAC) + Route 53 / GoDaddy DNS + ACM SSL

This guide provides step-by-step instructions to deploy the modern SIMCON Technology web application to AWS production infrastructure with global edge caching, SSL/TLS termination, sub-5ms 301 redirects, and automated continuous deployment.

---

## 1. Architecture Overview

```
                                      +--------------------------+
                                      |   GoDaddy DNS / Route 53 |
                                      | simcon.co.in / www       |
                                      +-------------+------------+
                                                    |
                                                    v
                                      +--------------------------+
                                      |  AWS CloudFront Edge     |
                                      |  - ACM SSL Certificate   |
                                      |  - Security Headers      |
                                      |  - Viewer Request Func   |
                                      |    (301s & SPA routing)  |
                                      +-------------+------------+
                                                    | (Origin Access Control)
                                                    v
                                      +--------------------------+
                                      |      AWS S3 Bucket       |
                                      | (Block Public Access ON) |
                                      | simcon-website-prod      |
                                      +--------------------------+
```

---

## 2. Prerequisites

1. **AWS CLI** installed and configured (`aws configure` with an IAM user having S3 and CloudFront permissions).
2. **Node.js 18+** and **npm** installed.
3. Access to domain DNS management on **GoDaddy** for `simcon.co.in`.
4. Free Formspree form ID for the contact & career submissions (set in `.env.production`).

---

## 3. Step-by-Step Deployment Procedure

### Step 1: Request SSL Certificate in AWS Certificate Manager (ACM)
> **CRITICAL**: CloudFront requires certificates to be created in the **`us-east-1` (N. Virginia)** region, regardless of where your S3 bucket resides.

1. Open AWS Console and switch region to **us-east-1** (N. Virginia).
2. Go to **AWS Certificate Manager (ACM)** -> **Request certificate**.
3. Choose **Request a public certificate**.
4. Domain names:
   - Fully qualified domain: `simcon.co.in`
   - Additional name: `*.simcon.co.in`
5. Validation method: **DNS validation**.
6. Copy the provided CNAME **Name** and **Value** records and add them to **GoDaddy DNS Manager**.
7. Wait 5–15 minutes until certificate status displays **Issued**.

---

### Step 2: Create and Configure the Private S3 Bucket

1. Open **Amazon S3** Console and click **Create bucket**.
2. **Bucket name**: `simcon-technology-website-prod` (must be globally unique).
3. **Region**: `ap-south-1` (Mumbai) or region of choice.
4. **Block Public Access settings**: Keep **Block *all* public access** checked (**ON**). S3 should never be directly accessible; traffic must only flow through CloudFront.
5. Click **Create bucket**.

---

### Step 3: Create CloudFront Origin Access Control (OAC)

1. Open **CloudFront** Console -> **Security** -> **Origin access**.
2. Click **Create control setting**.
3. Name: `simcon-s3-oac`.
4. Origin type: **S3**.
5. Signing behavior: **Sign requests (recommended)**.
6. Click **Create**.

---

### Step 4: Deploy CloudFront Viewer Request Function (Redirects & Routing)

1. Go to **CloudFront** Console -> **Functions** -> **Create function**.
2. Name: `simcon-viewer-request`.
3. Runtime: **cloudfront-js-2.0**.
4. Copy and paste the entire code from [`aws/cloudfront-function-rewrite.js`](file:///d:/Work/simcon-technology-website/aws/cloudfront-function-rewrite.js).
5. Click **Save changes** -> **Publish**.

---

### Step 5: Create CloudFront Security Response Headers Policy

1. Go to **CloudFront** Console -> **Policies** -> **Response headers** -> **Create response headers policy**.
2. Name: `SIMCON-SecurityHeaders-Policy`.
3. Configure the following headers (reference: [`aws/cloudfront-response-headers-policy.json`](file:///d:/Work/simcon-technology-website/aws/cloudfront-response-headers-policy.json)):
   - **Strict-Transport-Security**: Max-age `63072000`, include subdomains, preload.
   - **X-Content-Type-Options**: `nosniff`.
   - **X-Frame-Options**: `DENY`.
   - **Referrer-Policy**: `strict-origin-when-cross-origin`.
   - **Content-Security-Policy**:
     ```
     default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://formspree.io; frame-ancestors 'none';
     ```
4. Click **Create**.

---

### Step 6: Create the CloudFront Distribution

1. Go to **CloudFront** -> **Create distribution**.
2. **Origin domain**: Select your S3 bucket `simcon-technology-website-prod.s3.ap-south-1.amazonaws.com`.
3. **Origin access**: Select **Origin access control settings (recommended)** and choose `simcon-s3-oac`.
4. **Viewer protocol policy**: Select **Redirect HTTP to HTTPS**.
5. **Allowed HTTP methods**: `GET, HEAD, OPTIONS`.
6. **Cache key and origin requests**: Choose **Cache policy: CachingOptimized**.
7. **Response headers policy**: Select `SIMCON-SecurityHeaders-Policy`.
8. **Function associations**:
   - Event type: **Viewer request**
   - Function type: **CloudFront Function**
   - Function: `simcon-viewer-request`
9. **Alternate domain name (CNAME)**: Add `simcon.co.in` and `www.simcon.co.in`.
10. **Custom SSL certificate**: Select the ACM certificate created in Step 1.
11. **Default root object**: `index.html`.
12. Click **Create distribution**.

---

### Step 7: Apply S3 Bucket Policy

Once the distribution is created, copy its Distribution ID (e.g. `E123EXAMPLE`).
1. Go back to **Amazon S3** -> `simcon-technology-website-prod` -> **Permissions** -> **Bucket policy**.
2. Paste the policy from [`aws/s3-bucket-policy.json`](file:///d:/Work/simcon-technology-website/aws/s3-bucket-policy.json), replacing `<AWS_ACCOUNT_ID>` and `<CLOUDFRONT_DISTRIBUTION_ID>`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::simcon-technology-website-prod/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>"
        }
      }
    }
  ]
}
```
3. Save changes.

---

### Step 8: Configure GoDaddy DNS Records

Log in to GoDaddy DNS management for `simcon.co.in`:

| Type | Name | Value / Destination | TTL |
|------|------|---------------------|-----|
| `CNAME` | `www` | `d111111abcdef8.cloudfront.net` | 1 Hour |
| `A` | `@` | Point to CloudFront or use GoDaddy Domain Forwarding (`https://simcon.co.in` -> `https://www.simcon.co.in` or use AWS Route 53 ALIAS record) | 1 Hour |

> [!TIP]
> **Best Practice with Route 53**: If transferring DNS to AWS Route 53, an **A (Alias)** record directly routes apex `simcon.co.in` to the CloudFront distribution with zero hops and native IP Anycast.

---

## 4. Build and Publish Commands

Run the following commands in the workspace root whenever publishing an update:

```bash
# 1. Install dependencies
npm install

# 2. Build production bundle
npm run build

# 3. Synchronize build artifacts to S3
aws s3 sync dist/ s3://simcon-technology-website-prod --delete --cache-control "max-age=31536000,public,immutable" --exclude "index.html" --exclude "*.json" --exclude "sitemap.xml" --exclude "robots.txt"

# 4. Synchronize HTML and metadata files with zero cache
aws s3 sync dist/ s3://simcon-technology-website-prod --delete --cache-control "max-age=0,must-revalidate,public" --include "index.html" --include "*.json" --include "sitemap.xml" --include "robots.txt"

# 5. Invalidate CloudFront edge cache
aws cloudfront create-invalidation --distribution-id <YOUR_DISTRIBUTION_ID> --paths "/*"
```

---

## 5. Contact & Career Forms Setup (Formspree)

1. Create a free account at [Formspree.io](https://formspree.io).
2. Create two forms:
   - **General Contact & RFQ**: e.g., `https://formspree.io/f/mqazkxyz`
   - **Careers & Applications**: e.g., `https://formspree.io/f/xbjnyabc`
3. Create a `.env.production` file in the project root:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mqazkxyz
   ```
4. Re-run `npm run build` and sync to S3. Both the Contact page inquiry form and Careers application modal will securely forward all client requests directly to SIMCON corporate email.
