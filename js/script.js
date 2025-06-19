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
