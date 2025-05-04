// TOGGLE MENU ICON & NAVIGATION
let menuIcon = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navigation.classList.toggle("active");
};

// Optional: STICKY HEADER

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Optional: Close mobile menu on scroll
  menuIcon.classList.remove("fa-xmark");
  navigation.classList.remove("active");
};

// SCROLL REVEAL ANIMATIONS
ScrollReveal({
  // reset: true, // Uncomment if you want animations to replay on scroll up
  distance: "80px",
  duration: 2000,
  delay: 150, // Slightly reduced delay
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .portfolio-box, .contact form, .contact-info", {
  origin: "bottom",
}); // Updated targets
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" }); // Updated targets
ScrollReveal().reveal(".home-content p, .home-content .social-media-home, .about-content", {
  origin: "right",
}); // Updated targets

// TYPING TEXT EFFECT
const typed = new Typed(".type-text", {
  strings: ["BSIT Student", "Web Developer", "Frontend Enthusiast"], // Updated strings
  typeSpeed: 80, // Slightly adjusted speed
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});

// Optional: ACTIVE LINK SCROLL HIGHLIGHTING

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Sticky header logic from above can be combined here
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close mobile menu on scroll link click
  menuIcon.classList.remove("fa-xmark");
  navigation.classList.remove("active");
};
