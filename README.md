# ARC — Landing Page

Marketing site for **ARC (Adaptive Reality Core)**, a voice-controlled AI assistant for the desktop.
The assistant itself lives in [ARC Remote](https://github.com/Jpr-2311/ARC-REMOTE-DA); this repository is only the website.

## Sections

| Section | Content |
| --- | --- |
| Hero | Animated canvas background (dot grid and scan line) and live-status chips |
| About | Origin of the project and its core components |
| Features | Intent router, second brain, voice execution, voice authentication, vision |
| How it works | Step-by-step flow of a voice command |
| Tech stack | Components of the assistant, grouped by layer |
| Team, Contact, Footer | Team cards with photos, contact details |
| Chat widget | Floating chat panel with suggested questions |

## Tech stack

React 19, Vite, GSAP (`@gsap/react`) and Framer Motion for animation, plain CSS per component.

## Run it

```bash
npm install
npm run dev        # development server
npm run build      # production build in dist/
npm run preview    # serve the production build
```

No environment variables are needed.

## Project layout

```text
src/
  App.jsx            page composition
  animations.js      shared GSAP animations
  components/        Hero, About, Features, HowItWorks, TechStack, Team, Contact, Footer, Navbar, ChatBot
  assets/            logo and team photos
```

## Known limits

- The chat widget calls the Anthropic Messages API directly from the browser without credentials, so it shows its
  fallback message. A working chat needs a small server-side proxy that holds the API key. Never put the key in
  frontend code or in a `VITE_` variable, because Vite bundles those into the public JavaScript.

## Team

S. Aariyan (founder), Jithin P R (co-founder), Laasya U G (marketing lead), Shivani S (lead hardware engineer).
