# BLANC / LAUNDRY — Swiss Garment Studio

> **"WE MAKE DIRTY DISAPPEAR."**
> A precision garment washing, solvent-free dry cleaning, and artisan steam pressing web application built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

---

## 🎨 Original Design Prompt & Vision

```yaml
Concept: "WE MAKE DIRTY DISAPPEAR."
Design Aesthetic: Swiss / International Typographic Style (minimalist, dark mode, stark gridlines, high contrast).
Hero: Almost empty screen, monumental typography ("WE MAKE DIRTY DISAPPEAR."), centered floating dress shirt.
Signature Interaction:
  DIRTY ->
  WASH ->
  DRY ->
  FOLD ->
  CLEAN
  (The shirt travels step-by-step through the page with real high-resolution photography).
Required Sections:
  - Hero Stage (Centered 3D tilt shirt visual & 24h doorstep return guarantee)
  - Signature Shirt Travel (5-stage real photography pipeline with full-screen container)
  - Services & Specifications (5 real-photography service cards with rate badges)
  - How It Works (3-step doorstep collection workflow)
  - Interactive Pricing Calculator (Item counter, live tally & instant WhatsApp order dispatch)
  - Quality Manifesto (Zero PCE dry cleaning, reverse osmosis water, 4.5 bar steam press, micro-RFID tracking)
  - Frequently Asked Questions (Interactive accordion for high-rise pickup & eco care)
  - Call To Action & Footer (WhatsApp booking dispatch & service coverage across KL & Selangor)
```

---

## 🛠️ Global Skills Applied

This repository enforces global agent standards and architecture guidelines through active Antigravity skills:

1. **[`global-setup`](file:///.agents/rules/project-standards.md)**
   - Enforces Cloudflare Pages edge security headers (`public/_headers`), synchronized CSP meta tags (`index.html`), SPA route fallback (`public/_redirects`), and form field accessibility (`autoComplete` + unique `id`s).
2. **[`cloudflare-setup`](file:///.agents/rules/cloudflare-setup.md)**
   - Configures Cloudflare static hosting deployment parameters (`NODE_VERSION=20`, `dist/` build directory, zero `unsafe-eval` CSP).
3. **[`compact-ui-design`](file:///.agents/rules/project-standards.md)**
   - Enforces clean, uncluttered, compact layout rhythm (4px/8px modular grid spacing), restrained font hierarchy, monospaced data tags (`[STATUS: ACCEPTING PICKUPS]`), and single-line navbar text standards.
4. **Anti-AI Slop Icon Policy**
   - Strictly prohibits glossy 3D AI slop icons, rainbow sparkle overloads, or clipart clutter. Enforces clean 1.5px/2.0px stroke vector line iconography (Lucide React) in subtle monochrome tones.

---

## 📜 Global Setup & Markdown Rules (.md)

This project enforces global agent standards and architecture guidelines through structured Markdown rules across all project domains:

- **[`GEMINI.md`](GEMINI.md)**: Main project instruction manifest linking active workspace rules, commands, and architecture standards.
- **[`.agents/rules/project-standards.md`](.agents/rules/project-standards.md)**: Global project rules covering UI/UX editorial design, React 19 + TypeScript standards, form accessibility (`autoComplete`), CSP security headers, SPA routing, and build/deploy workflows.
- **[`.agents/rules/cloudflare-setup.md`](.agents/rules/cloudflare-setup.md)**: Global setup rule for Cloudflare Pages & Workers static hosting (CSP header configuration, native SPA routing, build environment).
- **[`.agents/rules/contact-details.md`](.agents/rules/contact-details.md)**: Global contact and WhatsApp business details standard (`+60 11-3071 9502`).
- **[`CLOUDFLARE.md`](CLOUDFLARE.md)**: Quick-reference deployment guide for Cloudflare static configuration (`wrangler.jsonc`, `public/_headers`, & `200.html`).

---

## 📱 Global Contact Details

- **WhatsApp Business Line**: `+60 11-3071 9502`
- **Direct Dispatch Link**: [`https://wa.me/601130719502`](https://wa.me/601130719502)
- **Service Radius**: Kuala Lumpur & Selangor (KLCC, Bangsar, Mont Kiara, Damansara, Petaling Jaya, Subang, Ampang).

---

## 💻 Development & Deployment Commands

```bash
# Start local development server
npm run dev

# Typecheck and produce production build in dist/
npm run build

# Preview production build locally on port 4173
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment & Smooth Configuration

To ensure zero-downtime, error-free deployment on Cloudflare Pages:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **Framework Preset** | Vite | Standard React + Vite setup |
| **Build Command** | `npm run build` | Compiles TypeScript and builds assets into `dist/` |
| **Build Output Directory** | `dist` | Path to production assets |
| **Environment Variable** | `NODE_VERSION=20` | Guarantees compatibility with Node 20 LTS |

1. **`wrangler.jsonc`**: Native SPA asset configuration (`"not_found_handling": "single-page-application"`).
2. **`public/_headers`**: Controls CSP & edge security headers.
3. **`public/_redirects`**: Custom 301/302 rules (do NOT put `/* /index.html 200` to avoid Cloudflare code `100324` loop errors).
4. **`CLOUDFLARE.md`**: Refer to [`CLOUDFLARE.md`](CLOUDFLARE.md) for complete deployment reference (`wrangler.jsonc`, `public/_headers`, & `200.html`).


