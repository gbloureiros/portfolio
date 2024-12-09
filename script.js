// Dark Mode

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

// Auto type

var typed = new Typed(".auto-type", {
  strings: ["Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Menu links

let links = document.querySelectorAll(".js-link");
let sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 67;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute("id");

    if (top >= offset && top < offset + heightSection) {
      links.forEach((link) => {
        link.classList.remove("actived");

        document
          .querySelector(`.header .navegacao ul li a[href*='${idSection}']`)
          .classList.add("actived");
      });
    }
  });
});

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  let topSection = section.offsetTop - 67;

  window.scrollTo({
    top: topSection,
    behavior: "smooth",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollSection);
});

// Imagens fullscreen

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image");
  const modal = document.getElementById("fullscreen-modal");
  const fullscreenImage = document.getElementById("fullscreen-image");
  const closeModal = document.getElementById("close");

  image.addEventListener("click", () => {
    fullscreenImage.src = image.src;
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image2");
  const modal = document.getElementById("fullscreen-modal2");
  const fullscreenImage = document.getElementById("fullscreen-image2");
  const closeModal = document.getElementById("close2");

  image.addEventListener("click", () => {
    fullscreenImage.src = image.src;
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("image3");
  const modal = document.getElementById("fullscreen-modal3");
  const fullscreenImage = document.getElementById("fullscreen-image3");
  const closeModal = document.getElementById("close3");

  image.addEventListener("click", () => {
    fullscreenImage.src = image.src;
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image4");
    const modal = document.getElementById("fullscreen-modal4");
    const fullscreenImage = document.getElementById("fullscreen-image4");
    const closeModal = document.getElementById("close4");

    image.addEventListener("click", () => {
      fullscreenImage.src = image.src;
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image5");
    const modal = document.getElementById("fullscreen-modal5");
    const fullscreenImage = document.getElementById("fullscreen-image5");
    const closeModal = document.getElementById("close5");

    image.addEventListener("click", () => {
      fullscreenImage.src = image.src;
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image6");
    const modal = document.getElementById("fullscreen-modal6");
    const fullscreenImage = document.getElementById("fullscreen-image6");
    const closeModal = document.getElementById("close6");

    image.addEventListener("click", () => {
      fullscreenImage.src = image.src;
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image7");
    const modal = document.getElementById("fullscreen-modal7");
    const fullscreenImage = document.getElementById("fullscreen-image7");
    const closeModal = document.getElementById("close7");

    image.addEventListener("click", () => {
      fullscreenImage.src = image.src;
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("image8");
    const modal = document.getElementById("fullscreen-modal8");
    const fullscreenImage = document.getElementById("fullscreen-image8");
    const closeModal = document.getElementById("close8");

    image.addEventListener("click", () => {
      fullscreenImage.src = image.src;
      modal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


// Trocar o idioma

document.addEventListener("DOMContentLoaded", () => {
  const activeFlag = document.getElementById("active-flag");
  const langButtons = document.querySelectorAll(".lang-button");

  const translations = {
    pt: {
      flag: "./src/images/bandeira brasil.png",
      alt: "Bandeira do Brasil",
      sobreMenu: "Sobre",
      projetosMenu: "Projetos",
      habilidadesMenu: "Habilidades",
      tituloSobre: "Sobre",
      tituloSobreSpan: "mim",
      nomeSobre: "me chamo Gabriel Loureiro",
      nomeSobreSpan: "Olá,",
      descricaoSobre:
        "Estou cursando Ciência da Computação na Unicarioca, além disso, faço um curso por fora da faculdade, chamado DevQuest Full-Stack, focado em frontend, mas com o básico do back-end. Também cursei dois anos de ensino técnico no Rezende Rammel durante o ensino médio, interrompendo o último ano devido à pandemia. Possuo conhecimentos avançados em HTML5 e CSS, além de noções básicas em Javascript, SQL, Power BI, Python e Pacote Office (Word, Excel, Power Point). Esses conhecimentos foram adquiridos através dos meus estudos pessoais, do técnico, do curso e da faculdade. Alguns projetos podem ser encontrados no meu GitHub.",
      curriculo: "Baixe meu currículo",
      algunsProjetos: "Alguns",
      algunsProjetosSpan: "Projetos",
      descricaoProjeto1:
        "Em outubro de 2020, desenvolvi em grupo um site utilizando html, css, javascript e php para um trabalho acadêmico.",
      descricaoProjeto2:
        "Site criado com html e css do desafio do Frontend Mentor e Quest do curso DevQuest.",
      descricaoProjeto3:
        "Site desenvolvido no curso DevQuest sobre a série de TV 'Casa do Dragão' utilizando html, css e javascript.",
        descricaoProjeto4: "Este projeto, feito para faculdade, é uma simulação em python que manipula uma bandeja com 100 dados com várias rotações aleatórias.",
        descricaoProjeto5: "Projeto criado na faculdade, em C++, que é uma árvore binária de busca.",
        descricaoProjeto6: "Meu próprio portfólio é um projeto meu e um dos melhores, feito em html, css e javascript.",
        descricaoProjeto7: "Site para se desculpar com alguém que você ama, criado como uma brincadeira.",
        descricaoProjeto8: "Site usado para testar código e estudo enquanto estava aprendendo desde o básico ao avançado no curso DevQuest Full-Stack.",
      ss1: "flexibilidade",
      ss2: "comunicação eficaz",
      ss3: "criatividade",
      ss4: "organização",
      ss5: "inteligência emocional",
      ss6: "adaptabilidade",
    },
    en: {
      flag: "./src/images/bandeira eua.png",
      alt: "Bandeira dos EUA",
      sobreMenu: "About",
      projetosMenu: "Projects",
      habilidadesMenu: "Skills",
      tituloSobre: "About",
      tituloSobreSpan: "me",
      nomeSobre: "I'm Gabriel Loureiro",
      nomeSobreSpan: "Hi,",
      descricaoSobre:
        "I'm studying Computer Science at Unicarioca, and I'm also taking a course outside of college called DevQuest Full-Stack, focused on the front-end, but with the basics of the back-end. I also attended two years of technical education at Rezende Rammel during high school, interrupting the last year due to the pandemic. I have advanced knowledge of HTML5 and CSS, as well as the basics of Javascript, SQL, Power BI, Python and the Office Package (Word, Excel, Power Point). This knowledge has been acquired through my personal, technical, course and university studies. Some projects can be found on my GitHub.",
      curriculo: "Download my CV",
      algunsProjetos: "Some",
      algunsProjetosSpan: "Projects",
      descricaoProjeto1:
        "In October 2020, I developed a website in a group using html, css, javascript and php for an academic project.",
      descricaoProjeto2:
        "Website created with html and css for the Frontend Mentor challenge and Quest from the DevQuest course.",
      descricaoProjeto3:
        "Website developed in the DevQuest course about the TV series 'House of the Dragon' using html, css and javascript.",
        descricaoProjeto4: "This project, done for college, is a python simulation that manipulates a tray with 100 dice with various random rotations.",
        descricaoProjeto5: "Project created in college, in C++, which is a binary search tree.",
        descricaoProjeto6: "My own portfolio is a project of mine and one of the best, done in html, css and javascript.",
        descricaoProjeto7: "Website to apologize to someone you love, created as a joke.",
        descricaoProjeto8: "Website used to test code and study while I was learning from basic to advanced in the DevQuest Full-Stack course.",
      ss1: "flexibility",
      ss2: "effective communication",
      ss3: "creativity",
      ss4: "organization",
      ss5: "emotional intelligence",
      ss6: "adaptability",
    },
  };

  const updateFlag = (lang) => {
    activeFlag.src = translations[lang].flag;
    activeFlag.alt = translations[lang].alt;
  };

  const updateContent = (lang) => {
    document.getElementById("sobre-menu").textContent =
      translations[lang].sobreMenu;
    document.getElementById("projetos-menu").textContent =
      translations[lang].projetosMenu;
    document.getElementById("habilidades-menu").textContent =
      translations[lang].habilidadesMenu;

    const tituloSobre = document.getElementById("titulo-sobre");
    tituloSobre.innerHTML = `${translations[lang].tituloSobre} <span id="titulo-sobre-span">${translations[lang].tituloSobreSpan}</span>`;

    const nomeSobre = document.getElementById("nome-sobre");
    nomeSobre.innerHTML = `<span id="nome-sobre-span">${translations[lang].nomeSobreSpan}</span> ${translations[lang].nomeSobre}`;

    const algunsProjetos = document.getElementById("alguns-projetos");
    algunsProjetos.innerHTML = `${translations[lang].algunsProjetos} <span id="alguns-projetos-span">${translations[lang].algunsProjetosSpan}</span>`;

    document.getElementById("descricao-sobre").textContent =
      translations[lang].descricaoSobre;
    document.getElementById("curriculo").textContent =
      translations[lang].curriculo;
    document.getElementById("descricao-projeto1").textContent =
      translations[lang].descricaoProjeto1;
    document.getElementById("descricao-projeto2").textContent =
      translations[lang].descricaoProjeto2;
    document.getElementById("descricao-projeto3").textContent =
      translations[lang].descricaoProjeto3;
      document.getElementById("descricao-projeto4").textContent =
      translations[lang].descricaoProjeto4;
      document.getElementById("descricao-projeto5").textContent =
      translations[lang].descricaoProjeto5;
      document.getElementById("descricao-projeto6").textContent =
      translations[lang].descricaoProjeto6;
      document.getElementById("descricao-projeto7").textContent =
      translations[lang].descricaoProjeto7;
      document.getElementById("descricao-projeto8").textContent =
      translations[lang].descricaoProjeto8;
    document.getElementById("ss1").textContent = translations[lang].ss1;
    document.getElementById("ss2").textContent = translations[lang].ss2;
    document.getElementById("ss3").textContent = translations[lang].ss3;
    document.getElementById("ss4").textContent = translations[lang].ss4;
    document.getElementById("ss5").textContent = translations[lang].ss5;
    document.getElementById("ss6").textContent = translations[lang].ss6;
  };

  // Alternar idioma ao clicar na bandeira
  activeFlag.addEventListener("click", () => {
    const currentLang = activeFlag.alt.includes("Brasil") ? "en" : "pt";
    updateFlag(currentLang);
    updateContent(currentLang);
  });

  // Define o idioma padrão
  updateFlag("pt");
  updateContent("pt");
});

// Hamburguer

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  // Carrossel Projetos

  const carousel = document.getElementById('carousel');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const totalCards = document.querySelectorAll('.card').length;
        const cardWidth = 300;

        let currentIndex = 0;
        let cardsVisible = Math.floor(window.innerWidth / cardWidth - 1);

        function updateCarousel() {
            const offset = -currentIndex * cardWidth;
            carousel.style.transform = `translateX(${offset}px)`;

            // Atualizar o estado dos botões
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalCards - cardsVisible;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < totalCards - cardsVisible) {
                currentIndex++;
                updateCarousel();
            }
        });

        function handleResize() {
            cardsVisible = Math.floor(window.innerWidth / cardWidth);
            currentIndex = Math.min(currentIndex, totalCards - cardsVisible);
            updateCarousel();
        }

        // Inicialização
        updateCarousel();

        // Atualizar a visibilidade dos cards e o carrossel no redimensionamento da janela
        window.addEventListener('resize', handleResize);
