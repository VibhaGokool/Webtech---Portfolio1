document.addEventListener("DOMContentLoaded", function () {
  // ======================= Dropdown =======================
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownMenu.classList.toggle("show");
      dropdownToggle.setAttribute(
        "aria-expanded",
        dropdownMenu.classList.contains("show")
      );
    });

    document.addEventListener("click", function (e) {
      if (
        !dropdownMenu.contains(e.target) &&
        !dropdownToggle.contains(e.target)
      ) {
        dropdownMenu.classList.remove("show");
        dropdownToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ======================= Mobile Nav =======================
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      toggleBtn.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
      );
    });

    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
        navLinks.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ======================= Accessibility Keyboard Support =======================
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        link.click();
      }
    });
  });

  // ======================= Active Page Detection =======================
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPage)) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
      link.addEventListener("click", (e) => e.preventDefault());
    }
  });

  // ======================= Project Cards =======================
  const projectsContainer = document.getElementById("projects-container");

  const projects = [
    {
      title: "Basic Webpage",
      description:
        "A responsive webpage demonstrating semantic HTML and CSS techniques.",
      link: "projects/feature-page.html",
    },
    {
      title: "Rock Paper Scissors",
      description: "Interactive game implementing core JavaScript logic.",
      link: "projects/rps-game.html",
    },
    {
      title: "Flatland Business Advisor",
      description:
        "DOM manipulation and interaction-based business advisory simulation.",
      link: "projects/flatland/flatland_0.html",
    },
    {
      title: "RSS Reader",
      description: "Fetch API used to display dynamic content from live RSS feeds.",
      link: "projects/rss-reader.html", // ✅ No trailing slash
    },
  ];

  if (projectsContainer) {
    projects.forEach((project) => {
      if (project.title && project.description && project.link) {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link">View Project</a>
        `;
        projectsContainer.appendChild(card);
      }
    });
  }
});




// Automatically remove trailing slashes from URLs like /rss-reader.html/
if (
  window.location.pathname.endsWith(".html/") ||
  window.location.pathname.endsWith(".htm/")
) {
  const fixed = window.location.pathname.replace(/\/+$/, ""); // remove trailing slash
  window.location.replace(fixed + window.location.search + window.location.hash);
}
