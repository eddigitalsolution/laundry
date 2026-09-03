# Project Standards & Agent Manifest

This project enforces global agent standards and architecture guidelines through structured Markdown rules across all project domains.

## Active Rules & Specifications
- **Project Standards**: [`.agents/rules/project-standards.md`](.agents/rules/project-standards.md)
  - UI/UX Editorial Design, React 19 + TypeScript, Tailwind CSS v4, Accessibility (`autoComplete`), CSP, SPA Routing.
- **Cloudflare Deployment**: [`.agents/rules/cloudflare-setup.md`](.agents/rules/cloudflare-setup.md)
  - Edge security headers (`public/_headers`), SPA rewrite rules (`public/_redirects`), and build variables (`NODE_VERSION=20`).
- **Contact Details**: [`.agents/rules/contact-details.md`](.agents/rules/contact-details.md)
  - Global contact and WhatsApp business details standard (`+60 11-3071 9502`).
- **Cloudflare Quick Reference**: [`CLOUDFLARE.md`](CLOUDFLARE.md)
  - Quick-reference deployment guide for Cloudflare static configuration.

## Development Commands
- `npm run dev`: Start local development server
- `npm run build`: Typecheck and produce production bundle in `dist/`
- `npm run preview`: Preview production build locally
