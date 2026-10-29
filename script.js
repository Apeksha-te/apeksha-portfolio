/**
 * ===================================================================
 * APEKSHA A R - PERSONAL PORTFOLIO JAVASCRIPT ENGINE
 * Centralized Data Model, Micro-Interactions, Filters, Modals & Form
 * ===================================================================
 */

'use strict';

/* -------------------------------------------------------------------
   1. CENTRAL PORTFOLIO DATA REPOSITORY
   (Easily edit projects, links, certificates, and details here!)
   ------------------------------------------------------------------- */
const portfolioData = {
  profile: {
    name: "Apeksha A R",
    role: "Information Science Engineering Student & Aspiring Software Engineer",
    college: "Malnad College of Engineering (Autonomous), VTU",
    location: "Hassan, Karnataka, India",
    email: "apekshaar835@gmail.com",
    phone: "+91 91488 09662",
    githubUrl: "https://github.com/Apeksha-te",
    linkedinUrl: "https://www.linkedin.com/in/apeksha-a-r-2342a7295",
    cgpa: "9.53",
    typingRoles: [
      "Aspiring Software Engineer",
      "Full-Stack Developer",
      "AI/ML Enthusiast",
      "Blockchain & Security Explorer"
    ]
  },

  projects: {
    "project-tax-agent": {
      id: "project-tax-agent",
      title: "Autonomous Personal Tax/Finance Agent",
      status: "In Progress",
      statusBadgeClass: "badge-warning",
      category: "AI / ML & Intelligent Systems",
      filterCategory: "aiml",
      summary: "An autonomous AI agent that analyzes financial behavior, categorizes deductions, calculates projected tax liabilities, and provides actionable fiscal optimization strategies.",
      problemStatement: "Navigating personal taxation, tracking deductible expenses across diverse accounts, and planning quarterly finances requires tedious spreadsheet tracking and specialized tax knowledge, often leading to missed exemptions and penalties.",
      solution: "Developed an intelligent autonomous system that ingests financial statements, identifies taxable events, applies regional tax slabs and deduction rules, and recommends tailored saving vehicles through explainable AI reasoning.",
      features: [
        "Autonomous ingestion and OCR parsing of bank statements and financial receipts.",
        "Automatic tax categorization (exemptions, deductions, capital gains, standard limits).",
        "Explainable AI tax advisor offering personalized savings recommendations.",
        "Local privacy-first architecture ensuring sensitive financial data is never exposed."
      ],
      techStack: [
        "Python",
        "Autonomous AI Agent Framework",
        "FastAPI / Backend Server [Placeholder]",
        "LLM Reasoning Model [Placeholder]",
        "Vector & Relational Database [Placeholder]"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact", // Replace with live demo URL
      isFlagship: true
    },

    "project-therapist": {
      id: "project-therapist",
      title: "Online Therapist Booking System",
      status: "Completed",
      statusBadgeClass: "badge-completed",
      category: "Full-Stack Development",
      filterCategory: "fullstack",
      summary: "Django-based digital healthcare portal connecting individuals with certified mental health therapists for seamless appointment booking and schedule management.",
      problemStatement: "Finding certified therapists and scheduling appointments often suffers from friction, lack of transparent availability, and insecure communication channels.",
      solution: "Engineered an end-to-end full-stack platform with Django providing authenticated workflows for both patients and certified therapists, real-time schedule conflict prevention, and profile management.",
      features: [
        "Therapist verification workflows and searchable practitioner directory.",
        "Interactive appointment calendar with dynamic slot availability management.",
        "Secure user authentication, patient health privacy, and session history.",
        "High-performance database operations powered by Django ORM."
      ],
      techStack: [
        "Python",
        "Django",
        "Django ORM",
        "HTML5",
        "CSS3",
        "JavaScript",
        "SQLite / PostgreSQL"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact", // Replace with live demo URL
      isFlagship: false
    },

    "project-resource-portal": {
      id: "project-resource-portal",
      title: "Department Resource Sharing Portal",
      status: "Completed",
      statusBadgeClass: "badge-completed",
      category: "Full-Stack Development (Mini Project)",
      filterCategory: "fullstack",
      summary: "A centralized institutional web portal facilitating cross-departmental sharing, requisition, and allocation of academic resources and lab equipment.",
      problemStatement: "Academic institutions frequently face siloed resources, duplicate equipment purchases, and opaque borrowing procedures across different collegiate departments.",
      solution: "Built a role-based Django web platform enabling faculty and staff to publish available departmental assets, submit borrowing requisitions, and track approvals seamlessly.",
      features: [
        "Role-Based Access Control (RBAC) separating Department Heads, Faculty, and Administrators.",
        "Asset requisition lifecycle: Request, Approval, Checkout, Return, and Overdue tracking.",
        "Admin dashboard for inventory auditing, usage analytics, and approval logging.",
        "Clean, responsive user interface styled with HTML5, CSS3, and Bootstrap."
      ],
      techStack: [
        "Django",
        "Python",
        "Bootstrap 5",
        "HTML5 / CSS3",
        "Django Auth & RBAC",
        "SQLite"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact",
      isFlagship: false
    },

    "project-ecochain": {
      id: "project-ecochain",
      title: "EcoChain: Blockchain-Based Carbon Footprint Tracker and Eco Reward System",
      status: "Completed",
      statusBadgeClass: "badge-completed",
      category: "Blockchain & Web Application",
      filterCategory: "blockchain",
      summary: "A decentralized carbon tracking platform that quantifies daily environmental impact, records verified actions on a custom private blockchain, and awards EcoPoints.",
      problemStatement: "Traditional carbon accounting systems are prone to centralized data tampering, greenwashing, and lack compelling user incentives for sustained sustainability.",
      solution: "Implemented a custom private blockchain using SHA-256 cryptographic hashing to log immutable activity records, paired with a tokenized EcoPoints reward mechanism to incentivize eco-friendly behavior.",
      features: [
        "Custom private blockchain implementation with linked blocks and cryptographic SHA-256 validation.",
        "Immutable, tamper-proof activity ledger verifying daily carbon emissions and savings.",
        "Gamified EcoPoints reward mechanism redeemable for eco-friendly incentives.",
        "Transparent verification algorithm demonstrating blockchain consensus fundamentals."
      ],
      techStack: [
        "Python",
        "Custom Blockchain Engine",
        "SHA-256 Cryptographic Hashing",
        "JavaScript",
        "Web UI / CSS3",
        "JSON Ledger"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact",
      isFlagship: false
    },

    "project-calorie": {
      id: "project-calorie",
      title: "Food Calorie Estimator",
      status: "Completed",
      statusBadgeClass: "badge-completed",
      category: "AI / ML & Computer Vision",
      filterCategory: "aiml",
      summary: "A machine learning and image processing application that identifies food items from photographs and estimates caloric and nutritional content.",
      problemStatement: "Manual calorie counting and dietary logging is tedious and error-prone, leading many individuals to abandon nutritional tracking.",
      solution: "Trained an image processing and machine learning classification pipeline capable of segmenting meal photos, identifying individual food items, and calculating nutritional metrics against nutritional databases.",
      features: [
        "Computer vision image preprocessing and boundary feature extraction.",
        "Machine learning classification model trained on diverse meal datasets.",
        "Nutritional estimation calculating total calories, macronutrients, and portion sizing.",
        "Interactive dashboard displaying visual meal breakdowns and nutritional summaries."
      ],
      techStack: [
        "Python",
        "Machine Learning Classifier",
        "Computer Vision / Image Processing",
        "NumPy / Pandas",
        "Nutritional Dataset API [Placeholder]",
        "Web Frontend [Placeholder]"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact",
      isFlagship: false
    },

    "project-e2ee-chat": {
      id: "project-e2ee-chat",
      title: "End-to-End Encrypted Real-Time Chat Application",
      status: "Completed",
      statusBadgeClass: "badge-completed",
      category: "Cryptography & Network Security",
      filterCategory: "security",
      summary: "A high-security messaging application implementing client-side end-to-end encryption protocols ensuring message confidentiality and forward secrecy.",
      problemStatement: "Standard web messaging apps frequently route plaintext or weakly encrypted messages through centralized servers, leaving sensitive conversations vulnerable to interception and data leaks.",
      solution: "Engineered a secure real-time messaging architecture where cryptographic keys are generated and held exclusively on client devices, encrypting messages before transmission and decrypting only on the recipient's endpoint.",
      features: [
        "Client-side cryptographic key pair generation and ephemeral cipher negotiation.",
        "Zero-knowledge server relay: messages in transit and at rest remain strictly ciphertext.",
        "Low-latency real-time bidirectional messaging via WebSockets / event relays.",
        "Protection against man-in-the-middle (MITM) attacks and replay vulnerabilities."
      ],
      techStack: [
        "Cryptography (AES / RSA)",
        "End-to-End Encryption Protocol",
        "WebSockets / Real-Time Messaging",
        "JavaScript / Node / Python [Placeholder]",
        "Secure Storage"
      ],
      githubUrl: "https://github.com/Apeksha-te", // Replace with specific repository URL
      demoUrl: "#contact",
      isFlagship: false
    }
  },

  certificates: {
    "cert-innovatex": {
      title: "Second Prize at InnovateX (Innofesta 2024)",
      issuer: "Hyderabad Institute of Technology and Management (HITAM)",
      date: "2024",
      description: "Awarded Second Prize for demonstrating superior technical innovation, rapid prototype development, and exemplary teamwork in a competitive multi-college project hackathon.",
      fileUrl: "#", // Replace with certificate link (e.g. assets/certificates/innovatex.pdf)
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=InnovateX%20Certificate%20Verification"
    },
    "cert-cicada": {
      title: "24-Hour Hackathon - CICADA 2025",
      issuer: "Atria Institute of Technology, Bengaluru",
      date: "2025",
      description: "Completed an intensive 24-hour continuous hackathon solving complex algorithmic and software challenges under strict time and evaluation constraints.",
      fileUrl: "#",
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=CICADA%20Certificate%20Verification"
    },
    "cert-eduaithon": {
      title: "EduAIThon - IASF2026 / ICTIEE 2026",
      issuer: "GITAM University & IUCEE",
      date: "2026",
      description: "Active participation in the premier EduAIThon during the International Conference on Transformations in Engineering Education (ICTIEE 2026), focusing on AI-assisted pedagogical innovation.",
      fileUrl: "#",
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=EduAIThon%20Certificate%20Verification"
    },
    "cert-webdev": {
      title: "Web Development Certification",
      issuer: "Recognized Credential Provider",
      date: "Verified",
      description: "Credential validating mastery over modern HTML5, CSS3 styling, JavaScript execution patterns, client-side application logic, and responsive UI best practices.",
      fileUrl: "#",
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=WebDev%20Certificate%20Verification"
    },
    "cert-aws": {
      title: "AWS Certification",
      issuer: "Amazon Web Services",
      date: "Verified",
      description: "Validated understanding of foundational AWS cloud infrastructure, security models, EC2 compute instances, S3 storage, IAM permissioning, and scalable deployment fundamentals.",
      fileUrl: "#",
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=AWS%20Certificate%20Verification"
    },
    "cert-ibm-ai": {
      title: "IBM: Getting Started with AI",
      issuer: "IBM",
      date: "Verified",
      description: "Comprehensive coursework validating foundational understanding of artificial intelligence taxonomy, neural network architectures, machine learning models, and ethical governance.",
      fileUrl: "#",
      verificationUrl: "mailto:apekshaar835@gmail.com?subject=IBM%20AI%20Certificate%20Verification"
    }
  }
};

/* -------------------------------------------------------------------
   2. DOM ELEMENT REFERENCES
   ------------------------------------------------------------------- */
const DOM = {
  themeToggle: document.getElementById('theme-toggle'),
  scrollProgressBar: document.getElementById('scroll-progress-bar'),
  navbar: document.getElementById('navbar'),
  navLinks: document.querySelectorAll('.nav-link'),
  mobileToggle: document.getElementById('mobile-toggle'),
  drawerClose: document.getElementById('drawer-close'),
  mobileDrawer: document.getElementById('mobile-drawer'),
  drawerBackdrop: document.getElementById('drawer-backdrop'),
  drawerLinks: document.querySelectorAll('.drawer-link'),
  typingText: document.getElementById('typing-text'),
  statNumbers: document.querySelectorAll('.stat-number'),
  skillTabs: document.querySelectorAll('.skill-tab'),
  skillCategoryCards: document.querySelectorAll('.skill-category-card'),
  skillBarFills: document.querySelectorAll('.skill-bar-fill'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  projectCards: document.querySelectorAll('.project-card'),
  reveals: document.querySelectorAll('.reveal-on-scroll'),
  backToTop: document.getElementById('back-to-top'),
  currentYear: document.getElementById('current-year'),
  
  // Modals
  projectModal: document.getElementById('project-modal'),
  closeProjectModal: document.getElementById('close-project-modal'),
  modalProjectTitle: document.getElementById('modal-project-title'),
  modalProjectBadge: document.getElementById('modal-project-badge'),
  modalProjectContent: document.getElementById('modal-project-content'),
  modalGithubBtn: document.getElementById('modal-github-btn'),
  modalDemoBtn: document.getElementById('modal-demo-btn'),
  
  certModal: document.getElementById('cert-modal'),
  closeCertModal: document.getElementById('close-cert-modal'),
  modalCertTitle: document.getElementById('modal-cert-title'),
  modalCertIssuer: document.getElementById('modal-cert-issuer'),
  modalCertDesc: document.getElementById('modal-cert-desc'),
  modalCertDismiss: document.getElementById('modal-cert-dismiss'),
  modalCertLink: document.getElementById('modal-cert-link'),

  resumeModal: document.getElementById('resume-modal'),
  closeResumeModal: document.getElementById('close-resume-modal'),
  modalResumeDismiss: document.getElementById('modal-resume-dismiss'),
  navResumeTrigger: document.getElementById('nav-resume-trigger'),
  heroResumeTrigger: document.getElementById('hero-resume-trigger'),

  // Contact Form
  contactForm: document.getElementById('portfolio-contact-form'),
  contactName: document.getElementById('contact-name'),
  contactEmail: document.getElementById('contact-email'),
  contactSubject: document.getElementById('contact-subject'),
  contactMessage: document.getElementById('contact-message'),
  contactSubmitBtn: document.getElementById('contact-submit-btn'),
  formFeedback: document.getElementById('form-feedback'),
  nameError: document.getElementById('name-error'),
  emailError: document.getElementById('email-error'),
  subjectError: document.getElementById('subject-error'),
  messageError: document.getElementById('message-error')
};

/* -------------------------------------------------------------------
   3. THEME CONTROLLER (DARK & LIGHT MODE)
   ------------------------------------------------------------------- */
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem('apeksha-portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(initialTheme);

    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
      });
    }

    // Listen to OS system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('apeksha-portfolio-theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('apeksha-portfolio-theme', theme);
  }
};

/* -------------------------------------------------------------------
   4. DYNAMIC ROTATING TYPING EFFECT
   ------------------------------------------------------------------- */
const TypingEffect = {
  roles: portfolioData.profile.typingRoles,
  currentRoleIndex: 0,
  currentCharIndex: 0,
  isDeleting: false,
  typingSpeed: 95,
  deletingSpeed: 45,
  pauseBetweenWords: 1800,

  init() {
    if (!DOM.typingText) return;
    this.tick();
  },

  tick() {
    const currentWord = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      this.currentCharIndex--;
      DOM.typingText.textContent = currentWord.substring(0, this.currentCharIndex);
    } else {
      this.currentCharIndex++;
      DOM.typingText.textContent = currentWord.substring(0, this.currentCharIndex);
    }

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      delay = this.pauseBetweenWords;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      delay = 450;
    }

    setTimeout(() => this.tick(), delay);
  }
};

