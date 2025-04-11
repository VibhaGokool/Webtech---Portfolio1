document.addEventListener("DOMContentLoaded", function () {
  // ==========================
  // Mobile Navigation Toggle
  // ==========================
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      mobileMenuToggle.setAttribute(
        "aria-expanded",
        navLinks.classList.contains("open")
      );
    });

    document.addEventListener("click", function (event) {
      if (
        !navLinks.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
      ) {
        navLinks.classList.remove("open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ==========================
  // Accessibility Enhancers
  // ==========================
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        link.click();
      }
    });
  });

  // ==========================
  // Theme Toggle (Optional)
  // ==========================
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.setAttribute("aria-checked", isDark.toString());
      themeToggle.textContent = isDark ? "🌜" : "🌞";
    });
  }
});


