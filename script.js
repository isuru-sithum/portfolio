// =====================================================
// PORTFOLIO CONTENT
// Edit this file to add, remove or change your projects.
// =====================================================

// ---------------- SKILLS ----------------
const skills = [
  { icon: "⌘", title: "Programming Languages", text: "Python" },
  { icon: "⌬", title: "Web Development", text: "HTML, CSS" },
  { icon: "◉", title: "Database", text: "" },
  { icon: "⌁", title: "Tools & Platforms", text: "Git, GitHub, VS Code" },
  { icon: "♚", title: "Other Skills", text: "Problem Solving, Teamwork, Communication" },
  { icon: "◌", title: "Currently Learning", text: "JavaScript, Django, Node.js" }
];

// ---------------- PROJECTS ----------------
// TO ADD A PROJECT:
// Copy one object below and paste it inside this array.
//
// image:
// Put your project image in assets/images/projects/
// Example: assets/images/projects/my-new-project.jpg
//
// url:
// Add a live project URL or GitHub URL. Use "#" if you don't have one yet.

const projects = [
  {
    title: "Academic Work Tracker",
    description: "A web application to manage and track academic tasks, topics and progress.",
    image: "assets/images/projects/academic-tracker.jpg",
    fallback: "assets/images/projects/project-placeholder.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://academic-tracker-lyart.vercel.app"
  },
  /* {
    title: "Travel Journal",
    description: "A full-stack web application for creating and managing travel stories.",
    image: "assets/images/projects/travel-journal.jpg",
    fallback: "assets/images/projects/project-placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    url: "#"
  },
  {
    title: "AI Chatbot",
    description: "A simple AI chatbot project using Python and natural language processing.",
    image: "assets/images/projects/ai-chatbot.jpg",
    fallback: "assets/images/projects/project-placeholder.svg",
    tags: ["Python", "NLP", "Machine Learning"],
    url: "#"
  }*/
];

// ---------------- RENDER FUNCTIONS ----------------
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skills.map(skill => `
    <article class="skill-card">
      <div class="skill-icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.text}</p>
    </article>
  `).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  if (projects.length === 0) {
    grid.innerHTML = `<p style="color:#9aa7bd">No projects have been added yet.</p>`;
    return;
  }

  grid.innerHTML = projects.map(project => `
    <article class="project-card">
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.title}"
          onerror="this.onerror=null;this.src='${project.fallback}'"
        >
      </div>
      <div class="project-content">
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener" aria-label="Open ${project.title}">↗</a>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// ---------------- NAVIGATION ----------------
const sections = [...document.querySelectorAll("main section[id], .scroll-target")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach(section => observer.observe(section));

// ---------------- MOBILE MENU ----------------
const menuBtn = document.getElementById("menuBtn");
const navLinksContainer = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
});

navLinks.forEach(link => link.addEventListener("click", () => {
  navLinksContainer.classList.remove("open");
}));

// ---------------- THEME BUTTON ----------------
// This currently gives a small brightness toggle.
// You can expand it into a full light theme later.
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("bright");
});

// ---------------- CONTACT SECTION ----------------
// Contact is details-only; no backend or form handling is required.

// ---------------- FOOTER YEAR ----------------
document.getElementById("year").textContent = new Date().getFullYear();

// Start page
renderSkills();
renderProjects();
