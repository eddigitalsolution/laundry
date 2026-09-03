---
description: Global project rules covering UI/UX editorial design, React 19 + TypeScript standards, form accessibility (autoComplete), CSP security headers, SPA routing, and build/deploy workflows.
globs: "**/*"
alwaysApply: true
---

# Global Project Standards

## 1. UI/UX Editorial Design & Aesthetics
- Implement premium, editorial-grade designs with rich color palettes, modern typography, micro-interactions, and responsive layouts.
- Avoid generic styling or minimal placeholder UIs.

## 2. Technical Stack & Conventions
- **React 19 & TypeScript**: Strict typing, functional components, hooks.
- **Styling**: Tailwind CSS v4 / Vanilla CSS utility patterns.
- **Icons**: Lucide React.
- **Animations**: Framer Motion (without requiring `unsafe-eval`).

## 3. Form Accessibility & Best Practices
- Every `<input>` must have a unique `id` and descriptive `autoComplete` attribute (e.g., `name`, `email`, `tel`).

## 4. Security & Deployment Headers
- Synchronize CSP `<meta>` tag in `index.html` with `public/_headers`.
- Maintain SPA fallback redirect in `public/_redirects` (`/* /index.html 200`).
