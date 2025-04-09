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
