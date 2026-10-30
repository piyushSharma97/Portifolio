# Piyush Sharma — Senior Frontend & AI Engineer

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer)](https://www.framer.com/motion/)
[![Playwright](https://img.shields.io/badge/Playwright-Automation-45ba4b?logo=playwright)](https://playwright.dev/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions)](https://github.com/features/actions)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

> Production-grade personal portfolio showcasing 5+ years of software engineering expertise in React, Next.js, AI applications (RAG & Vercel AI SDK), and Playwright test automation.

---

## 🌐 Live Demos & Links

- **🚀 Live Portfolio**: [portifolio-sigma-seven-69.vercel.app](https://portifolio-sigma-seven-69.vercel.app)
- **🤖 Featured AI Project**: [nextjs-ai-app-pi.vercel.app](https://nextjs-ai-app-pi.vercel.app) ([GitHub Repo](https://github.com/piyushSharma97/nextjs-ai-app))
- **💼 LinkedIn**: [linkedin.com/in/piyushsharma97](https://linkedin.com/in/piyushsharma97)
- **📧 Email**: [piyushsharma70141@gmail.com](mailto:piyushsharma70141@gmail.com)

---

## 🌟 Key Highlights & Engineering Impact

- **5+ Years Experience**: Architecting and shipping production web applications across healthcare, edtech, e-commerce, and enterprise software.
- **Enterprise Test Automation (John Deere / Expert-Connect)**: Led the migration of **180+ test suites** from WebdriverIO to **Playwright**, achieving a **60% efficiency improvement** in regression cycle times integrated with automated GitHub Actions CI/CD.
- **AI & Full-Stack Capabilities**: Built production streaming LLM applications with the Vercel AI SDK and local RAG pipelines running embeddings and vector search on local GPUs with zero API overhead.

---

## 🛠️ Featured Projects Showcased

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **Next.js AI SDK Playground** | Full-stack AI application exploring streaming chat, multi-modal inputs, structured data extraction, and Upstash Redis rate limiting. | Next.js 16, Vercel AI SDK, TypeScript, OpenAI, Upstash Redis | [Live Demo](https://nextjs-ai-app-pi.vercel.app) · [Code](https://github.com/piyushSharma97/nextjs-ai-app) |
| **Local RAG Document Pipeline** | End-to-end Retrieval-Augmented Generation system with document chunking, FAISS vector embeddings, and local Ollama LLM execution on RTX 4060 GPU. | Python, LangChain, FAISS, Ollama, Local LLMs | [GitHub](https://github.com/piyushSharma97) |
| **E-Consult Healthcare Platform** | Real-time doctor-patient consultation platform featuring video consultations, live scheduling, and WebSocket messaging. | Next.js, TypeScript, Socket.io, React 18 | Production |
| **Edprime ERP Platform** | Multi-tenant education ERP system serving thousands of active users, featuring automated CRUD code generation tools and modular architecture. | React, TypeScript, Redux Toolkit, SCSS | Production |

---

## 💻 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Frontend Core**: [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), Glassmorphism UI, CSS Variables
- **Animations & Interaction**: [Framer Motion 12](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **Theme**: Seamless Dark / Light mode toggle powered by `next-themes`
- **CI / CD & Deployment**:
  - **Vercel**: Edge-optimized instant production builds
  - **GitHub Actions**: Automated CI build, test verification, and GitHub Pages deployment ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/piyushSharma97/Portifolio.git
   cd Portifolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` — Starts local development server with Turbopack.
- `npm run build` — Compiles production-optimized build.
- `npm run start` — Starts Next.js production server.
- `npm run typecheck` — Validates TypeScript types across the entire project.
- `npm run resume:pdf` — Generates formatted PDF resume from source.

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD deployment pipeline
├── public/
│   └── Piyush-Sharma-Senior-Frontend-AI-Engineer.pdf
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styling and design tokens
│   │   ├── layout.tsx          # Root layout and theme provider wrapper
│   │   └── page.tsx            # Main single-page portfolio layout
│   ├── components/             # Reusable UI & section components
│   │   ├── Hero.tsx            # Animated hero with floating tech badges
│   │   ├── About.tsx           # Bio, key stats, and background
│   │   ├── Skills.tsx          # Categorized technical arsenal
│   │   ├── Projects.tsx        # Interactive project cards with tilt & live links
│   │   ├── Experience.tsx      # Career timeline and John Deere impact
│   │   ├── Contact.tsx         # Contact form with email & social cards
│   │   └── ThemeToggle.tsx     # Dark / Light mode switcher
│   └── data/
│       └── portfolio.json      # Centralized portfolio content & metadata
├── next.config.ts              # Next.js configuration (multi-target deployment)
├── package.json
└── tsconfig.json
```

---

## 📬 Contact & Connect

- **Portfolio**: [portifolio-sigma-seven-69.vercel.app](https://portifolio-sigma-seven-69.vercel.app)
- **LinkedIn**: [linkedin.com/in/piyushsharma97](https://linkedin.com/in/piyushsharma97)
- **GitHub**: [github.com/piyushSharma97](https://github.com/piyushSharma97)
- **Location**: Bangalore, Karnataka, India

