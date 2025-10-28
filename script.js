// Responsive Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navLinks.classList.remove("show");
  });
});

// Contact Form Submission
document.querySelector("#contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting me! I will get back to you soon.");
  e.target.reset();
});
