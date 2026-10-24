// ---------- DARK / LIGHT MODE ----------
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "🌙 Dark mode" : "☀️ Light mode";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});

// ---------- REVEAL ANIMATION ----------
// Sections fade in as they enter the screen.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
} else {
  // Fallback for older browsers: show all content.
  revealItems.forEach(function (item) {
    item.classList.add("visible");
  });
}

// ---------- CURRENT YEAR IN FOOTER ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- SCROLL PROGRESS BAR ----------
const progress = document.getElementById("progress");
window.addEventListener("scroll", function () {
  const page = document.documentElement;
  const scrolled = page.scrollTop / (page.scrollHeight - page.clientHeight);
  progress.style.width = (scrolled * 100) + "%";
}, { passive: true });

// ---------- ROTATING ROLE IN THE HERO ----------
const roles = ["a coder", "a student", "a video editor", "a web designer", "an Android app creator", "an electronics learner"];
const roleEl = document.getElementById("role");
let roleIndex = 0;

setInterval(function () {
  roleEl.classList.add("out");
  setTimeout(function () {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.classList.remove("out");
  }, 350);
}, 2600);

// ---------- HIGHLIGHT THE CURRENT SECTION IN THE NAV ----------
const navLinks = document.querySelectorAll(".nav-links a");
const spy = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });

document.querySelectorAll("main section[id]").forEach(function (section) {
  spy.observe(section);
});