/* -------------------------------------------------------------------
   5. NAVIGATION & SCROLL TRACKING
   ------------------------------------------------------------------- */
const NavigationManager = {
  init() {
    this.updateCurrentYear();
    this.bindScrollEvents();
    this.bindMobileDrawer();
    this.bindSmoothScroll();
  },

  updateCurrentYear() {
    if (DOM.currentYear) {
      DOM.currentYear.textContent = new Date().getFullYear();
    }
  },

  bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollY / winHeight) * 100;

      // Update top progress bar
      if (DOM.scrollProgressBar) {
        DOM.scrollProgressBar.style.width = `${scrollPercent}%`;
      }

      // Add shadow to navbar when scrolled
      if (DOM.navbar) {
        if (scrollY > 50) {
          DOM.navbar.classList.add('scrolled');
        } else {
          DOM.navbar.classList.remove('scrolled');
        }
      }

      // Highlight active navbar section
      this.highlightActiveSection();
    }, { passive: true });
  },

  highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        DOM.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        DOM.drawerLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },

  bindMobileDrawer() {
    const openDrawer = () => {
      DOM.mobileDrawer?.classList.add('open');
      DOM.drawerBackdrop?.classList.add('active');
      DOM.mobileToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      DOM.mobileDrawer?.classList.remove('open');
      DOM.drawerBackdrop?.classList.remove('active');
      DOM.mobileToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    DOM.mobileToggle?.addEventListener('click', openDrawer);
    DOM.drawerClose?.addEventListener('click', closeDrawer);
    DOM.drawerBackdrop?.addEventListener('click', closeDrawer);

    DOM.drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.mobileDrawer?.classList.contains('open')) {
        closeDrawer();
      }
    });
  },

  bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.startsWith('#project-') || targetId.startsWith('#resume-modal')) return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const navOffset = DOM.navbar ? DOM.navbar.offsetHeight : 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

