# CareerBoard — High-Impact Recruitment & Job Search Platform

**CareerBoard** is an enterprise-grade, responsive job-search and career exploration web platform built entirely with **Vanilla HTML5, CSS3, and Modern JavaScript (ES6+)**. The platform operates completely client-side using realistic mock job records and `localStorage` persistence with zero external libraries or framework dependencies.

---

## 1. Project Overview

Finding high-impact roles in software engineering, product management, systems architecture, and UX design often suffers from fragmented job boards, hidden salary ranges, non-transparent application forms, and clunky interfaces.

**CareerBoard** delivers an intuitive, fast, and transparent recruitment platform featuring upfront base compensation, rich company metadata, granular multi-faceted search filters, and a seamless 4-step job application experience with live preview and local receipt tracking.

---

## 2. Problem the Interface Solves

1. **Information Asymmetry**: Unclear job compensation and buried requirements. CareerBoard features upfront salary tags, equity details, verified company badges, and structured benefit breakdowns.
2. **Slow, Opaque Search**: Traditional portals require tedious full-page reloads. CareerBoard provides debounced multi-criteria filtering (keyword, location, work mode, experience, minimum salary, employment type, tech stack chips) that combine instantly without latency.
3. **Application Anxiety**: Many portals obscure what data was submitted or fail to provide submission confirmation. CareerBoard includes a live preview card before final transmission, simulated file upload validation, and generated receipt reference numbers stored locally for tracking.
4. **Session Loss**: Searches, bookmarks, and draft applications are often lost upon refresh. CareerBoard seamlessly syncs state between URL search parameters and `localStorage`.

---

## 3. Selected Tech Stack & Rationale

| Technology | Purpose | Rationale |
| :--- | :--- | :--- |
| **Vanilla HTML5** | Semantic Structure | Maximum accessibility, native keyboard navigation, zero build overhead, and fast first-contentful paint (FCP). |
| **Vanilla CSS3** | Design System & Styling | Modern CSS custom properties (variables), Flexbox, CSS Grid, glassmorphism, fluid typography (`clamp()`), and responsive media queries. |
| **Vanilla JavaScript (ES6+)** | Dynamic Logic | Pure modular JavaScript without framework overhead; native DOM APIs, custom events for decoupled pub/sub state, and URL search param synchronization. |
| **`localStorage` API** | Client-Side Persistence | Stores saved bookmarks (`careerboard_saved_jobs`) and submitted application history (`careerboard_applications`) across sessions and tabs. |

---

## 4. Exact Installation & Run Commands

CareerBoard is a zero-dependency web application that requires no `npm install`, compilation, or build step. It runs on any modern web browser or lightweight HTTP server.

### Option A: Using Python (Recommended)
```bash
# Navigate to the workspace directory
cd /path/to/careerboard-frontend

# Start Python 3 HTTP server on port 3000
python3 -m http.server 3000
```
Open your browser at: **`http://localhost:3000`**

### Option B: Using Node.js `npx serve` or `http-server`
```bash
# Run lightweight static server directly
npx -y serve . -l 3000
```
Open your browser at: **`http://localhost:3000`**

### Option C: Direct File Access
You can double-click `index.html` or open it directly in Google Chrome, Firefox, Safari, or Microsoft Edge.

---

## 5. Feature Checklist

### Job Search Dashboard (`index.html`)
- [x] Responsive sticky header with CareerBoard branding and live counter badges.
- [x] Dual-input hero search bar (Keyword + Location) with instant clear buttons.
- [x] Quick-search trending tags (Remote, React, TypeScript, Python, Design Systems, Staff).
- [x] 26 realistic local job records across Engineering, AI, Design, Infrastructure, and Product.
- [x] Rich job cards with company avatar initials, salary badge, work mode pill, location, experience level, skill tags, and time ago.
- [x] Combined multi-faceted filtering:
  - Work Mode (Remote, Hybrid, On-site)
  - Experience Level (Entry-level, Mid-level, Senior, Staff/Lead, Executive)
  - Minimum Salary Range Slider ($0 to $250k+)
  - Employment Type (Full-time, Contract, Part-time, Internship)
  - Interactive Technology & Skill chips cloud
