# Poppin Mind Frontend

A responsive, bilingual React frontend for the Poppin Mind coaching and brief therapy website. The app presents company information, service pages, pricing, and a contact form, while pulling service-related content from the backend API so the main offering pages can be updated from MongoDB without changing frontend code.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How the Frontend Works](#how-the-frontend-works)
- [API and Data Contract](#api-and-data-contract)
- [Editing Content](#editing-content)
- [Contact Form Setup](#contact-form-setup)
- [Styling and Theme](#styling-and-theme)
- [Build and Deployment](#build-and-deployment)
- [Quality Checklist Before Launch](#quality-checklist-before-launch)
- [Troubleshooting](#troubleshooting)

---

## Overview

The frontend is a Vite-powered React single-page application. It uses React Router for client-side pages, Axios for backend API requests, and a custom language context for English/Finnish language switching.

The website has two kinds of content:

1. **Static frontend copy** stored directly in React page components, such as hero text, FAQ text, and CTA copy.
2. **Dynamic content** fetched from the backend API, such as service cards, individual service pages, pricing plans, and qualifications.

This split keeps the site easy to maintain: general page copy can be changed in the frontend, while frequently updated business/service content can be managed through the database.

---

## Tech Stack

- **React** — UI component framework
- **Vite** — development server and production build tool
- **React Router DOM** — client-side routing
- **Axios** — API requests to the backend
- **CSS custom properties** — global theme, spacing, colors, and typography
- **Web3Forms** — contact form submission service

Current package lock expects a modern Node runtime because the resolved Vite and React Router versions require Node 20+.

---

## Key Features

- Fully responsive layout for desktop, tablet, and mobile screens
- English/Finnish language toggle with language persisted in `localStorage`
- Dynamic service cards loaded from `/api/services/links`
- Dynamic individual service pages loaded by URL path from `/api/services/:path`
- Dynamic pricing cards loaded from `/api/prices`
- Dynamic qualification list loaded from `/api/qualifications`
- Contact form integrated with Web3Forms
- Shared layout with fixed navigation, footer, page heroes, CTAs, and reusable content blocks
- Warm, organic visual design using earth-tone CSS variables and soft animation

---

## Project Structure

```text
frontend/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── ContactBanner.jsx
    │   ├── Footer.jsx
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   ├── PageHero.jsx
    │   └── ServiceLinks.jsx
    ├── context/
    │   └── LanguageContext.jsx
    ├── pages/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Home.jsx
    │   ├── NotFound.jsx
    │   ├── Pricing.jsx
    │   ├── Services.jsx
    │   └── Service/
    │       ├── index.jsx
    │       └── components/
    │           ├── ContentBlock.jsx
    │           ├── ContentBlockReverse.jsx
    │           └── ContentList.jsx
    ├── services/
    │   ├── prices.js
    │   ├── qualifications.js
    │   └── services.js
    └── styles/
        └── global.css
```

---

## Requirements

Install these before running the frontend:

- **Node.js 20.19+ or 22.12+ recommended**
- **npm**
- Running backend API for full functionality
- MongoDB data available through the backend for service links, services, prices, and qualifications

The frontend can start without the backend, but API-driven sections will be empty or show fallback/error states.

---

## Getting Started

From the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local Vite URL in your browser:

```text
http://localhost:5173
```

For the complete site experience, run the backend in a second terminal:

```bash
cd backend
npm install
npm run dev
```

The Vite development server proxies API requests from `/api` to:

```text
http://localhost:3000
```

This proxy is configured in `frontend/vite.config.js`.

---

## Available Scripts

Run these commands from the `frontend/` directory.

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production build in `frontend/dist/`. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run build:ui` | Runs the backend build-copy workflow from the frontend directory. |

> Note: the backend `build:ui` script currently uses PowerShell commands. On macOS/Linux, run `npm run build` in `frontend/` and manually copy the generated `dist/` folder into `backend/dist/`, or update the backend build script to use cross-platform commands.

---

## How the Frontend Works

### Application Entry

`src/main.jsx` mounts the React app into `#root` and wraps it with `LanguageProvider`.

```jsx
<LanguageProvider>
  <App />
</LanguageProvider>
```

### Routing

Routes are defined in `src/App.jsx` using `react-router-dom`.

| Route | Component | Purpose |
|---|---|---|
| `/` | `Home` | Homepage with service cards and CTA sections. |
| `/about` | `About` | Founder background and dynamic qualifications. |
| `/services` | `Services` | Services overview page. |
| `/services/:path` | `Service` | Dynamic service detail page based on the URL path. |
| `/pricing` | `Pricing` | Dynamic pricing plans and FAQ. |
| `/contact` | `Contact` | Contact form and contact information. |
| `*` | `NotFound` | 404 fallback page. |

All pages render inside the shared `Layout`, which includes the navigation bar, main page outlet, and footer.

### Language System

Language state is managed by `src/context/LanguageContext.jsx`.

Supported languages:

```js
['en', 'fi']
```

The current language is stored in:

```text
localStorage['poppin-mind-language']
```

The provider also updates the document language attribute:

```html
<html lang="fi">
```

Most page components use this pattern:

```jsx
const { language } = useLanguage()
const t = content[language]
```

Dynamic API documents are also expected to contain matching `en` and `fi` content objects.

### API Service Layer

API calls are grouped in `src/services/`:

| File | Backend endpoint | Used by |
|---|---|---|
| `serviceLinks.js` | `/api/serviceLinks` | Home, Services, Footer, Contact service dropdown |
| `services.js` | `/api/services`, `/api/services/:path` | Individual service pages |
| `prices.js` | `/api/prices` | Pricing page |
| `qualifications.js` | `/api/qualifications` | About page |

The frontend uses relative `/api/...` URLs so it works cleanly when served from the same origin as the Express backend.

---

## API and Data Contract

The frontend expects the backend to return JSON with the following shapes.

### Services

Used by the dynamic service detail page, Home, About and Footer.

```json
{
  "id": "string",
  "path": "neuropsychiatric-coaching",
  "link": {
    "icon": "🧠",
    "en": {
      "title": "Neuropsychiatric coaching",
      "summary": "Build mental resilience, develop focus, and cultivate a mindset that supports your goals."
    },
    "fi": {
      "title": "Neuropsykiatrinen valmennus",
      "summary": "Rakenna resilienssiä, itseluottamusta ja mielen selkeyttä tukevassa ja tavoitteellisessa prosessissa."
    }
  },
  "content": {
    "en": {
      "title": "Neuropsychiatric coaching",
      "subtitle":"Build resilience, confidence, and mental clarity through a supportive and goal-oriented process.",
      "what": {
        "icon": "🧠",
        "title": "What is neuropsychiatric coaching?",
        "p1": "Neuropsychiatric coaching helps you strengthen the mindset and habits that support performance, wellbeing, and everyday life. It can help with confidence, motivation, focus, and emotional resilience.",
        "p2": "Sessions are practical, reflective, and tailored to you. Together, we identify what is getting in your way and what will move you forward.",
        "list": []
      },
      "how": {
        "icon": "⚡",
        "title": "What can it help with?",
        "p1": "",
        "p2": "",
        "list": [
              "Building confidence and self-belief",
              "Managing stress and pressure",
              "Improving focus and motivation",
              "Strengthening emotional resilience",
              "Preparing for change or challenges"
              ]
      },
      "who": {
        "icon": "🌟",
        "title": "Who is it for?",
        "p1": "Neuropsychiatric coaching is for anyone who wants support in developing their inner resources. Whether you are facing a demanding season, striving toward a goal, or simply wanting to feel stronger and clearer, this approach can help.",
        "p2": "It is suitable for individuals, students, professionals, and anyone seeking practical, supportive growth.",
        "list": []
      },
      "contactBannerTitle": "Ready to strengthen your mindset?",
      "contactBannerText": "Let us talk about what support would be most helpful for you.",
      "contactBannerButton": "Book a Session"
    },
    "fi": {
      "title": "Neuropsykiatrinen valmennus",
      "subtitle": "Vahvista henkistä resilienssiäsi, kehitä keskittymistäsi ja rakenna ajattelutapaa, joka tukee tavoitteitasi.",  
    }
  }
}
```

The `fi` object should mirror the full structure of the `en` object.

### Prices

Used by the pricing cards.

```json
{
  "id": "string",
  "price": "50",
  "time": "45",
  "outline": "primary",
  "en": {
    "title": "Online Session",
    "subtitle": "Short description.",
    "features": ["Feature one", "Feature two"],
    "button": "Book Online Session"
  },
  "fi": {
    "title": "Etätapaaminen",
    "subtitle": "Lyhyt kuvaus.",
    "features": ["Ominaisuus yksi", "Ominaisuus kaksi"],
    "button": "Varaa etätapaaminen"
  }
}
```

Frontend behavior:

- `price: "0"` displays as `Free` in English and `Maksuton` in Finnish.
- `outline: "primary"` highlights the pricing card.
- `time` is displayed as the session duration.

### Qualifications

Used on the About page.

```json
{
  "id": "string",
  "icon": "🎓",
  "en": {
    "title": "Qualification title",
    "text": "Qualification description."
  },
  "fi": {
    "title": "Pätevyyden otsikko",
    "text": "Pätevyyden kuvaus."
  }
}
```

---

## Editing Content

### Static Page Copy

Static copy is stored inside `content` objects in each page file.

| Page | File |
|---|---|
| Homepage | `src/pages/Home.jsx` |
| About page | `src/pages/About.jsx` |
| Services overview | `src/pages/Services.jsx` |
| Pricing FAQ and page headings | `src/pages/Pricing.jsx` |
| Contact page text | `src/pages/Contact.jsx` |
| 404 page | `src/pages/NotFound.jsx` |

When editing text, update both language objects:

```js
en: { ... }
fi: { ... }
```

### Dynamic Service Content

Service cards and service detail pages are not hard-coded as separate React pages. Add or edit services through the backend/database instead.

To add a new service:

1. Add a new `services` document.
2. Include `path` value.
3. Include both `en` and `fi` content.

The frontend will automatically create links to:

```text
/services/new-service
```

---

## Contact Form Setup

The contact form in `src/pages/Contact.jsx` submits to Web3Forms:

```js
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: formData
})
```

Before launch, replace the placeholder access key:

```jsx
formData.append("access_key", /*ACCESS_KEY_HERE*/)
```

with your actual Web3Forms access key as a string:

```jsx
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY")
```

Also replace the placeholder email shown on the contact page:

```jsx
<p>info@example.com</p>
```

Important security note: anything placed in frontend code is visible in the browser. Only use Web3Forms keys intended for client-side use. Do not put private API secrets in this React app.

---

## Styling and Theme

All global styling lives in:

```text
src/styles/global.css
```

The visual theme is controlled through CSS variables at the top of the file:

```css
:root {
  --sage: #8fa68b;
  --cream: #faf6f0;
  --clay: #c4a882;
  --bark: #5c4a3a;
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body: 'Nunito', -apple-system, sans-serif;
}
```

The design system includes:

- Earth-toned color palette
- Rounded buttons and cards
- Responsive layout utilities
- Reusable page sections
- Fade-in animation classes
- Mobile navigation styles
- Pricing, contact, service, CTA, footer, and qualification components

Fonts are loaded in `index.html` from Google Fonts:

- **DM Serif Display** for headings
- **Nunito** for body text

---

## Build and Deployment

### Build Frontend Only

From `frontend/`:

```bash
npm run build
```

The production files are created in:

```text
frontend/dist/
```

Preview the production build locally:

```bash
npm run preview
```

### Deploy With the Express Backend

The backend is configured to serve static files from its own `dist/` directory. The deployment flow is:

1. Build the frontend.
2. Copy `frontend/dist/` into `backend/dist/`.
3. Start the backend in production.

Manual cross-platform version:

```bash
cd frontend
npm run build

# then copy frontend/dist to backend/dist
```

Windows/PowerShell project script:

```bash
cd frontend
npm run build:ui
```

Then start the backend:

```bash
cd ../backend
npm run start
```

### Static Hosting Note

The frontend currently calls relative `/api/...` endpoints. If deploying the frontend separately to a static host such as Netlify or Vercel, configure API rewrites/proxies to the backend or update the service files to use an environment-based API base URL.

---

## Quality Checklist Before Launch

- [ ] Replace `ACCESS_KEY_HERE` in `src/pages/Contact.jsx` with the Web3Forms access key.
- [ ] Replace `info@example.com` with the real business email address.
- [ ] Confirm the backend is running and serving `/api/services`, `/api/prices`, and `/api/qualifications`.
- [ ] Confirm MongoDB documents include both `en` and `fi` content.
- [ ] Confirm every service link has a matching service document with the same `path`.
- [ ] Confirm pricing documents include `price`, `time`, and `outline` if card highlighting/duration is required.
- [ ] Test language switching and refresh persistence.
- [ ] Test mobile navigation.
- [ ] Test direct visits to nested routes such as `/services/example-service` after deployment.
- [ ] Test contact form success and error states.
- [ ] Run a production build and preview it before publishing.

---

## Troubleshooting

### API content does not appear

Check that the backend is running on port `3000` in development and that Vite is running on port `5173`. The frontend dev server proxies `/api` requests to `http://localhost:3000`.

### Service cards show an error message

`ServiceLinks.jsx` shows a fallback message when no service links are available. Check `/api/services/links` and confirm the database contains service link fields.

### A service detail page shows 404

Confirm that the URL path matches a service document in MongoDB:

```text
/services/neuropsychiatric-coaching
```

must match:

```json
{ "path": "neuropsychiatric-coaching" }
```

### Contact form does not submit

Check that the Web3Forms access key has been added as a string in `Contact.jsx`. Also confirm the request to `https://api.web3forms.com/submit` succeeds in the browser network tab.

### Pricing duration or featured outline does not display correctly

The pricing page expects `time` and `outline` fields on each price document. Make sure those fields are returned by the backend API.

### Production nested routes return 404 on refresh

The React app uses client-side routing. The production server must serve `index.html` for frontend routes such as `/about`, `/pricing`, and `/services/:path`. The included Express backend already contains static route fallbacks for these paths.

---

## Maintainer Notes

This frontend is designed to be simple and content-focused. Most improvements should preserve the existing pattern:

- Keep reusable layout pieces in `src/components/`.
- Keep page-specific content in `src/pages/`.
- Keep API access in `src/services/`.
- Keep bilingual content consistently shaped with `en` and `fi` objects.
- Keep global design tokens in `src/styles/global.css`.

