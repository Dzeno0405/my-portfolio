# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This monorepo contains four independent React projects:

- **`react-portfolio/`** — Personal portfolio site (Create React App, React 19, React Router DOM v7)
- **`keyboard-app/`** — Virtual keyboard web app (Vite, React 18, deployed at dzeno-keyboard.netlify.app)
- **`rendzeri/`** — ASK Rendzeri airsoft club site (Vite, React 18, deployed at askrendzeri.netlify.app)
- **`email-classifier-ui/`** — Email classifier & auto-responder UI (Vite, React 19, MUI v7, connects to a FastAPI backend)

Each project has its own `node_modules`, `package.json`, and must be run independently.

## Commands

All commands must be run from within the specific project directory.

### react-portfolio (CRA)
```bash
cd react-portfolio
npm start        # dev server
npm run build    # production build
npm test         # run tests
```

### keyboard-app / rendzeri / email-classifier-ui (Vite)
```bash
cd keyboard-app   # or: cd rendzeri / email-classifier-ui
npm run dev       # dev server
npm run build     # production build
npm run lint      # ESLint
npm run preview   # preview production build
```

`email-classifier-ui` requires a `VITE_API_BASE` env variable pointing to the FastAPI backend (typically an ngrok URL). Create a `.env` file in `email-classifier-ui/` with:
```
VITE_API_BASE=https://<your-ngrok-id>.ngrok-free.app
```

## Architecture

### react-portfolio
- Entry: `src/index.js` → `src/App.js`
- Routing: React Router v7, routes defined in `App.js`. Pages: `/`, `/about`, `/skills`, `/future`, `/projects`, `/socials` (note: `/socials` is currently a stub placeholder)
- Homepage (`/`) renders `Profile` + `Info` stacked together; all other routes are single-component pages
- All styling lives in a single file: `src/index.css` — sections are clearly delimited with comments (NAVBAR, PROFILE, ABOUT, SKILLS, FOOTER, PROJECTS, etc.)
- Components are in `src/components/` and are page-level (one per route), plus shared `Navbar` and `Footer`
- Icon libraries: `react-icons` and `@fortawesome/react-fontawesome` (brands pack)
- `Projects.jsx` links out to the sub-projects (keyboard-app and rendzeri) by their Netlify URLs
- Background logo watermark rendered via `.app-background` in `App.js`, served from `public/logo.png`
- CV download served from `public/Dzenan_Polutak_CV.docx`

### keyboard-app
- Entry: `src/main.jsx` → `src/App.jsx`
- Core logic in `App.jsx`: manages text state, cursor position via `useRef`, handles both physical keyboard (`keydown` events) and virtual key presses
- Orientation detection: shows virtual `Keyboard` component only in landscape mode; in portrait mode shows a rotation prompt
- Components: `TextDisplay`, `Keyboard`, `TextBoxList`, `Footer`

### rendzeri
- Entry: `src/main.jsx` → `src/App.jsx`
- Routing: React Router v7 with `CSSTransition`/`TransitionGroup` for page fade animations
- Pages (Bosnian): Home, `/onama` (about), `/aktivnosti` (activities), `/slike` (images/gallery), `/kontakt` (contact)
- Contact form uses EmailJS (`@emailjs/browser`) — credentials stored in `.env` (not committed)
- Gallery uses `swiper` for slideshows and `react-window` for virtualized image lists
- Hamburger menu for mobile navigation built into `App.jsx`

### email-classifier-ui
- Entry: `src/main.jsx` → `src/App.jsx`
- Single-page app: no routing. All logic lives in `App.jsx`
- User pastes emails (separated by blank lines); each is sent sequentially to `POST /classify` on the FastAPI backend
- Backend URL is set via `VITE_API_BASE` env var; health can be checked with `GET /healthz` via the "Ping API" button
- Response shape: `{ email, category, auto_response }` — categories are `Support`, `Sales`, or `Feedback`
- Includes an editable cost estimator (classify + generate cost per email) displayed as a running total
- Uses MUI v7 (`@mui/material`) for all UI — no custom CSS beyond `index.css` global reset

## Styling Approach

- **react-portfolio**: Single global CSS file (`src/index.css`). Dark space theme: `radial-gradient(circle, #1b2735, #090a0f)` body, accent color `#03a9f4`. Poppins is the primary font.
- **keyboard-app**: Component-level CSS files alongside components, plus `src/index.css` for global resets.
- **rendzeri**: CSS files live in `src/style/` (one per component: `Activities.css`, `Contact.css`, `Images.css`, `Info.css`), plus `src/App.css` and `src/index.css`.
- **email-classifier-ui**: Uses MUI v7 (Material UI) with Emotion for all styling — no custom CSS files beyond a global reset.
- No CSS framework or preprocessor is used in `react-portfolio`, `keyboard-app`, or `rendzeri` — plain CSS only.
