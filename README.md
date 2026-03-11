# Popping Mind — Website

Welcome to your new website! This document explains how to get the site running and make updates.

---

## Getting Started

### What You'll Need

- **Node.js** (version 16 or higher) — [Download here](https://nodejs.org/)
- **npm** (included with Node.js)

### Running the Website Locally

1. Unzip the downloaded file and open a terminal in the project folder:

   ```bash
   cd popping-mind
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open **http://localhost:5173** in your browser to view the site.

---

## Making Changes

### Updating Text

All page content is located in the `src/pages/` folder. Open any file to update the text directly:

- `Home.jsx` — Homepage
- `About.jsx` — About page
- `Services.jsx` — Services overview
- `MentalCoaching.jsx` — Mental Coaching service
- `SolutionFocusedCoaching.jsx` — Solution-Focused Coaching service
- `SolutionFocusedBriefTherapy.jsx` — Solution-Focused Brief Therapy service
- `AnimalAssistedCoaching.jsx` — Animal-Assisted Coaching service
- `Pricing.jsx` — Pricing information
- `Contact.jsx` — Contact page

### Updating Colors & Styling

All styles are in `src/styles/global.css`. The colors, fonts, and spacing are controlled by variables at the top of the file, making it easy to adjust the look and feel of the entire site.

### Updating Navigation

To change menu links, edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`.

### Contact Form

The contact form is currently a front-end demo. To receive form submissions, you'll need to connect it to a service such as Formspree, Netlify Forms, or a custom backend.

---

## Publishing the Website

When you're ready to go live, run:

```bash
npm run build
```

This creates a `dist/` folder containing optimised files ready for deployment. The site can be hosted on platforms like Netlify, Vercel, or any static web host.

---

## Fonts

The website uses **DM Serif Display** for headings and **Nunito** for body text, both loaded from Google Fonts.

---

If you have any questions or need further assistance, feel free to reach out!