- [x] Sorting dropdown (Relevance, Newest first, Salary: High to Low, Salary: Low to High).
- [x] Live result count display and dynamic filter item counts.
- [x] Active filter pills bar with 1-click individual removal and "Clear All" reset.
- [x] Friendly empty/no-results state with illustrations and reset action.
- [x] Responsive mobile filter drawer with backdrop dismissal.
- [x] Instant bookmarking (Save / Unsave) with micro-animation and toast alerts.
- [x] Dedicated "Saved Roles" tab and saved view.
- [x] Submitted Applications drawer modal with reference codes.
- [x] URL search parameter synchronization for shareable search states.
- [x] Keyboard shortcuts (`/` for search, `Esc` to close modals, `Alt + S` for saved view).

### Job Details & Application Flow (`job.html`)
- [x] Deep link support (`job.html?id=job-1`) with graceful 404 fallback.
- [x] Sticky top navigation with back-to-search button and quick action triggers.
- [x] Comprehensive role mission overview and company metadata.
- [x] Structured responsibilities and requirements lists with icons.
- [x] Tech stack chips linking back to filtered searches.
- [x] Structured benefits & perks card grid with thematic SVG icons.
- [x] About the Company statistics card (size, industry, founded, website).
- [x] Sticky action sidebar with compensation breakdown and similar jobs recommendation engine.
- [x] Bookmark toggle synced with dashboard and `localStorage`.
- [x] "Share Position" button with clipboard copy and toast notification.
- [x] Multi-Step Application Modal Wizard:
  - **Step 1 (Contact Info)**: Full Name, Email, Phone, Portfolio, Experience, Notice Period with real-time validation.
  - **Step 2 (Resume & Note)**: Drag-and-drop resume upload simulator (validates `.pdf`, `.doc`, `.docx` <= 5MB, displays filename & size, does not upload files), live character counter on cover note (min 20 chars).
  - **Step 3 (Executive Preview)**: Structured preview card of all candidate inputs and certification checkbox before submission.
  - **Step 4 (Success Receipt)**: Loading animation spinner, unique reference code generator (e.g., `CB-2026-89412`), copy reference button, and next steps timeline.
- [x] "Already Applied" status banner preventing duplicate confusion and allowing receipt retrieval.

---

## 6. Folder Structure & Architecture

```
careerboard-frontend/
├── .gitignore              # Repository exclusions (build files, logs, environment files)
├── README.md               # Complete platform documentation and architectural guide
├── index.html              # Job search dashboard and filtering layout
├── job.html                # Job details page and multi-step application modal
├── styles.css              # Unified responsive design system and CSS custom properties
├── data.js                 # 26 realistic job records, DataService, and StorageService
├── app.js                  # Dashboard controller (search, multifaceted filters, URL sync)
└── job.js                  # Job details controller (wizard, validation, submission simulator)
```

### Architectural Separation
- **Data Layer (`data.js`)**: Pure data structures and storage services. Contains `JOB_DATA`, `DataService` for queries, and `StorageService` for `localStorage` I/O.
- **Presentation Layer (`styles.css`, `index.html`, `job.html`)**: Semantic markup, ARIA roles, and a CSS variable design system.
- **Controller Layer (`app.js`, `job.js`)**: Encapsulated IIFE controllers managing event delegation, input debouncing, real-time validation, and UI re-rendering.

---

## 7. State Management & LocalStorage Approach

All persistent application state is stored locally within the browser:

1. **`careerboard_saved_jobs`**:
   - Array of job ID strings: `["job-1", "job-3", "job-14"]`
   - Synchronized across cards, details page, navigation badges, and browser tabs via custom window events (`careerboard:saved_updated`) and native `storage` events.