/* -------------------------------------------------------------------
   6. SCROLL REVEAL & STATS COUNTER ANIMATION
   ------------------------------------------------------------------- */
const ScrollAnimations = {
  hasCounted: false,

  init() {
    this.initRevealObserver();
    this.initStatsObserver();
    this.initSkillBarsObserver();
  },

  initRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      DOM.reveals.forEach(el => el.classList.add('revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    DOM.reveals.forEach(el => revealObserver.observe(el));
  },

  initStatsObserver() {
    const statsSection = document.querySelector('.stats-counter-strip');
    if (!statsSection) return;

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasCounted) {
          this.hasCounted = true;
          this.runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  },

  runCounters() {
    DOM.statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const decimals = parseInt(stat.getAttribute('data-decimals') || '0', 10);
      const duration = 1800; // ms
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;

      const easeOutQuad = (t) => t * (2 - t);

      const counterInterval = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentVal = target * progress;

        stat.textContent = currentVal.toFixed(decimals);

        if (frame >= totalFrames) {
          stat.textContent = target.toFixed(decimals);
          clearInterval(counterInterval);
        }
      }, 1000 / frameRate);
    });
  },

  initSkillBarsObserver() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          DOM.skillBarFills.forEach(bar => bar.classList.add('animated'));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    skillsObserver.observe(skillsGrid);
  }
};

