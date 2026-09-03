# Cloudflare Pages & Workers Deployment Standard

This repository follows the global Cloudflare setup standard to avoid Content Security Policy (CSP) mismatches, missing security headers, and SPA 404 routing errors.

Detailed guidelines and rule configuration can be found in [`.agents/rules/cloudflare-setup.md`](.agents/rules/cloudflare-setup.md).

## Quick Summary & Deployment Checklist

1. **Security Headers (`public/_headers`)**:
   - Manages CSP headers (`default-src 'self' https: data: blob: 'unsafe-inline'`), `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.
2. **Meta Tag CSP (`index.html`)**:
   - Keeps local browser CSP aligned with Cloudflare edge headers.
3. **SPA Redirects & Fallback (`public/_redirects` / `200.html`)**:
   - `/* /index.html 200` (or `200.html`) to handle sub-route page refreshes without 404 errors.
4. **Wrangler / Project Configuration (`wrangler.jsonc`)**:
   - Deployment metadata and site static asset output configuration.
5. **Form Input Autocomplete**:
   - Explicit `autoComplete` tags on all inputs to satisfy browser security and accessibility requirements.
6. **Build Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variable**: `NODE_VERSION=20`

