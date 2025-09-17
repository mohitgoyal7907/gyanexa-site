// =======================
// Gyanexa Global Script
// =======================

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll(".card, .hero p, .hero h2");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Add class for animation
const style = document.createElement("style");
style.innerHTML = `
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: all 1s ease;
  }
  .card, .hero p, .hero h2 {
    opacity: 0;
    transform: translateY(30px);
  }
`;
document.head.appendChild(style);

// Console greeting
console.log("%cWelcome to Gyanexa 🌍 - Knowledge Beyond Borders!", "color: gold; font-size: 16px");
