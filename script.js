// GSAP Animations
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".logo", { opacity: 0, y: -20, duration: 1 });
    gsap.from("nav ul li", { opacity: 0, y: -20, duration: 1, stagger: 0.2 });
    gsap.from(".phone", { opacity: 0, x: 20, duration: 1 });
    gsap.from(".hero-content h1", { opacity: 0, x: -50, duration: 1 });
    gsap.from(".hero-content p", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 0.8, delay: 1 });
});

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
