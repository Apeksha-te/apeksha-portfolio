# Apeksha A R — Personal Portfolio Website

A modern, responsive, high-performance personal portfolio website built for **Apeksha A R**, Information Science Engineering student at **Malnad College of Engineering (Autonomous), VTU** (CGPA: **9.53**).

---

## 🌟 Key Features

1. **Dual Theme (Dark & Light Mode):**
   - High-contrast, executive aesthetic (Deep Navy / Midnight Slate Dark Mode & Crisp Slate Light Mode).
   - Theme choice automatically remembered across browser sessions using `localStorage`.
   - Respects user's system preference by default.

2. **Hero Section with Dynamic Typing:**
   - Smooth animated typing effect cycling through:
     - *Aspiring Software Engineer*
     - *Full-Stack Developer*
     - *AI/ML Enthusiast*
     - *Blockchain & Security Explorer*
   - Interactive profile card with live status indicator ("Open to Software Engineering & Internship Opportunities").
   - Quick connect buttons for GitHub, LinkedIn, Email, and Phone.

3. **About Me & Animated Stat Counters:**
   - Concise, professional summary based directly on your resume objective.
   - Animated count-up statistics:
     - **9.53 CGPA** (B.E. ISE, Malnad College of Engineering)
     - **6+ Projects Built**
     - **3 Hackathons & Competitions**
     - **100+ Students Mentored** (IUCEE workshops)

4. **Categorized & Filterable Technical Skills:**
   - Categorized by **Programming Languages**, **Web Development & Frameworks**, **Core CS & Algorithms**, and **Tools & UI/UX Design**.
   - Interactive category filter tabs and animated proficiency progress bars.

5. **Projects Showcase with Interactive Modals:**
   - **Flagship Project Spotlight:**
     - 🚀 *Autonomous Personal Tax/Finance Agent* (Highlighted at the top with "In Progress" badge and architecture preview).
   - **Filterable Grid (All / Full-Stack / AI-ML / Blockchain / Security):**
     1. *Online Therapist Booking System* (Full-Stack Django)
     2. *Department Resource Sharing Portal* (Full-Stack Django Mini-Project)
     3. *EcoChain: Carbon Footprint Tracker & Eco Reward* (Custom Blockchain & SHA-256)
     4. *Food Calorie Estimator* (AI/ML & Computer Vision)
     5. *End-to-End Encrypted Real-Time Chat App* (Cryptography & Security)
   - Every card has an **Interactive Detail Modal** with Problem Statement, Solution Architecture, Key Features, and Tech Stack.

6. **Education Vertical Timeline:**
   - Vertical timeline displaying your academic milestones:
     - **B.E. in Information Science and Engineering** (2023 - Present) &bull; CGPA: **9.53**
     - **PU (PCMB)** &bull; St. Joseph's Girls PU College (2021 - 2023) &bull; **94.83%**
     - **SSLC** &bull; St. Joseph Convent Girls High School (2021) &bull; **97.76%**

7. **Achievements & Competitions:**
   - **Second Prize at InnovateX (Innofesta 2024)** &bull; HITAM
   - **24-Hour Hackathon at CICADA 2025** &bull; Atria Institute of Technology
   - **EduAIThon (IASF2026 / ICTIEE 2026)** &bull; GITAM University
   - Interactive **Certificate Viewer Modal** with verification placeholders.

8. **Certifications & Extra-Curriculars:**
   - Web Development Certification
   - AWS Certification
   - IBM: Getting Started with AI
   - Creative and Website Head role & IUCEE Workshop series instructor highlights.

9. **Working Contact Form & Direct Channels:**
   - Client-side validation for Name, Email, Subject, and Message.
   - Celebration confetti animation on submission.
   - Direct `mailto:` action button to launch your email client with pre-filled content.
   - Direct cards for Email (`apekshaar835@gmail.com`), Phone (`+91 91488 09662`), and Location (`Hassan, Karnataka`).

---

## 📁 Project Structure

```text
apeksha-portfolio/
├── index.html            # Main semantic HTML5 webpage
├── style.css             # Complete design system, themes, and animations
├── script.js             # Central data repository, typing engine, modals & forms
├── README.md             # Documentation, running instructions & deployment guide
└── assets/
    └── images/
        ├── placeholder.svg  # Default avatar graphic fallback
        └── profile.jpg      # (Drop your photo here)
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double-click `index.html` in Windows Explorer to open it directly in your browser (Google Chrome, Edge, Firefox, Brave, etc.).

### Option 2: Using VS Code Live Server (Recommended)
1. Open this folder `c:\Users\Apeksha\Desktop\apeksha-portfolio` in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and choose **"Open with Live Server"**.
4. The site will run at `http://127.0.0.1:5500/`.

### Option 3: Using Python
If you have Python installed, open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🌐 How to Deploy for Free

### 1. Deploying on GitHub Pages (Recommended)
Since you already have a GitHub account (`https://github.com/Apeksha-te`):
1. Create a new public repository on GitHub named `portfolio` (or `Apeksha-te.github.io` for a primary root domain).
2. Push your project files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Apeksha-te/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, navigate to **Settings** > **Pages** (under "Code and automation").
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your portfolio will be live in 1-2 minutes at:
   `https://Apeksha-te.github.io/portfolio/`

### 2. Deploying on Netlify
1. Go to [Netlify.com](https://www.netlify.com/) and sign in.
2. Drag and drop the `apeksha-portfolio` folder directly into the Netlify "Sites" dashboard.
3. Your website goes live immediately with a free custom `https://your-name.netlify.app` domain and free SSL!

### 3. Deploying on Vercel
1. Go to [Vercel.com](https://vercel.com/) and sign in with GitHub.
2. Click **"Add New..."** > **"Project"**.
3. Select your GitHub repository and click **Deploy**.

---

## ✏️ Checklist: What to Customize Before Publishing

All dynamic content is organized in **`script.js`** inside the `portfolioData` object:

1. **Profile Photo:**
   - Save your photo as `profile.jpg` or `profile.png` inside the `assets/images/` folder (or in the root folder). The website automatically detects and displays it!
2. **Resume PDF:**
   - Place your resume PDF in the root folder named `resume.pdf`. The "Download Resume" buttons in the navbar, hero, and modal will download it directly.
3. **GitHub Project Links:**
   - In `script.js`, under `portfolioData.projects`, replace the placeholder GitHub URLs with your specific repository links (e.g. `https://github.com/Apeksha-te/therapist-booking`).
4. **Certificate URLs:**
   - In `script.js`, under `portfolioData.certificates`, you can replace the placeholder URLs with direct links to your certificate scans (Google Drive, LinkedIn Credential, or PDF files in `assets/certificates/`).
5. **Project 4, 5 & 6 Tech Stacks:**
   - For *Food Calorie Estimator*, *E2EE Chat App*, and *Autonomous Tax Agent*, you can fine-tune the exact libraries and frameworks in `script.js` as your projects evolve.

