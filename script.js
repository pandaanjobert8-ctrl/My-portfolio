// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode");
});

// AUTOMATIC COPYRIGHT YEAR
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();