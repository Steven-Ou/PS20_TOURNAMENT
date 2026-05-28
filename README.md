<h1 align="center">🏀 PS20 Mike Legend Tournament Dashboard</h1>

<p align="center">
  <strong>A highly interactive, dynamic tracking board engineered to manage and display live basketball game results, team fouls, schedules, and custom lineups in real-time.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js%2014-blue?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## 🚀 Key Features

* 🎛️ **Browser Customizability:** Modify tournament titles, matching dates, scores, fouls, and active lineups directly on the screen without rewriting raw code.
* 🔐 **Role-Based Access Control (RBAC):**
  * `<kbd>HIGHER ADMINISTRATIVE LEVEL (ADMIN)</kbd>`: Grants full write-access to shift game layouts, edit player names, input scores, track foul numbers, and update metadata.
  * `<kbd>SPECTATOR LEVEL (USER)</kbd>`: A clean, crisp read-only view that safely freezes input fields and drop-downs to prevent unauthorized tampering.
* 📐 **Optimized Multi-Column Grid Layout:** Built entirely without clunky legacy sidebars, expanding core matchup tracking elements alongside a beautifully formatted 2-column split roster board.
* 🎨 **Native Vector Component Logos:** High-fidelity team icons (*The Unions' Fish, The Bownes' Medal, The Sanfords' Basketball, and The Barclays' Shield*) engineered cleanly as lightweight, lightning-fast inline SVGs.
* 🔢 **Smart-Zero Fallback Validation:** Numeric score and foul inputs allow instant erasure during text entry without disappearing or throwing compilation bugs, defaulting gracefully back to `0`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js / React** | Application Architecture & Client Rendering |
| **Tailwind CSS** | Interface Layout & Dark-Mode Theme Styling |
| **TypeScript** | Strict Type Safety & State Validation |
| **React State Hooks** | Dynamic On-Screen Live Editing Updates |

---

## 📁 Project Layout

```text
├── App/
│   ├── layout.tsx       # Global root configuration & fonts
│   └── page.tsx         # The main interactive Tournament Dashboard Code
├── public/              # Static media assets & backup graphics
├── package.json         # Dependencies & scripts
└── tailwind.config.js   # Custom Tailwind design tokens

⚙️ Getting Started
1. Installation
Clone the repository and install the setup packages inside your local terminal environment:

Bash
cd ps20_tournament
npm install

2. Run the Development Server
Fire up your live hot-reloading local compiler server:

Bash
npm run dev
Once it compiles successfully, navigate to http://localhost:3000 in your preferred web browser to view the live app.

📝 Dashboard User Guide
Flip the upper authorization console select drop-down to HIGHER ADMINISTRATIVE LEVEL (ADMIN).

Click on the select dropdown inside any live match card block to fluidly swap out who is playing. The vector logo badge updates instantly.

Type numbers to increment or decrement the live Scores and Fouls (F:) as the game progresses.

When game night is over, toggle the dropdown menu back to SPECTATOR LEVEL to lock down the interface into a secure, display-only layout.