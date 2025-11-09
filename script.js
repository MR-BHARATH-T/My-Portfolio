//script.js
// Optimized loading - removed since we handle it inline in HTML
// This reduces JavaScript execution time

// Global data variable - will be loaded from JSON
let portfolioData = null;

// Load data from JSON file
async function loadPortfolioData() {
  try {
    const response = await fetch('data.json');
    portfolioData = await response.json();
    populateContent();
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
    // Fallback to inline data if JSON fails
    portfolioData = {
      "personal": {
        "name": "BHARATH THIMMAPPA",
        "careerObjective": "A passionate fresher with a solid foundation in Machine Learning and Cybersecurity. Eager to contribute, collaborate with professionals, and grow in a dynamic IT environment. Looking for an entry-level role to apply skills and embrace new challenges."
      },
      "education": [
        {
          "level": "SSLC (Metric)",
          "school": "SAV High School",
          "location": "Bhadravathi, Shimoga, Karnataka",
          "years": "2016 - 2019"
        },
        {
          "level": "PUC (Intermediate)",
          "school": "BGS Gurukula PU College",
          "location": "Bhadravathi, Shimoga, Karnataka",
          "years": "2019 - 2021"
        },
        {
          "level": "UG (Bachelor's)",
          "school": "National Degree College",
          "location": "Basavanagudi, Bengaluru, Karnataka",
          "years": "2021 - 2024"
        },
        {
          "level": "PG (Master's)",
          "school": "REVA University",
          "location": "Yelahanka, Bengaluru, Karnataka",
          "years": "2024 - 2026"
        }
      ],
      "certifications": {
        "courseCertificates": "https://drive.google.com/drive/folders/1bhSNYhnsPxwURn1Hi39wfJ9YtfdPVGbm",
        "extraCurricular": "https://drive.google.com/drive/folders/1EcFeZLFMs10sptlT6xpR9BSqqJ4-1N4w",
        "internshipCertificates": "https://drive.google.com/drive/folders/1ABAAZV_TPjbcxGXcP7xTYaIhjqOoz2VF"
      },
      "internships": [
        {
          "title": "Cybersecurity Intern",
          "provider": "Edunet Collaboration with IBM SkillsBuild",
          "duration": "Jan 2025 - Feb 2025",
          "description": "Worked on building responsive web-based IMAGE STEGANOGRAPHY APPLICATION using Flask, OpenCV, and Python to securely hide and retrieve messages within images.",
          "sourceCode": "https://github.com/MR-BHARATH-T/Steganography",
          "certificate": "https://drive.google.com/file/d/1apOUW2WROPWxfP7dvnC0kRhZB74J-Whd/preview"
        },
        {
          "title": "ML Intern",
          "provider": "PANTECH E-LEARNING",
          "duration": "Jan 2024 - March 2024",
          "description": "Worked on an Image Segmentation Model to predict the objects in the Image. The code segments the image to identify blue regions, likely representing the duck, and draws bounding boxes around them.",
          "sourceCode": "https://github.com/MR-BHARATH-T/IMAGE-SEGMENTATION",
          "certificate": "https://drive.google.com/file/d/1qH7B4_bQafGORFJa1U61q8RtKdUmg-wl/preview"
        },
        {
          "title": "AI & Data Analyst Intern",
          "provider": "Edunet Collaboration with Shell",
          "duration": "Dec 2024 - Jan 2025",
          "description": "I worked on building an NLP-based intent classification model and integrating it with a Streamlit interface, gaining practical experience in end-to-end AI chatbot development.",
          "sourceCode": "https://github.com/MR-BHARATH-T/Intents-Based-Chatbot",
          "certificate": "https://drive.google.com/file/d/1T4FDCinYWe9rmoaos5QVE6nSfZHDJwF7/preview"
        },
        {
          "title": "Frontend Web Developer Intern",
          "provider": "Edunet Collaboration with IBM SkillsBuild",
          "duration": "Aug 2025 - Sept 2025",
          "description": "An intelligent web application that helps users discover amazing recipes using the Edamam Meal Planner API. Enter the ingredients you have, filter by meal type and calorie range, and instantly get delicious recipes tailored to your needs.",
          "sourceCode": "https://github.com/MR-BHARATH-T/Interactive-Recipe-Finder",
          "certificate": "https://drive.google.com/file/d/1XS_6lylW2yjk-CqhVTepuBhCUB7JX8Js/preview"
        },
        {
          "title": "Python Developer Intern",
          "provider": "Vault Of Codes",
          "duration": "June 2025 - July 2025",
          "description": "A modern, web-based expense tracker built with Streamlit. Easily track your daily expenses, view visual summaries, and manage your spending with user-friendly charts and dashboards.",
          "sourceCode": "https://github.com/MR-BHARATH-T/Expense-Tracker",
          "certificate": "https://drive.google.com/file/d/1Vs1CRNTJTv8eqb1zS0ew6RRnNksmiPc3/preview"
        },
        {
          "title": "AI / ML Intern",
          "provider": "Infosys SpringBoard",
          "duration": "Sept 2025 - Nov 2025",
          "description": "The AI AgroBot is an intelligent chatbot designed to assist farmers and agricultural enthusiasts by providing context-aware, multilingual guidance on farming practices such as crop management, soil health, fertilizer recommendations, and pest control.",
          "sourceCode": "https://github.com/MR-BHARATH-T/InfosysSpringboard-Virtual_Internship",
          "certificate": "https://drive.google.com/file/d/1qH7B4_bQafGORFJa1U61q8RtKdUmg-wl/preview"
        }
      ],
      "projects": [
        {
          "title": "College Event Handler",
          "skills": "HTML, CSS, JavaScript, Bootstrap 5, PHP, MySQL, XAMPP",
          "description": "The College Event Management System is a web-based application developed for digitizing and streamlining the management of college events. It facilitates the organization of inter-college activities by providing a centralized, user-friendly, and efficient solution for event creation, scheduling, registration management, and publishing of reports and articles. The application allows admins, faculty, and students to interact with event-related operations from a responsive web interface, improving coordination and reducing manual workloads. Key functionalities include modules for user management, event handling, department creation, reporting, and article management, all accessible with secure access controls.",
          "sourceCode": "https://github.com/MR-BHARATH-T/College-Event-Management",
          "details": "College Event Handler - Details"
        },
        {
          "title": "Hide And Seek",
          "skills": "Java (JDK 8+), Java Swing, MySQL (via JDBC), SHA-256 for password hashing; AES for encryption; SecureRandom for password/token generation, Custom LSB algorithm for PNG/BMP/GIF, Libraries (javax.crypto, java.sql, java.awt, javax.swing, java.imageio)",
          "description": "The HIDE AND SEEK Java application is a secure desktop platform that integrates user authentication, encryption, and steganography to protect sensitive digital information.",
          "sourceCode": "https://github.com/MR-BHARATH-T/HIDE-AND-SEEK",
          "details": "Hide And Seek - Details"
        }
      ],
      "skills": [
        {
          "name": "HTML5",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          "name": "CSS3",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          "name": "JavaScript",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          "name": "SQL",
          "icon": "https://unpkg.com/@tabler/icons@latest/icons/outline/database.svg"
        },
        {
          "name": "AI / ML",
          "icon": "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brain.svg"
        },
        {
          "name": "C Program",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },
        {
          "name": "Python",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        {
          "name": "MySQL",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
          "name": "Cybersecurity",
          "icon": "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shield-check.svg"
        },
        {
          "name": "Git",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
          "name": "Java",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
          "name": "Kali Linux",
          "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg"
        }
      ],
      "social": {
        "linkedin": "https://www.linkedin.com/in/bharath-thimmappa/",
        "github": "https://github.com/MR-BHARATH-T"
      }
    };
    populateContent();
  }
}

// Populate content dynamically
function populateContent() {
  if (!portfolioData) return;

  // Update personal info
  updatePersonalInfo();

  // Update education
  updateEducation();

  // Update internships
  updateInternships();

  // Update projects
  updateProjects();

  // Update skills
  updateSkills();

  // Update social links
  updateSocialLinks();
}

// Update personal information
function updatePersonalInfo() {
  const brand = document.querySelector('.navbar-brand');
  if (brand) {
    brand.textContent = portfolioData.personal.name;
  }

  const careerText = document.querySelector('#career-objective');
  if (careerText) {
    // Start typing animation for career objective
    typeWriter(careerText, portfolioData.personal.careerObjective);
  }
}

// Update education section
function updateEducation() {
  const educationContainer = document.querySelector('#education .row');
  if (!educationContainer) return;

  educationContainer.innerHTML = '';

  portfolioData.education.forEach((edu, index) => {
    const colClass = index === 3 ? 'col-md-6 col-lg-3' : 'col-md-6 col-lg-3';
    const aosDelay = (index * 50).toString();

    const card = `
      <div class="${colClass}" data-aos="fade-right" data-aos-delay="${aosDelay}">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${edu.level}</h5>
            <p class="card-text mb-1"><strong>School:</strong> ${edu.school}</p>
            <p class="card-text mb-1"><strong>Location:</strong> ${edu.location}</p>
            <p class="card-text mb-3"><strong>Years:</strong> ${edu.years}</p>
          </div>
        </div>
      </div>
    `;
    educationContainer.insertAdjacentHTML('beforeend', card);
  });
}

// Update internships section
function updateInternships() {
  const internshipsContainer = document.querySelector('#internships .row');
  if (!internshipsContainer) return;

  internshipsContainer.innerHTML = '';

  portfolioData.internships.forEach((internship, index) => {
    const aosClass = index % 2 === 0 ? 'fade-right' : 'fade-left';
    const aosDelay = (index * 50).toString();

    const card = `
      <div class="col-md-6" data-aos="${aosClass}" data-aos-delay="${aosDelay}">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${internship.title}</h5>
            <p class="mb-1"><strong>Provider:</strong> ${internship.provider}</p>
            <p class="mb-1"><strong>Duration:</strong> ${internship.duration}</p>
            <p class="mb-3"><strong>Description:</strong> <span class="text-muted">${internship.description}</span></p>

            <div class="mt-auto d-flex gap-2">
              <a class="card-link btn btn-sm btn-outline-primary" href="${internship.sourceCode}" target="_blank" rel="noopener">Source Code</a>
              <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#certIntern${index + 1}">View Certificate</button>
            </div>
          </div>
        </div>
      </div>
    `;
    internshipsContainer.insertAdjacentHTML('beforeend', card);
  });
}

// Update projects section
function updateProjects() {
  const projectsContainer = document.querySelector('#projects .row.mt-2');
  if (!projectsContainer) return;

  projectsContainer.innerHTML = '';

  portfolioData.projects.forEach((project, index) => {
    const aosDelay = (index * 50).toString();

    const card = `
      <div class="col-md-6" data-aos="fade-up" data-aos-delay="${aosDelay}">
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.title}</h5>
            <p class="mb-1"><strong>Skills:</strong> ${project.skills}</p>
            <p class="mb-3 text-muted">${project.description}</p>
            <div class="mt-auto d-flex gap-2">
              <a class="btn btn-sm btn-outline-primary" href="${project.sourceCode}" target="_blank" rel="noopener">Source Code</a>
              <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#project${index + 1}Details">Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
    projectsContainer.insertAdjacentHTML('beforeend', card);
  });
}

// Update skills section with lazy loading
function updateSkills() {
  const skillsContainer = document.querySelector('#skills .row.g-3.mt-3');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = '';

  portfolioData.skills.forEach((skill, index) => {
    const aosDelay = (index * 30).toString();

    const card = `
      <div class="col-6 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="${aosDelay}">
        <div class="skill-card p-3 rounded shadow-sm text-center">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNmOGY5ZmEiLz4KPHN2ZyB4PSIyNSUiIHk9IjI1JSIgd2lkdGg9IjUwJSIgaGVpZ2h0PSI1MCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY3ZWVhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIyIDIyTDIgMiIvPjxwYXRoIGQ9Ik0yMiAyTDIgMjIiLz48L3N2Zz4KPC9zdmc+" alt="${skill.name}" class="skill-icon mb-2" data-src="${skill.icon}" loading="lazy" />
          <div class="fw-semibold">${skill.name}</div>
        </div>
      </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', card);
  });

  // Lazy load skill icons
  const skillIcons = skillsContainer.querySelectorAll('.skill-icon[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  skillIcons.forEach(img => imageObserver.observe(img));
}

// Update social links
function updateSocialLinks() {
  const linkedinLink = document.querySelector('footer a[href*="linkedin"]');
  const githubLink = document.querySelector('footer a[href*="github"]');

  if (linkedinLink) {
    linkedinLink.href = portfolioData.social.linkedin;
  }
  if (githubLink) {
    githubLink.href = portfolioData.social.github;
  }
}

// Load data when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadPortfolioData();
});