2. **`careerboard_applications`**:
   - Array of application objects:
     ```json
     [
       {
         "jobId": "job-1",
         "jobTitle": "Senior Full-Stack Engineer",
         "company": "Stripe",
         "applicant": {
           "name": "Alex Morgan",
           "email": "alex.morgan@example.com",
           "phone": "+1 555-019-2834",
           "portfolio": "https://github.com/alex",
           "noticePeriod": "2 Weeks",
           "experienceYears": "5-7 years",
           "resumeFileName": "Alex_Morgan_Resume_2026.pdf",
           "coverNote": "Passionate full-stack engineer with 6 years experience scaling distributed payments infrastructure."
         },
         "referenceNumber": "CB-2026-48291",
         "appliedAt": "2026-09-05T12:00:00.000Z",
         "status": "Under Review"
       }
     ]
     ```
3. **URL State Synchronization**:
   - Filter state maps dynamically to URL parameters (`?q=React&loc=Remote&workMode=remote&salary=140000&sort=newest`).
   - Enables native browser back/forward navigation, link sharing, and bookmarking.

---

## 8. Responsive & Accessibility (a11y) Decisions

- **Semantic HTML**: Proper `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`, and `<footer>` elements.
- **WCAG 2.1 AA Contrast**: High-contrast color choices meeting standard 4.5:1 ratio for normal text.
- **Focus Indicators**: Dedicated `:focus-visible` ring (`outline: 2px solid var(--primary); outline-offset: 2px;`) across all interactive elements.
- **Form Labels & Error States**: All form fields include explicit `<label>` bindings, helper text, and accessible `.form-error-msg` containers linked with `aria-invalid` and `aria-live`.
- **Keyboard Navigation**:
  - Full tab stop sequence for all buttons, inputs, chips, and modal dialogs.
  - `/` shortcut focuses the search input.
  - `Escape` dismisses modals and mobile drawers.
  - `Alt + S` toggles saved jobs view.
- **Motion Accessibility**: `@media (prefers-reduced-motion: reduce)` disables non-essential animations for users with vestibular sensitivities.
- **Responsive Layouts**: Breakpoints at `640px` (mobile), `768px` (tablet), `1024px` (laptop), and `1280px` (desktop).

---

## 9. Known Limitations & Trade-offs

1. **Client-Side Storage**: Data is scoped to the user's current browser and device via `localStorage`. Clearing browser data resets saved jobs and application receipts.
2. **Resume Upload Simulation**: As specified, files are validated locally for size and extension, but binary contents are not uploaded to an external server; only the validated filename and size are recorded.
3. **Static Mock Dataset**: Job postings are statically defined in `data.js` rather than fetched from an external REST API or database.

---

## 10. Instructions for Taking & Adding Screenshots

To capture clean presentation screenshots for submissions or portfolios:

### Desktop Screenshot (1440x900 or 1920x1080)
1. Start the local server (`python3 -m http.server 3000`).
2. Open Google Chrome at `http://localhost:3000`.
3. Press `F12` to open Chrome DevTools.
4. Press `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux).
5. Type `Capture full size screenshot` or `Capture screenshot`.
6. Save the resulting image as `assets/screenshot-desktop.png`.

### Mobile Screenshot (375x812 iPhone / Pixel)
1. In DevTools, click the **Toggle Device Toolbar** icon (`Cmd + Shift + M` / `Ctrl + Shift + M`).
2. Select **iPhone 14 Pro** or **Pixel 7** viewport.
3. Open the Mobile Filter drawer to capture the responsive filter UI.
4. Use DevTools command menu -> `Capture screenshot`.
5. Save the resulting image as `assets/screenshot-mobile.png`.

---

## 11. Author & License

- **Project**: CareerBoard Frontend Recruitment Platform
- **License**: MIT Open Source
- **Developed for**: CareerBoard Frontend Engineering Assignment
