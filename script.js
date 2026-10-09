const skills = [
  { icon: "⌘", title: "Programming Languages", text: "Python" },
  { icon: "⌬", title: "Web Development", text: "HTML, CSS" },
  { icon: "◉", title: "Database", text: "" },
  { icon: "⌁", title: "Tools & Platforms", text: "Git, GitHub, VS Code" },
  { icon: "♚", title: "Other Skills", text: "Problem Solving, Teamwork, Communication" },
  { icon: "◌", title: "Currently Learning", text: "JavaScript, Django, Node.js" }
];

// Each project can list one or more links, e.g.:
// links: [{ label: "Live Demo", url: "https://..." }, { label: "Source Code", url: "https://github.com/..." }]
const projects = [
  {
    title: "Academic Work Tracker",
    description: "A web application to manage and track academic tasks, topics and progress.",
    image: "assets/images/projects/academic-tracker.jpg",
    fallback: "assets/images/projects/project-placeholder.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      { label: "Live Demo", url: "https://academic-tracker-lyart.vercel.app" }
    ]
  }
];

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

  grid.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-index="${index}">
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.title}"
          onerror="this.onerror=null;this.src='${project.fallback}'"
        >
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProjectModal(projects[card.dataset.index]));
  });
}

// ---------------- PROJECT MODAL ----------------
const projectModal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalLinks = document.getElementById("modalLinks");
const modalClose = document.getElementById("modalClose");

function openProjectModal(project) {
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalImage.onerror = () => {
    modalImage.onerror = null;
    modalImage.src = project.fallback;
  };

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");

  const links = project.links && project.links.length ? project.links : [{ label: "View Project", url: "#" }];
  modalLinks.innerHTML = links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener" class="btn btn-primary">${link.label} <span>↗</span></a>
  `).join("");

  projectModal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", e => {
  if (e.target === projectModal) closeProjectModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeProjectModal();
});

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
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("bright");
});

// ---------------- FOOTER YEAR ----------------
document.getElementById("year").textContent = new Date().getFullYear();

renderSkills();
renderProjects();
