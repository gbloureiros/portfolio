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

var typed = new Typed('.auto-type', {
  strings: ['Developer'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// Menu

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

// Imagens fullscreen

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('image');
    const modal = document.getElementById('fullscreen-modal');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeModal = document.getElementById('close');

    image.addEventListener('click', () => {
        fullscreenImage.src = image.src;
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('image2');
    const modal = document.getElementById('fullscreen-modal2');
    const fullscreenImage = document.getElementById('fullscreen-image2');
    const closeModal = document.getElementById('close2');

    image.addEventListener('click', () => {
        fullscreenImage.src = image.src;
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('image3');
    const modal = document.getElementById('fullscreen-modal3');
    const fullscreenImage = document.getElementById('fullscreen-image3');
    const closeModal = document.getElementById('close3');

    image.addEventListener('click', () => {
        fullscreenImage.src = image.src;
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const activeFlag = document.getElementById('active-flag');
    const langButtons = document.querySelectorAll('.lang-button');

    const translations = {
        pt: {
            flag: './src/images/bandeira brasil.png',
            alt: 'Bandeira do Brasil',
            sobre: "Sobre",
            projetos: "Projetos",
            habilidades: "Habilidades",
            tituloSobre: "Sobre",
            tituloSobreSpan: "mim",
            nomeSobre: "me chamo Gabriel Loureiro",
            nomeSobreSpan: "Olá,",
            descricaoSobre: "Estou cursando Ciência da Computação na Unicarioca, além disso, faço um curso por fora da faculdade, chamado DevQuest Full-Stack, focado em frontend, mas com o básico do back-end. Também cursei dois anos de ensino técnico no Rezende Rammel durante o ensino médio, interrompendo o último ano devido à pandemia. Possuo conhecimentos avançados em HTML5 e CSS, além de noções básicas em Javascript, SQL, Power BI, Python e Pacote Office (Word, Excel, Power Point). Esses conhecimentos foram adquiridos através dos meus estudos pessoais, do técnico, do curso e da faculdade. Alguns projetos podem ser encontrados no meu GitHub.",
            curriculo: "Baixe meu currículo",
            algunsProjetos: "Alguns",
            algunsProjetosSpan: "Projetos",
            descricaoProjeto1: "Em outubro de 2020, desenvolvi em grupo um site utilizando html, css, javascript e php para um trabalho acadêmico.",
            descricaoProjeto2: "Site criado com html e css do desafio do Frontend Mentor e Quest do curso DevQuest.",
            descricaoProjeto3: "Site desenvolvido no curso DevQuest sobre a série de TV 'Casa do Dragão' utilizando html, css e javascript.",
            ss1: "flexibilidade",
            ss2: "comunicação eficaz",
            ss3: "criatividade",
            ss4: "organização",
            ss5: "inteligência emocional",
            ss6: "adaptabilidade"
        },
        en: {
            flag: './src/images/bandeira eua.png',
            alt: 'Bandeira dos EUA',
            sobre: "About",
            projetos: "Projects",
            habilidades: "Skills",
            tituloSobre: "About",
            tituloSobreSpan: "me",
            nomeSobre: "I'm Gabriel Loureiro",
            nomeSobreSpan: "Hi,",
            descricaoSobre: "I'm studying Computer Science at Unicarioca, and I'm also taking a course outside of college called DevQuest Full-Stack, focused on the front-end, but with the basics of the back-end. I also attended two years of technical education at Rezende Rammel during high school, interrupting the last year due to the pandemic. I have advanced knowledge of HTML5 and CSS, as well as the basics of Javascript, SQL, Power BI, Python and the Office Package (Word, Excel, Power Point). This knowledge has been acquired through my personal, technical, course and university studies. Some projects can be found on my GitHub.",
            curriculo: "Download my CV",
            algunsProjetos: "Some",
            algunsProjetosSpan: "Projects",
            descricaoProjeto1: "In October 2020, I developed a website in a group using html, css, javascript and php for an academic project.",
            descricaoProjeto2: "In October 2020, I developed a website in a group using html, css, javascript and php for an academic project.",
            descricaoProjeto3: "Website developed in the DevQuest course about the TV series 'House of the Dragon' using html, css and javascript.",
            ss1: "flexibility",
            ss2: "effective communication",
            ss3: "creativity",
            ss4: "organization",
            ss5: "emotional intelligence",
            ss6: "adaptability"
        }
    };

    const updateFlag = (lang) => {
        activeFlag.src = translations[lang].flag;
        activeFlag.alt = translations[lang].alt;
    };

    const updateContent = (lang) => {
        document.getElementById('sobre').textContent = translations[lang].sobre;
        document.getElementById('projetos').textContent = translations[lang].projetos;
        document.getElementById('habilidades').textContent = translations[lang].habilidades;

        const tituloSobre = document.getElementById('titulo-sobre');
        tituloSobre.innerHTML = `${translations[lang].tituloSobre} <span id="titulo-sobre-span">${translations[lang].tituloSobreSpan}</span>`;

        const nomeSobre = document.getElementById('nome-sobre');
        nomeSobre.innerHTML = `<span id="nome-sobre-span">${translations[lang].nomeSobreSpan}</span> ${translations[lang].nomeSobre}`;

        const algunsProjetos = document.getElementById('alguns-projetos');
        algunsProjetos.innerHTML = `${translations[lang].algunsProjetos} <span id="alguns-projetos-span">${translations[lang].algunsProjetosSpan}</span>`;

        document.getElementById('descricao-sobre').textContent = translations[lang].descricaoSobre;
        document.getElementById('curriculo').textContent = translations[lang].curriculo;
        document.getElementById('descricao-projeto1').textContent = translations[lang].descricaoProjeto1;
        document.getElementById('descricao-projeto2').textContent = translations[lang].descricaoProjeto2;
        document.getElementById('descricao-projeto3').textContent = translations[lang].descricaoProjeto3;
        document.getElementById('ss1').textContent = translations[lang].ss1;
        document.getElementById('ss2').textContent = translations[lang].ss2;
        document.getElementById('ss3').textContent = translations[lang].ss3;
        document.getElementById('ss4').textContent = translations[lang].ss4;
        document.getElementById('ss5').textContent = translations[lang].ss5;
        document.getElementById('ss6').textContent = translations[lang].ss6;
    };

    // Alternar idioma ao clicar na bandeira
    activeFlag.addEventListener('click', () => {
        const currentLang = activeFlag.alt.includes('Brasil') ? 'en' : 'pt';
        updateFlag(currentLang);
        updateContent(currentLang);
    });

    // Define o idioma padrão
    updateFlag('pt');
    updateContent('pt');
});
