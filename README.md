# LEAD FLOW

Simple responsive SaaS dashboard wireframe for a lead distribution and analytics platform.

## Overview

LEAD FLOW is a static HTML, CSS, and JavaScript wireframe for a web-based SaaS product that includes:

- Dashboard overview
- Campaign management structure
- Destination management structure
- CS / Team management structure
- Analytics with behavior tracking
- Session duration distribution
- Scroll map visualization
- Smart insights
- Reports, integrations, and settings structure

The project is intentionally framework-free so it can be opened directly in a browser and later migrated into React, Vue, Next.js, Laravel Blade, or another stack.

## Folder Structure

```text
lead-flow-project/
+-- index.html
+-- README.md
+-- .gitignore
+-- assets/
|   +-- css/
|   |   +-- tokens.css
|   |   +-- layout.css
|   |   +-- components.css
|   |   +-- wireframe.css
|   +-- js/
|       +-- app.js
|       +-- data/
|       |   +-- navigation.js
|       |   +-- dashboard.js
|       +-- components/
|       |   +-- sidebar.js
|       |   +-- cards.js
|       |   +-- tables.js
|       |   +-- insights.js
|       +-- pages/
|           +-- dashboard-page.js
+-- docs/
    +-- project-structure.md
```

## How to Run

Open `index.html` directly in your browser.

No install step is required.

## Where to Edit

- Sidebar menu: `assets/js/data/navigation.js`
- Dashboard dummy data: `assets/js/data/dashboard.js`
- Dashboard page layout: `assets/js/pages/dashboard-page.js`
- Color, spacing, radius tokens: `assets/css/tokens.css`
- App shell, sidebar, topbar, grid, responsive layout: `assets/css/layout.css`
- Cards, buttons, table, status, reusable UI components: `assets/css/components.css`
- Wireframe visuals such as chart, scroll map, bars, insight cards: `assets/css/wireframe.css`

## Mobile Responsive Behavior

The wireframe is responsive:

- Desktop uses a left sidebar layout.
- Tablet and mobile convert the sidebar into a sticky horizontal navigation.
- KPI cards, analytics panels, module cards, and tables adapt to smaller screens.
- Tables keep horizontal scrolling so data remains readable.
- Scroll map and chart placeholders resize for mobile.

## Recommended Next Steps

- Add separate pages for Campaigns, Destinations, CS / Team, Analytics, Reports, Integrations, and Settings.
- Add a small JavaScript router so clicking sidebar items swaps the visible page.
- Replace dummy data with API responses.
- Convert components into your preferred frontend framework when needed.
