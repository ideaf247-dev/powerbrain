# AGENTS.md - PowerBrain Development Log

## Project Overview

**PowerBrain** is a Next.js-based platform focused on human capital development and AI-powered task management. The project integrates Firebase authentication, real-time dashboard analytics, and a Human Capital Engine (HCE) module designed to support job creation and skills development initiatives.

### Tech Stack
- **Framework**: Next.js 14.1.0
- **UI**: React 18.2.0, Tailwind CSS 3.3.5
- **Animation**: Framer Motion 12.23.24
- **Charts**: Recharts 3.4.1
- **Icons**: Lucide React 0.312.0
- **Authentication**: Firebase 10.8.0
- **Deployment**: Vercel

---

## Recent Changes

### Initial Project Setup (Commit: d1f75fb - Nov 11, 2025)

This commit established the complete foundation of the PowerBrain application with the following major implementations:

#### 1. **Core Infrastructure**
- Initialized Next.js 14 project with TypeScript support
- Configured Tailwind CSS with custom theme variables
- Set up PostCSS and autoprefixer
- Added jsconfig.json for path aliasing
- Created Vercel deployment configuration

#### 2. **Authentication System**
- Integrated Firebase Authentication
- Implemented Google Sign-In provider
- Created AuthButton component for authentication flows
- Added auth state management with Firebase onAuthStateChanged
- Protected dashboard route with authentication guard
- Environment-based Firebase configuration via .env.local

#### 3. **UI Components & Layout**
- **Layout.jsx**: Main application wrapper with navigation structure
- **Navbar.jsx**: Primary navigation component
- **Sidebar.jsx**: Side navigation for module access
- **Topbar.jsx**: Top bar with user controls and actions (42 lines)
- **AuthButton.jsx**: Reusable authentication button component

#### 4. **Dashboard Features**
- **DashboardWidgets.jsx**: Real-time analytics dashboard
  - Four KPI cards: Active Users, AI Tasks Completed, Module Uptime, Ideas Generated
  - Live data updates every 3.5 seconds with mock data simulation
  - Interactive line chart showing activity trends using Recharts
  - Responsive grid layout (1-4 columns based on screen size)
  - Real-time counter animations for stats

#### 5. **Human Capital Engine (HCE) Module**
- **modules/hce/App.jsx**: BEE PowerBrain HCE implementation
  - Reputation scoring system (initial: 780 points)
  - Pula (BWP currency) wallet integration (initial: P2,500)
  - Instant NRPS payment processing
  - Job creation initiative display (512,000 jobs target)
  - SONA Para 94 compliance reference
  - Icons: Zap, Award, Briefcase from Lucide React

#### 6. **Pages Structure**
- **index.jsx**: Landing/home page
- **dashboard.jsx**: Protected dashboard with auth guard
- **hce.jsx**: Human Cognitive Engine skills tracking page
  - Skills progress tracking (Climate Horticulture, Solar Panel Install, Video Editing)
  - Interactive skill boost functionality
  - Visual progress bars
  - State management for skill progression

- **admin.jsx**: Admin panel placeholder

#### 7. **Styling & Theming**
- Global CSS with light/dark theme support
- Custom CSS variables for background, cards, and text colors
- Dark mode configuration: `--bg: #0b1220`, `--card: #071127`, `--text: #e6eef8`
- Light mode defaults: `--bg: #f5f7fa`, `--card: #fff`, `--text: #111827`

#### 8. **Animations & Transitions**
- Framer Motion integration in _app.js
- Page transition effects: opacity and vertical slide (y: -8 to 0)
- 220ms transition duration
- AnimatePresence for route change animations

#### 9. **Configuration Files**
- **.gitignore**: Excludes node_modules, .next, .env files
- **vercel.json**: Vercel deployment config with Next.js builder
- **package.json**: Dependencies and build scripts
- **Structure/structure**: Project directory documentation

#### 10. **Development Setup**
- npm scripts: `dev`, `build`, `start`
- Next.js development server configuration
- Webpack build artifacts (.next directory)

---

## Project Structure

```
powerbrain/
├── pages/
│   ├── _app.js           # App wrapper with Layout and Framer Motion
│   ├── index.jsx         # Landing page
│   ├── dashboard.jsx     # Protected dashboard with auth guard
│   ├── hce.jsx          # Human Cognitive Engine (skills tracking)
│   └── admin.jsx        # Admin panel
├── components/
│   ├── Layout.jsx       # Main layout wrapper
│   ├── Navbar.jsx       # Navigation bar
│   ├── Sidebar.jsx      # Side navigation
│   ├── Topbar.jsx       # Top bar with user controls
│   ├── AuthButton.jsx   # Authentication button
│   └── DashboardWidgets.jsx  # Real-time dashboard widgets
├── modules/
│   └── hce/
│       └── App.jsx      # BEE PowerBrain HCE module
├── styles/
│   └── globals.css      # Global styles with theme variables
├── firebase.js          # Firebase configuration and auth helpers
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

---

## Key Features

### Real-Time Dashboard
- Live updating statistics with 3.5-second intervals
- Four main KPIs tracked: Active Users, AI Tasks, Uptime, Ideas
- Interactive line chart with smooth animations
- Mock data simulation for development

### Human Capital Engine (HCE)
- Reputation system with point tracking
- Currency management (Pula - Botswana Pula)
- Instant payment processing via NRPS
- Job creation tracking (512K jobs initiative)
- Skills progression tracking with boost functionality

### Authentication
- Firebase Google Sign-In
- Protected routes with auth guards
- Session persistence
- Environment-based configuration

### UI/UX
- Responsive design (mobile-first)
- Dark/light theme support
- Smooth page transitions (Framer Motion)
- Modern card-based layouts
- Lucide React icons throughout

---

## Environment Variables Required

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
```

---

## Development Notes

1. **Mock Data**: Dashboard widgets currently use simulated real-time data for development purposes
2. **Firebase Config**: Requires proper environment variables for production deployment
3. **Protected Routes**: Dashboard page includes authentication guard redirecting to home if not logged in
4. **Theme System**: CSS variables enable easy theme switching between light and dark modes
5. **Skills Tracking**: HCE page allows users to boost skill progress in 10% increments up to 100%

---

## Future Considerations

- Backend API integration for real data sources
- Additional HCE modules and features
- User profile management
- Admin panel functionality
- More comprehensive skills tracking
- Payment gateway integration for actual transactions
- Extended analytics and reporting features

---

## Deployment

The project is configured for deployment on Vercel with the Next.js builder. The vercel.json configuration handles routing and build settings automatically.

**Build Command**: `npm run build`  
**Dev Command**: `npm run dev`  
**Start Command**: `npm start`

---

*Last Updated: 2025-11-20*  
*Latest Commit: d1f75fb - PowerBrain: theme, transitions, dashboard widgets, HCE, firebase auth, vercel config*
