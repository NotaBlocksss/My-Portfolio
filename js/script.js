const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// Toggle navigation menu
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Close navigation when clicking outside or on a link
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnAbrir = abrir.contains(event.target);
    if (!isClickInsideNav && !isClickOnAbrir) {
        nav.classList.remove("visible");
    }
});

// Close navigation when clicking on a link or pressing Enter/Space
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("visible"));

    link.addEventListener("keydown", (event) => {
        if (["Enter", " "].includes(event.key)) {
            nav.classList.remove("visible");
        }
    });
});

// Close navigation when pressing Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        nav.classList.remove("visible");
    }
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Para que se anime solo una vez
        }
    });
}, {
    threshold: 0.1 // Se activa cuando un 10% del elemento es visible
});

// Selecciona todos los elementos que quieres que aparezcan al hacer scroll
document.querySelectorAll('#fade-in').forEach(element => {
    observer.observe(element);
});


const logos = [
    "https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff",
    "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff",
    "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000",
    "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff",
    "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000",
    "https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=fff"
];

const cinta = document.getElementById('cinta');

// Insertar logos suficientes para garantizar que el bucle nunca se corte
for (let i = 0; i < 10; i++) {
    logos.forEach(src => {
        const img = document.createElement('img');
        img.className = 'item';
        img.src = src;
        img.alt = '';
        cinta.appendChild(img);
    });
}



document.getElementById('ir').addEventListener('click', function () {
    window.location.href = 'https://wa.me/573228739153';
});