/* -------------------------------------------------------------------
   7. SKILLS FILTER TABS
   ------------------------------------------------------------------- */
const SkillsFilter = {
  init() {
    DOM.skillTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.skillTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const selectedCategory = tab.getAttribute('data-category');

        DOM.skillCategoryCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
};

/* -------------------------------------------------------------------
   8. PROJECTS FILTER & MODAL CONTROLLER
   ------------------------------------------------------------------- */
const ProjectsController = {
  init() {
    this.bindFilterButtons();
    this.bindProjectModals();
    this.bindCertificateModals();
    this.bindResumeModal();
  },

  bindFilterButtons() {
    DOM.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        DOM.projectCards.forEach(card => {
          const category = card.getAttribute('data-category');

          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  },

  bindProjectModals() {
    // Open Modal buttons
    document.querySelectorAll('.open-project-modal').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project-id');
        this.openProjectModal(projectId);
      });
    });

    // Close buttons
    DOM.closeProjectModal?.addEventListener('click', () => this.closeProjectModal());
    DOM.projectModal?.addEventListener('click', (e) => {
      if (e.target === DOM.projectModal) this.closeProjectModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.projectModal?.classList.contains('open')) {
        this.closeProjectModal();
      }
    });
  },

  openProjectModal(projectId) {
    const project = portfolioData.projects[projectId];
    if (!project) return;

    if (DOM.modalProjectTitle) DOM.modalProjectTitle.textContent = project.title;
    if (DOM.modalProjectBadge) {
      DOM.modalProjectBadge.textContent = `${project.status} • ${project.category}`;
      DOM.modalProjectBadge.className = `modal-badge ${project.statusBadgeClass}`;
    }

    if (DOM.modalProjectContent) {
      DOM.modalProjectContent.innerHTML = `
        <div class="modal-detail-section">
          <h4 class="modal-heading"><i class="fa-solid fa-circle-question text-accent-cyan"></i> Problem Statement</h4>
          <p>${project.problemStatement}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-heading"><i class="fa-solid fa-lightbulb text-accent-amber"></i> Proposed Solution & Architecture</h4>
          <p>${project.solution}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-heading"><i class="fa-solid fa-list-check text-accent-emerald"></i> Core Capabilities & Implemented Features</h4>
          <ul class="modal-features-list">
            ${project.features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('')}
          </ul>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-heading"><i class="fa-solid fa-layer-group text-accent-indigo"></i> Technology Stack & Tools</h4>
          <div class="project-tech-tags" style="margin-bottom: 0.5rem;">
            ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="cert-notice-box" style="margin-top: 1rem;">
          <i class="fa-solid fa-code-fork"></i>
          <span><strong>Quick Customization:</strong> Tech stack tags and GitHub repository links can be updated anytime inside <code>script.js</code> under <code>portfolioData.projects['${projectId}']</code>.</span>
        </div>
      `;
    }

    if (DOM.modalGithubBtn) {
      DOM.modalGithubBtn.href = project.githubUrl || portfolioData.profile.githubUrl;
    }
    if (DOM.modalDemoBtn) {
      DOM.modalDemoBtn.href = project.demoUrl || "#contact";
    }

    DOM.projectModal?.classList.add('open');
    DOM.projectModal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  closeProjectModal() {
    DOM.projectModal?.classList.remove('open');
    DOM.projectModal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  bindCertificateModals() {
    document.querySelectorAll('.open-cert-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-cert-title') || 'Certificate Verification';
        const issuer = btn.getAttribute('data-cert-issuer') || 'Issuing Authority';
        const desc = btn.getAttribute('data-cert-desc') || 'Verified technical achievement.';

        if (DOM.modalCertTitle) DOM.modalCertTitle.textContent = title;
        if (DOM.modalCertIssuer) DOM.modalCertIssuer.textContent = `Issued By: ${issuer}`;
        if (DOM.modalCertDesc) DOM.modalCertDesc.textContent = desc;

        if (DOM.modalCertLink) {
          DOM.modalCertLink.href = `mailto:apekshaar835@gmail.com?subject=Certificate%20Verification%20-%20${encodeURIComponent(title)}`;
        }

        DOM.certModal?.classList.add('open');
        DOM.certModal?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeCert = () => {
      DOM.certModal?.classList.remove('open');
      DOM.certModal?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    DOM.closeCertModal?.addEventListener('click', closeCert);
    DOM.modalCertDismiss?.addEventListener('click', closeCert);
    DOM.certModal?.addEventListener('click', (e) => {
      if (e.target === DOM.certModal) closeCert();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.certModal?.classList.contains('open')) {
        closeCert();
      }
    });
  },

  bindResumeModal() {
    const openResume = (e) => {
      e?.preventDefault();
      DOM.resumeModal?.classList.add('open');
      DOM.resumeModal?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeResume = () => {
      DOM.resumeModal?.classList.remove('open');
      DOM.resumeModal?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    DOM.navResumeTrigger?.addEventListener('click', openResume);
    DOM.heroResumeTrigger?.addEventListener('click', openResume);
    DOM.closeResumeModal?.addEventListener('click', closeResume);
    DOM.modalResumeDismiss?.addEventListener('click', closeResume);
    DOM.resumeModal?.addEventListener('click', (e) => {
      if (e.target === DOM.resumeModal) closeResume();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.resumeModal?.classList.contains('open')) {
        closeResume();
      }
    });
  }
};

/* -------------------------------------------------------------------
   9. INTERACTIVE CONTACT FORM WITH VALIDATION & FEEDBACK
   ------------------------------------------------------------------- */
const ContactFormHandler = {
  init() {
    if (!DOM.contactForm) return;

    DOM.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Real-time error removal
    [DOM.contactName, DOM.contactEmail, DOM.contactSubject, DOM.contactMessage].forEach(input => {
      input?.addEventListener('input', () => {
        input.classList.remove('input-error');
        const errorEl = document.getElementById(`${input.name}-error`);
        if (errorEl) errorEl.textContent = '';
      });
    });
  },

  validate() {
    let isValid = true;
    const nameVal = DOM.contactName.value.trim();
    const emailVal = DOM.contactEmail.value.trim();
    const subjectVal = DOM.contactSubject.value.trim();
    const messageVal = DOM.contactMessage.value.trim();

    // Name Validation
    if (!nameVal || nameVal.length < 2) {
      this.setError(DOM.contactName, DOM.nameError, 'Please enter your full name (minimum 2 characters).');
      isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailPattern.test(emailVal)) {
      this.setError(DOM.contactEmail, DOM.emailError, 'Please enter a valid email address.');
      isValid = false;
    }

    // Subject Validation
    if (!subjectVal || subjectVal.length < 3) {
      this.setError(DOM.contactSubject, DOM.subjectError, 'Please enter a clear subject for your message.');
      isValid = false;
    }

    // Message Validation
    if (!messageVal || messageVal.length < 10) {
      this.setError(DOM.contactMessage, DOM.messageError, 'Please provide message details (minimum 10 characters).');
      isValid = false;
    }

    return isValid;
  },

  setError(input, errorElement, message) {
    if (input) input.classList.add('input-error');
    if (errorElement) errorElement.textContent = message;
  },

  handleSubmit() {
    if (!this.validate()) return;

    const name = DOM.contactName.value.trim();
    const email = DOM.contactEmail.value.trim();
    const subject = DOM.contactSubject.value.trim();
    const message = DOM.contactMessage.value.trim();

    // Disable submit button temporarily
    if (DOM.contactSubmitBtn) {
      DOM.contactSubmitBtn.disabled = true;
      DOM.contactSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Message...';
    }

    setTimeout(() => {
      // Trigger festive confetti if canvas-confetti library is loaded
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      // Show success notification in form
      if (DOM.formFeedback) {
        DOM.formFeedback.className = 'form-feedback success';
        DOM.formFeedback.classList.remove('hidden');
        DOM.formFeedback.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your message has been prepared.
          <br>
          <span style="font-size: 0.85rem;">Click below if you would like your mail client to dispatch this directly to <strong>${portfolioData.profile.email}</strong>:</span>
          <br>
          <a href="mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Apeksha,\n\n${message}\n\nFrom: ${name} (${email})`)}" 
             class="btn btn-sm btn-primary" style="margin-top: 0.6rem;">
            <i class="fa-solid fa-envelope-open-text"></i> Open in Email Client
          </a>
        `;
      }

      // Reset form fields
      DOM.contactForm.reset();

      // Restore submit button
      if (DOM.contactSubmitBtn) {
        DOM.contactSubmitBtn.disabled = false;
        DOM.contactSubmitBtn.innerHTML = '<span class="btn-text">Message Prepared</span> <i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          DOM.contactSubmitBtn.innerHTML = '<span class="btn-text">Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
        }, 4000);
      }
    }, 600);
  }
};

/* -------------------------------------------------------------------
   10. INTERACTIVE DYNAMIC CURSOR & CARD TILT SPOTLIGHT
   ------------------------------------------------------------------- */
const CursorAndDynamics = {
  cursorDot: document.getElementById('cursor-dot'),
  cursorHalo: document.getElementById('cursor-halo'),
  heroSpotlight: document.getElementById('hero-spotlight'),
  heroSection: document.getElementById('hero'),
  
  mouseX: window.innerWidth / 2,
  mouseY: window.innerHeight / 2,
  haloX: window.innerWidth / 2,
  haloY: window.innerHeight / 2,
  isMoving: false,

  init() {
    if (!this.cursorDot || !this.cursorHalo) return;

    // Check if device supports hover (disable on touchscreen phones)
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      this.cursorDot.style.display = 'none';
      this.cursorHalo.style.display = 'none';
      return;
    }

    this.bindCursorMovement();
    this.bindHoverInteractions();
    this.bindCardTiltEffect();
    this.bindPhotoSwitcher();
    this.renderHalo();
  },

  bindCursorMovement() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.isMoving = true;

      // Position inner dot instantly for razor-sharp response
      this.cursorDot.style.left = `${this.mouseX}px`;
      this.cursorDot.style.top = `${this.mouseY}px`;
      this.cursorDot.style.opacity = '1';
      this.cursorHalo.style.opacity = '1';

      // Move hero ambient spotlight if in hero section
      if (this.heroSpotlight && this.heroSection) {
        const rect = this.heroSection.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          this.heroSpotlight.style.left = `${e.clientX}px`;
          this.heroSpotlight.style.top = `${e.clientY - rect.top}px`;
        }
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      this.cursorDot.style.opacity = '0';
      this.cursorHalo.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.cursorDot.style.opacity = '1';
      this.cursorHalo.style.opacity = '1';
    });

    window.addEventListener('mousedown', () => {
      this.cursorHalo.classList.add('cursor-click');
    });

    window.addEventListener('mouseup', () => {
      this.cursorHalo.classList.remove('cursor-click');
    });
  },

  // Smooth trailing halo loop using lerp (Linear Interpolation)
  renderHalo() {
    const lerp = (start, end, factor) => start + (end - start) * factor;
    
    const animate = () => {
      if (this.isMoving) {
        this.haloX = lerp(this.haloX, this.mouseX, 0.16);
        this.haloY = lerp(this.haloY, this.mouseY, 0.16);
        this.cursorHalo.style.left = `${this.haloX}px`;
        this.cursorHalo.style.top = `${this.haloY}px`;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  },

  bindHoverInteractions() {
    const interactiveSelectors = [
      'a', 'button', 'input', 'textarea', 
      '.project-card', '.skill-tab', '.filter-btn', 
      '.social-pill', '.photo-pill-btn', '.badge', '.stat-box'
    ];

    const targets = document.querySelectorAll(interactiveSelectors.join(', '));

    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursorHalo.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursorHalo.classList.remove('cursor-hover');
      });
    });
  },

  // 3D Tilt & Cursor Spotlight Beam on Cards
  bindCardTiltEffect() {
    const cards = document.querySelectorAll(
      '.project-card, .tilt-card, .skill-category-card, .achievement-card, .cert-card, .leadership-card, .flagship-card, .stat-box'
    );

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update spotlight position CSS variables
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Subtle 3D tilt calculation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.setProperty('--mouse-x', '-500px');
        card.style.setProperty('--mouse-y', '-500px');
      });
    });
  },

  // Interactive Photo Switcher
  bindPhotoSwitcher() {
    const featuredImg = document.getElementById('about-featured-img');
    const buttons = document.querySelectorAll('.photo-pill-btn');

    if (!featuredImg || !buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const newSrc = btn.getAttribute('data-img');
        if (!newSrc || featuredImg.src.includes(newSrc)) return;

        // Smooth fade transition
        featuredImg.style.opacity = '0.2';
        featuredImg.style.transform = 'scale(0.97)';
        
        setTimeout(() => {
          featuredImg.src = newSrc;
          featuredImg.onload = () => {
            featuredImg.style.opacity = '1';
            featuredImg.style.transform = 'scale(1)';
          };
        }, 180);
      });
    });
  }
};

/* -------------------------------------------------------------------
   11. APPLICATION INITIALIZATION
   ------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  TypingEffect.init();
  NavigationManager.init();
  ScrollAnimations.init();
  SkillsFilter.init();
  ProjectsController.init();
  ContactFormHandler.init();
  CursorAndDynamics.init();

  console.log(
    `%c Apeksha A R Portfolio %c Built with clean HTML5, CSS3, & Modern JS`,
    'background: #6366f1; color: #fff; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;',
    'background: #06b6d4; color: #fff; padding: 4px 8px; border-radius: 0 4px 4px 0;'
  );
});

