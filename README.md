# Dose Buddy

MediTrack — Master Build Prompt

Use this single prompt in Lovable, Claude, or any AI app builder to generate the complete MediTrack project in one go.

Problem statement

Many people — especially elderly people and patients on multiple medications — forget when to take their medicines or accidentally skip a dose. Missed or mistimed doses can worsen chronic conditions like diabetes, hypertension, and thyroid disorders, and are a common reason for hospital readmission among older adults. Family members and caregivers also have no easy way to check whether a loved one has taken their medicine for the day.

Build MediTrack — a simple, friendly React.js web app that helps people organize their daily medicine schedule, see clear reminders for each dose, and track with one tap whether it's been taken — so nothing gets missed and caregivers can see adherence at a glance.

Target users

Elderly patients managing 3–8 medicines a day, often with poor eyesight or low tech confidence — so the UI must use large touch targets, high-contrast colors, and simple language, not clinical jargon.

Patients recovering from illness or managing chronic conditions who need a routine.

Family caregivers who want a quick visual check of "has this been taken today."

Tech constraints

React.js only — plain Create React App (react + react-dom), no UI component libraries, no backend required for v1 (in-memory React state is fine).

Component-based structure, one responsibility per file.

Fully responsive — must work as well on a phone as a desktop.

Required screens & flows

1. Splash / logo screen (first thing the user sees)

Full-screen branded welcome screen, dark teal-to-blue gradient background with soft glow accents.

App logo: a rounded gradient square containing a capsule/pill shape with a heartbeat line through it.

Wordmark "MediTrack" (Medi in white, Track in a light accent color).

Tagline: "Never miss a dose, ever again."

One short sentence explaining what the app does, in plain language.

Three small feature highlights with icons: Timely reminders, One-tap tracking, Daily adherence.

A single primary button: "Get Started →" that takes the user into the dashboard.

2. Dashboard (main screen, after Get Started)

Header: logo (smaller), a time-of-day greeting ("Good morning, Rajesh"), today's date, and a prominent "+ Add Medicine" button.

Adherence ring: a circular progress ring showing the % of today's doses already taken, with the percentage in the center.

Stat cards (grid of 4, each color-coded): Total doses today, Taken, Upcoming, Missed — each with an icon and a colored left border.

Today's schedule: medicines grouped under Morning / Afternoon / Evening / Night headings. Each medicine is a card showing:

name, dosage, and condition it treats (e.g. "Metformin · 500mg · Diabetes")

scheduled time with a clock icon

a color-coded status badge: Taken (green) / Missed (red) / Upcoming (amber)

a "Mark as taken" button that toggles the dose's status live and instantly updates the ring and stat cards

Load the dashboard with a realistic randomly generated sample schedule (draw from common real-world medicines: Metformin, Amlodipine, Atorvastatin, Levothyroxine, Omeprazole, Losartan, Vitamin D3, Aspirin) so the app never looks empty on first run.

3. Add Medicine modal

Opens over the dashboard without navigating away.

Fields: medicine name (required), dosage, condition/reason, time of day (dropdown: Morning 8:00 AM / Afternoon 1:30 PM / Evening 7:00 PM / Night 10:00 PM).

"Save reminder" adds it immediately to the correct time-of-day group on the dashboard, in "Upcoming" status.

"Cancel" closes without saving.

Visual design direction

Palette: teal #14C7BE and blue #3D7DF6 as the primary gradient (logo, buttons, ring), plus semantic colors — green #22C08D for taken, red/coral #FF6B6B for missed, amber #FFB020 for upcoming, violet #8B5CF6 as a secondary accent.

Typography: "Poppins" (weight 600–800) for headings/logo, "Inter" for body text.

Soft light-lavender/blue background (#EFF3FB) behind white rounded cards with subtle shadows — warm and approachable, not clinical or sterile. This is a colorful, friendly dashboard, not a plain hospital form.

Generous spacing and large, legible text/buttons given the elderly target audience.

Real-world polish to include

Empty state message if no medicines exist yet, inviting the user to add their first one.

Status and counts recompute live with no page reload.

Footer line: "MediTrack — helping you and your loved ones never miss a dose."

Project should be ready to git init, push to GitHub, and deploy to GitHub Pages / Vercel / Netlify with zero extra config beyond npm install.

Deliverable

A complete, runnable React.js project (not a single-file mockup) with this structure:

meditrack/
├── public/index.html
└── src/
    ├── components/
    │   ├── SplashScreen.js
    │   ├── Header.js
    │   ├── Dashboard.js
    │   ├── ProgressRing.js
    │   ├── StatCard.js
    │   ├── MedicineCard.js
    │   ├── AddMedicineModal.js
    │   └── Logo.js
    ├── data.js       (random schedule generator + sample patient)
    ├── App.js, App.css, index.js, index.css
├── package.json (with gh-pages deploy script + homepage field)
└── README.md (setup + deploy instructions)

Artifacts

Meditrack react app

ZIP so give me a real world working project and i should deploy it in github make it fast and it should be work real world

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mymeds-care.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a84cef9f-1b55-4a74-a770-1e2d37b29e8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
