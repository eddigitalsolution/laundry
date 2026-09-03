---
description: Global setup rule for Cloudflare Pages & Workers static hosting (CSP header configuration, SPA route rewrites, build environment).
globs: "**/*"
alwaysApply: true
---

# Global Cloudflare Setup & Deployment Guidelines

## 1. Security Headers (`public/_headers`)
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

## 2. SPA Routing Fallback (`public/_redirects`)
```http
/* /index.html 200
```

## 3. Meta Tag CSP Synchronization (`index.html`)
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```

## 4. Build Configuration
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `NODE_VERSION=20`