// Performance monitoring
function logPerformanceMetrics() {
  if ('performance' in window) {
    const perfData = performance.getEntriesByType('navigation')[0];
    const loadTime = perfData.loadEventEnd - perfData.fetchStart;
    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.fetchStart;
    const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
    const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

    console.log('Performance Metrics:');
    console.log(`Page Load Time: ${loadTime.toFixed(2)}ms`);
    console.log(`DOM Content Loaded: ${domContentLoaded.toFixed(2)}ms`);
    console.log(`First Paint: ${firstPaint.toFixed(2)}ms`);
    console.log(`First Contentful Paint: ${firstContentfulPaint.toFixed(2)}ms`);

    // Log to localStorage for persistence
    const metrics = {
      timestamp: new Date().toISOString(),
      loadTime,
      domContentLoaded,
      firstPaint,
      firstContentfulPaint
    };
    localStorage.setItem('performanceMetrics', JSON.stringify(metrics));
  }
}

// Log performance after load
window.addEventListener('load', logPerformanceMetrics);

// Initialize AOS with optimized settings for better performance
AOS.init({
  duration: 600, // Further reduced duration for faster animations
  easing: 'ease-out-quart',
  once: false, // Allow re-animation for bidirectional transitions
  mirror: true, // Enable mirror for bidirectional scroll animations
  offset: 100, // Increased offset to trigger later
  delay: 0, // No delay
  throttleDelay: 99, // Increased throttle for performance
  debounceDelay: 50
});

// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling offset (handles fixed navbar)
document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const navOffset = 72; // should match body padding-top
    const top = target.getBoundingClientRect().top + window.pageYOffset - navOffset + 6;
    window.scrollTo({ top, behavior: 'smooth' });
    // collapse mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// Scrollspy active link handling (bootstrap auto-updates; ensure refresh after DOM loaded)
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNavbar',
  offset: 80
});

// Intersection Observer for dynamic navbar updates
const sectionObserverOptions = {
  threshold: 0.3, // Section is considered "in view" when 30% visible
  rootMargin: '-80px 0px -20% 0px' // Account for fixed navbar
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      updateNavbarForSection(entry.target.dataset.section, entry.target.querySelector('h2')?.textContent || entry.target.id);
    }
  });
}, sectionObserverOptions);

// Observe all sections
document.querySelectorAll('section[id], header[id]').forEach(section => {
  if (section.dataset.section) {
    sectionObserver.observe(section);
  }
});

// Update navbar with current section name and theme
function updateNavbarForSection(sectionType, sectionName) {
  const navbar = document.querySelector('#mainNavbar');
  const brand = document.querySelector('.navbar-brand');

  // Remove all section-specific classes
  navbar.classList.remove('navbar-career', 'navbar-education', 'navbar-certifications', 'navbar-internships', 'navbar-projects', 'navbar-skills');

  if (sectionType) {
    // Update brand text based on section
    let displayName = sectionName;
    if (sectionType === 'career') displayName = 'Career Objective';
    else if (sectionType === 'education') displayName = 'Education';
    else if (sectionType === 'certifications') displayName = 'Certifications';
    else if (sectionType === 'internships') displayName = 'Internships';
    else if (sectionType === 'projects') displayName = 'Projects';
    else if (sectionType === 'skills') displayName = 'Technical Skills';

    brand.textContent = `BHARATH THIMMAPPA - ${displayName}`;

    // Removed section-specific class addition to keep color static
  } else {
    brand.textContent = 'BHARATH THIMMAPPA';
  }
}

