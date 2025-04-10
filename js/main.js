// =======================
// Dropdown Menu Handling
// =======================

// Select the dropdown toggle button (anchor inside the .dropdown element)
const dropdownToggle = document.querySelector(".dropdown > a");

// Select the dropdown menu that will be shown/hidden
const dropdownMenu = document.querySelector(".dropdown-menu");

/**
 * Toggles the dropdown menu visibility when the toggle link is clicked.
 * Updates the ARIA-expanded attribute for accessibility.
 */
function toggleDropdown(event) {
  event.preventDefault(); // Prevents default anchor behavior (avoiding page reload)
  
  dropdownMenu.classList.toggle("show"); // Toggles the 'show' class to display/hide the menu
  
  // Updates ARIA-expanded attribute for screen readers to indicate menu state
  dropdownToggle.setAttribute(
    "aria-expanded",
    dropdownMenu.classList.contains("show")
  );
}

/**
 * Closes the dropdown if a click occurs outside of it.
 * Ensures the dropdown doesn't remain open unintentionally when clicking elsewhere.
 */
function closeDropdownOutside(event) {
  if (
    dropdownMenu && // Ensures dropdownMenu exists
    !dropdownMenu.contains(event.target) && // Click is not inside the dropdown menu
    !dropdownToggle.contains(event.target) // Click is not on the dropdown toggle
  ) {
    dropdownMenu.classList.remove("show"); // Hides the dropdown menu
    dropdownToggle.setAttribute("aria-expanded", "false"); // Updates ARIA-expanded attribute
  }
}

// Ensure elements exist before adding event listeners
if (dropdownToggle && dropdownMenu) {
  // Listen for click on dropdown toggle to open/close menu
  dropdownToggle.addEventListener("click", toggleDropdown);

  // Listen for clicks anywhere on the document to detect if menu should close
  document.addEventListener("click", closeDropdownOutside);
}



// ===========================
// Mobile Navigation Handling
// ===========================

// Select the mobile menu button and the navigation links container
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Ensure the elements exist before adding event listeners
if (mobileMenuToggle && navLinks) {
  
  /**
   * Toggles the navigation menu when the mobile menu button is clicked.
   * Updates ARIA-expanded attribute for accessibility.
   */
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open"); // Toggle 'open' class to show/hide menu

    // Update ARIA-expanded attribute to reflect menu state for screen readers
    mobileMenuToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );
  });

  /**
   * Closes the menu if the user clicks outside the navigation area.
   * Ensures unintended clicks don't leave the menu open.
   */
  document.addEventListener("click", function (event) {
    if (
      !navLinks.contains(event.target) && // Click is NOT inside nav links
      !mobileMenuToggle.contains(event.target) // Click is NOT on the toggle button
    ) {
      navLinks.classList.remove("open"); // Hide the menu
      mobileMenuToggle.setAttribute("aria-expanded", "false"); // Update ARIA-expanded state
    }
  });
}







// ========================
// Accessibility Enhancers
// ========================

/**
 * Enables keyboard navigation for links.
 * Allows users to activate links using the "Enter" key.
 * This improves accessibility, ensuring users who navigate with keyboards can interact with navigation links.
 */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      link.click(); // Simulates a click event when Enter is pressed
    }
  });
});

/**
 * Ensures dropdown menus are closed on initial page load.
 * Prevents any dropdown from being unintentionally visible when the page first renders.
 */
document.querySelectorAll(".dropdown-menu").forEach((menu) =>
  menu.classList.remove("show")
);

// ========================
// Project Portfolio Cards
// ========================

/**
 * An array containing project data for dynamic rendering.
 * Each project has a title, description, and link.
 */
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
    description:
      "Fetch API used to display dynamic content from live RSS feeds.",
    link: "projects/rss-reader.html",
  },
];

/**
 * Selects the container where project cards will be dynamically added.
 */
const projectsContainer = document.getElementById("projects-container");

// Ensures the container exists before attempting to add content
if (projectsContainer) {
  /**
   * Iterates through the projects array and creates an HTML structure for each project.
   * Only adds valid projects with title, description, and link properties.
   */
  projects.forEach((project) => {
    if (project.title && project.description && project.link) {
      // Create a new div element representing a project card
      const card = document.createElement("div");
      card.className = "project-card";

      // Define inner HTML structure using template literals for readability
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="project-link">View Project</a>
      `;

      // Append the newly created card to the projects container
      projectsContainer.appendChild(card);
    }
  });
}


// ========================
// Active Link Detection
// ========================
document.querySelectorAll(".nav-link").forEach(link => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g., 'feature-page.html'

  if (link.getAttribute("href")?.includes(currentPage)) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
    link.addEventListener("click", e => e.preventDefault()); // Prevent reload
  }
});


document.addEventListener("DOMContentLoaded", function () {
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
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square");
  const words = document.getElementById("words");

  if (words) {
    words.textContent = "Welcome to Flatland!";
  }

  if (square) {
    square.addEventListener("click", () => {
      square.style.backgroundColor = "red";
    });

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "green";
    });

    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "gray";
    });
  }
});



mobileMenuToggle.addEventListener("click", () => {
  console.log("Toggle button clicked");
  navLinks.classList.toggle("open");
  mobileMenuToggle.setAttribute(
    "aria-expanded",
    navLinks.classList.contains("open")
  );
});


