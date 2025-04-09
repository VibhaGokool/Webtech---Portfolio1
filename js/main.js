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


