# UI/UX Designer Portfolio — Apurva Hippargi
### Tailored for Application at AssetCues Solutions Pvt. Ltd.

An original, modern, and accessible portfolio website engineered to showcase **enterprise UI/UX design thinking, design systems, information architecture, wireframing, and business intelligence dashboards**.

Designed specifically for an entry-level / fresher **UI/UX Designer** position at **AssetCues Solutions Pvt. Ltd.**, highlighting how a Bachelor of Computer Applications (BCA) foundation pairs with human-centered product design.

---

## 🌟 Key Highlights & Architecture

- **Original Visual Identity**: Crafted with a modern enterprise aesthetic (Deep Slate, Indigo, and Cyan accents), generous 8pt spatial rhythm, and WCAG 2.1 AA/AAA contrast compliance.
- **Interactive Design System Inspector**: A live widget in the Hero section allowing hiring managers to toggle color tokens, corner radii, and an 8pt baseline layout grid overlay.
- **3 Comprehensive Case Studies**:
  1. **AssetPulse — Enterprise Asset Management Dashboard Concept**: An end-to-end conceptual case study tailored specifically for AssetCues' enterprise domain (asset inventory, RFID audit verification, multi-parameter filtering, and live interactive table sandbox).
  2. **HotelRevAI — Revenue Analysis BI Dashboard for Hospitality**: An honest business intelligence project (Power BI, SQL, DAX) evaluated through an executive UI/UX information hierarchy lens.
  3. **Bank Marketing Exploratory Data Analysis & Information Design**: Converting 45,000+ customer records into a 3-tier conversion funnel and CRM lead scoring matrix to reduce cognitive load.
- **Interactive 6-Stage Design Process**: Discover → Define → Ideate → Wireframe → Prototype → Evaluate with activity lists, deliverables, and UX philosophy quotes.
- **Verified Skills Matrix**: Divided into UX, UI, Design Tools (Figma, Canva), and Supporting Technical Skills (HTML, CSS, JS, Git) with transparent proficiency badges.
- **Downloadable Resume**: Functional `/resume.pdf` download + instant in-browser document preview.
- **Zero Heavy Dependencies / Fast Performance**: Replaced bloated 3D models and trial plugins with lightweight, native CSS, React 18, TypeScript, and React Icons. Builds for production in under 2 seconds.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v20/v22/v25)
- **npm** v9+

### 2. Installation
Open your terminal in the project directory:
```bash
npm install
```

### 3. Running Locally (Development Mode)
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 4. Building for Production
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory.

### 5. Preview Production Bundle Locally
```bash
npm run preview
```

---

## ✏️ How to Customize Your Personal Information

All portfolio content is decoupled from components and stored in a single, well-documented TypeScript configuration file:

📁 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

### 1. Updating Name, Role, Bio & Contact Details
Open `src/data/portfolioData.ts` and edit the `PERSONAL_INFO` object:
```typescript
export const PERSONAL_INFO = {
  name: "Your Full Name",           // e.g. "Apurva Hippargi"
  title: "Aspiring UI/UX Designer",
  targetCompany: "AssetCues Solutions Pvt. Ltd.",
  targetRole: "UI/UX Designer",
  email: "your.email@example.com",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resumePath: "/resume.pdf",
};
```

### 2. Updating or Adding Project Screenshots
- Project hero mockups are stored in the `public/images/` directory:
  - `public/images/asset-dashboard-hero.svg` (AssetPulse Enterprise Concept)
  - `public/images/hotel-dashboard-hero.svg` (HotelRevAI BI Dashboard)
  - `public/images/bank-dashboard-hero.svg` (Bank Marketing EDA)
- To use your own exported PNG/JPG screenshots from Figma or Power BI:
  1. Copy your image into `public/images/my-project.png`.
  2. Open `src/data/portfolioData.ts`, find the corresponding project in the `PROJECTS` array, and update `heroImage`:
     ```typescript
     heroImage: "/images/my-project.png",
     ```

### 3. Updating Your Resume PDF
- Place your updated resume file in `public/resume.pdf`.
- When visitors click **Download Resume** on the website, it will immediately serve and download this file.

---

## 🌐 Deploying & Publishing Online

### Option A: Deploy to Vercel (Recommended — Free & 1-Click)
1. Push this project to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **Add New Project** and select this repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live at `your-name.vercel.app` in under 30 seconds!

### Option B: Deploy to Netlify
1. Sign in to [Netlify](https://netlify.com/).
2. Drag and drop the `dist/` folder after running `npm run build`, OR connect your GitHub repository with build command `npm run build` and publish directory `dist`.

### Option C: GitHub Pages
1. In `vite.config.ts`, add `base: '/repository-name/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 📄 License & Attribution
- Built with original design tokens, layout structures, and case studies.
- Free for personal portfolio and job application usage.