// Fallback for scrollspy events
document.body.addEventListener('activate.bs.scrollspy', () => {
  const activeLink = document.querySelector('#mainNavbar .nav-link.active');
  if (activeLink) {
    const sectionId = activeLink.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section && section.dataset.section) {
      updateNavbarForSection(section.dataset.section, section.querySelector('h2')?.textContent || section.id);
    }
  }
});

// Navbar scroll effect - removed duplicate, now handled in optimized scroll handler above

// Advanced scroll-triggered animations - optimized for performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: '100px 0px -100px 0px' // Increased root margin for earlier loading
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    } else {
      // Remove class for bidirectional animation - only if not preferring reduced motion
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        entry.target.classList.remove('revealed');
      }
    }
  });
}, observerOptions);

// Apply scroll animations to various elements - reduced for performance
document.querySelectorAll('.card').forEach(card => {
  card.classList.add('scroll-reveal');
  observer.observe(card);
});

document.querySelectorAll('.skill-card').forEach(card => {
  card.classList.add('scroll-scale');
  observer.observe(card);
});

document.querySelectorAll('section h2').forEach(heading => {
  heading.classList.add('scroll-reveal');
  observer.observe(heading);
});

// Removed button animations for performance

// Parallax effect - removed duplicate, now handled in optimized scroll handler above

