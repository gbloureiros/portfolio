const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const $html = document.querySelector("html");

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let darkMode = darkModeMediaQuery.matches;

if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("display", "none");
} else {
  lightIcon.setAttribute("display", "none");
}

function toggleDarkMode() {
    darkMode = !darkMode;

    $html.classList.toggle("dark-mode");
  
    if (darkMode) {
      lightIcon.setAttribute("display", "block");
      darkIcon.setAttribute("display", "none");
    } else {
      lightIcon.setAttribute("display", "none");
      darkIcon.setAttribute("display", "block");
    }
}

var typed = new Typed('.auto-type', {
  strings: ['Developer'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section')

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 67;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id');
    
    if (top >= offset && top < offset + heightSection) {
      links.forEach(link => {
        link.classList.remove('actived');

        document.querySelector(`.header .navegacao ul li a[href*='${idSection}']`).classList.add('actived');
      })
    }
  })
});

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  let topSection = section.offsetTop - 67;

  window.scrollTo({
    top: topSection,
    behavior: 'smooth'
  })
};

links.forEach(link => {
  link.addEventListener('click', scrollSection)
});