# Popping Mind — Website

A professional website for **Popping Mind**, a coaching and solution-focused brief therapy practice.

Built with **React 18**, **Vite**, and **React Router v6**.

---

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher) — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)


   ```bash
   cd popping-mind
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open **http://localhost:5173** in your browser.



## Project Structure

```
popping-mind/
├── index.html              ← Entry HTML file
├── package.json            ← Dependencies & scripts
├── vite.config.js          ← Vite configuration
├── README.md               ← You are here
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Router & routes
    ├── styles/
    │   └── global.css      ← All styles
    ├── components/
    │   ├── Layout.jsx      ← Shared layout (nav + footer)
    │   ├── Navbar.jsx      ← Navigation bar
    │   └── Footer.jsx      ← Footer
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── MentalCoaching.jsx
        ├── SolutionFocusedCoaching.jsx
        ├── SolutionFocusedBriefTherapy.jsx
        ├── AnimalAssistedCoaching.jsx
        ├── Pricing.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

---

## How to Edit Content

- **Text & copy:** Open any file in `src/pages/` and edit the text directly.
- **Styling:** All CSS is in `src/styles/global.css`. Colors, fonts, and spacing are controlled by CSS variables at the top of the file.
- **Navigation links:** Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`.
- **Pricing:** Edit `src/pages/Pricing.jsx` to update prices, durations, or features.
- **Contact form:** The form in `src/pages/Contact.jsx` is a front-end demo. To make it functional, integrate a service like Formspree, Netlify Forms, or a custom backend.

---

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimised static files ready for deployment (Netlify, Vercel, any static host).

---

## Fonts

The site uses **DM Serif Display** (headings) and **Nunito** (body) from Google Fonts. These are loaded via the `<link>` tag in `index.html`.

---

## License

This project is built for the Popping Mind business. Modify and use freely.