// Optimized particle background effect - reduced particles for better performance
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);

  // Reduced from 15 to 8 particles for better performance
  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 2 + 1 + 'px'; // Smaller particles
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 4 + 's'; // Shorter delay range
    particlesContainer.appendChild(particle);
  }
}

// Create particles after DOM is ready but before load event
document.addEventListener('DOMContentLoaded', createParticles);

// Mouse follow effect for hero section
const hero = document.querySelector('header');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
  });
}

// Skill card interaction enhancement
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.animationPlayState = 'running';
  });

  card.addEventListener('mouseleave', () => {
    card.style.animationPlayState = 'paused';
  });
});

// Typing effect for career objective
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  const startTime = performance.now();

  function type(currentTime) {
    const elapsed = currentTime - startTime;
    const charsToShow = Math.floor(elapsed / speed);

    if (charsToShow > i && i < text.length) {
      element.textContent = text.substring(0, charsToShow);
      i = charsToShow;
    }

    if (i < text.length) {
      requestAnimationFrame(type);
    }
  }

  requestAnimationFrame(type);
}

// Performance optimization: use passive scroll listeners and requestAnimationFrame
let ticking = false;

function handleScroll() {
  // Throttled scroll handlers using requestAnimationFrame
  if (!ticking) {
    requestAnimationFrame(() => {
      // Parallax effect - optimized
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const parallaxElements = document.querySelectorAll('.parallax');
      const scrolled = scrollTop;
      const rate = scrolled * -0.5;

      parallaxElements.forEach(element => {
        if (element.classList.contains('slow')) {
          element.style.setProperty('--parallax-y', `${rate * 0.5}px`);
        } else if (element.classList.contains('fast')) {
          element.style.setProperty('--parallax-y', `${rate * 1.5}px`);
        }
      });

      ticking = false;
    });
    ticking = true;
  }
}

// Use passive scroll listener for better performance
window.addEventListener('scroll', handleScroll, { passive: true });

// ===== DARK MODE TOGGLE FUNCTIONALITY =====
/**
 * Dark Mode Toggle Functionality
 * Handles smooth transitions, localStorage, and UI updates
 */
class DarkModeToggle {
  constructor() {
    this.isDark = false;
    this.toggleButton = document.getElementById('darkModeToggle');
    this.icon = document.getElementById('darkModeIcon');
    this.body = document.body;
    
    this.init();
  }

