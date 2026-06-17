const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const contactSection = document.getElementById('contact');
const cvButton = document.getElementById('cvButton');
const nav = document.getElementById("nav");
const links = document.querySelectorAll("#nav a:not(.icon)");

function activateNavLink(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));

      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

function toggleHamburgerMenu() {
  if (nav.className === "navBig") {
    nav.className += " responsive";
  } else {
    nav.className = "navBig";
  }
}

function closeHamburgerMenu() {
  if (nav.className.includes("responsive")) {
    nav.className = "navBig";
  }
}

function toggleCvButton(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      cvButton.classList.add('visible');
    } else {
      cvButton.classList.remove('visible');
    }
  });
}

const navObserver = new IntersectionObserver(activateNavLink, { threshold: 1 });
sections.forEach((section) => navObserver.observe(section));

const cvObserver = new IntersectionObserver(toggleCvButton, { threshold: 0.5 });
cvObserver.observe(contactSection);

links.forEach((link) => link.addEventListener("click", closeHamburgerMenu));