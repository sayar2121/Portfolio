# Sayar Paul - Full Stack Developer Portfolio 🚀

A highly interactive, premium, and fully responsive 3D personal portfolio built to showcase projects, skills, and experience.

## ✨ Key Features

- **Cinematic 3D Loader:** Custom Lottie hand animation with glowing progress rings.
- **Dynamic Hero Section:** Interactive glitch text effects (`FuzzyText`) and a floating 3D avatar with orbiting tech-stack icons.
- **Parallax ScrollStack Projects:** A buttery-smooth, sticky card-stacking animation as you scroll through the project showcase.
- **API-Free Contact Form:** Securely delivers form submissions directly to your Gmail inbox using `formsubmit.co`—without requiring any backend setup or API keys.
- **Fully Responsive:** Painstakingly optimized for all device sizes, from ultra-wide 4K monitors to small mobile screens.
- **Glassmorphism UI:** Modern, translucent card designs with vibrant neon gradients.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Custom CSS with Glassmorphism & Modern UI Tokens
- **Animations:** Framer Motion (page transitions, scroll reveals)
- **3D & Graphics:** Three.js, React Three Fiber (R3F)
- **Vector Animations:** Lottie-web
- **Form Handling:** FormSubmit

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-repository-url>
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### 🏗️ Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will compile your application into the `dist/` folder, which is ready to be deployed to Vercel, Netlify, or GitHub Pages.

## 📧 Contact Integration Setup

The contact form uses **FormSubmit**. If you deploy the site to a new domain or change your email address:
1. The very first time you submit the form on the live site, FormSubmit will send an activation email.
2. Check your inbox and click **"Activate Form"**.
3. All future messages will silently arrive in your inbox. No further setup required!

---
*Designed & Developed by [Sayar Paul]*