  init() {
    // Load saved preference or detect system preference
    this.loadSavedPreference();
    
    // Set up event listener
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this.toggle());
    }

    // Add keyboard support
    if (this.toggleButton) {
      this.toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle();
        }
      });
    }

    // Add hover effects for the toggle button
    this.addButtonEffects();
  }

  loadSavedPreference() {
    // Check localStorage first
    const savedPreference = localStorage.getItem('darkMode');
    
    if (savedPreference !== null) {
      this.isDark = savedPreference === 'true';
    } else {
      // If no saved preference, check system preference
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply the preference and update UI immediately
    this.applyMode();
    this.updateUI();
  }

  toggle() {
    this.isDark = !this.isDark;
    this.applyMode();
    this.savePreference();
    this.updateUI();
    
    // Add a subtle animation class
    this.body.style.transition = 'all 0.3s ease';
    
    // Remove transition after animation completes
    setTimeout(() => {
      this.body.style.transition = '';
    }, 300);
  }

  applyMode() {
    if (this.isDark) {
      this.body.classList.add('dark-mode');
    } else {
      this.body.classList.remove('dark-mode');
    }
  }

  savePreference() {
    localStorage.setItem('darkMode', this.isDark.toString());
  }

  updateUI() {
    if (this.icon) {
      // Smooth icon transition
      this.icon.style.transform = 'rotate(180deg) scale(0)';
      
      setTimeout(() => {
        // Change icon
        this.icon.className = this.isDark ? 'fas fa-sun' : 'fas fa-moon';
        this.icon.style.transform = 'rotate(0deg) scale(1)';
      }, 150);
    }

    // Update button title for accessibility
    if (this.toggleButton) {
      this.toggleButton.title = this.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // Add visual feedback
    this.addVisualFeedback();
  }

  addButtonEffects() {
    if (!this.toggleButton) return;

    this.toggleButton.addEventListener('mouseenter', () => {
      this.toggleButton.style.transform = 'scale(1.1)';
      this.toggleButton.style.backgroundColor = this.isDark ?
        'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    });

    this.toggleButton.addEventListener('mouseleave', () => {
      this.toggleButton.style.transform = 'scale(1)';
      this.toggleButton.style.backgroundColor = 'transparent';
    });

    this.toggleButton.addEventListener('mousedown', () => {
      this.toggleButton.style.transform = 'scale(0.95)';
    });

    this.toggleButton.addEventListener('mouseup', () => {
      this.toggleButton.style.transform = 'scale(1.1)';
    });
  }

  addVisualFeedback() {
    // Create a subtle ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.background = this.isDark ?
      'radial-gradient(circle, rgba(76, 81, 191, 0.3) 0%, transparent 70%)' :
      'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    ripple.style.transition = 'all 0.6s ease';

    document.body.appendChild(ripple);

    // Animate the ripple
    setTimeout(() => {
      ripple.style.width = '100vmax';
      ripple.style.height = '100vmax';
    }, 10);

    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Public method to programmatically set mode
  setMode(isDark) {
    this.isDark = isDark;
    this.applyMode();
    this.savePreference();
    this.updateUI();
  }

  // Public method to get current mode
  getMode() {
    return this.isDark;
  }
}

// Initialize dark mode toggle when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for other scripts to load
  setTimeout(() => {
    window.darkModeToggle = new DarkModeToggle();
  }, 100);
});

// Listen for system preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const savedPreference = localStorage.getItem('darkMode');
  if (savedPreference === null) {
    // User hasn't set a manual preference, follow system
    if (window.darkModeToggle) {
      window.darkModeToggle.setMode(e.matches);
    }
  }
});

// ===== MODAL THEME FIXES =====
document.addEventListener('DOMContentLoaded', function() {
  // Fix modal backdrop and ensure proper theming
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // Check for new modals being added
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const modal = node.classList?.contains('modal') ? node : node.querySelector?.('.modal');
            if (modal) {
              fixModalTheme(modal);
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also fix existing modals
  document.querySelectorAll('.modal').forEach(modal => {
    fixModalTheme(modal);
  });
});

function fixModalTheme(modal) {
  if (!modal) return;
  
  // Add dark mode class to modal content if body has dark mode
  const modalContent = modal.querySelector('.modal-content');
  if (modalContent && document.body.classList.contains('dark-mode')) {
    modalContent.style.background = 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.9) 100%)';
    modalContent.style.color = 'var(--text-primary)';
  } else if (modalContent) {
    // Reset to default when not in dark mode
    modalContent.style.background = '';
    modalContent.style.color = '';
  }

  // Fix modal header
  const modalHeader = modal.querySelector('.modal-header');
  if (modalHeader && document.body.classList.contains('dark-mode')) {
    modalHeader.style.background = 'linear-gradient(135deg, rgba(76, 81, 191, 0.1) 0%, rgba(90, 79, 207, 0.1) 100%)';
    modalHeader.style.borderBottom = '1px solid var(--glass-border)';
  } else if (modalHeader) {
    modalHeader.style.background = '';
    modalHeader.style.borderBottom = '';
  }

  // Fix modal body
  const modalBody = modal.querySelector('.modal-body');
  if (modalBody && document.body.classList.contains('dark-mode')) {
    modalBody.style.background = 'linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.8) 100%)';
    modalBody.style.color = 'var(--text-primary)';
  } else if (modalBody) {
    modalBody.style.background = '';
    modalBody.style.color = '';
  }

  // Fix close button
  const closeBtn = modal.querySelector('.btn-close');
  if (closeBtn && document.body.classList.contains('dark-mode')) {
    closeBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.opacity = '0.8';
  } else if (closeBtn) {
    closeBtn.style.background = '';
    closeBtn.style.borderRadius = '';
    closeBtn.style.opacity = '';
  }
}

// Listen for modal show events to apply theme
document.addEventListener('show.bs.modal', function (event) {
  const modal = event.target;
  setTimeout(() => fixModalTheme(modal), 100); // Small delay to ensure modal is fully rendered
});

// Optional: keyboard accessibility - close modals with Escape is default by bootstrap
