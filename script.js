const btnMenu = document.querySelector("#btn-menu");
const menuNav = document.querySelector("#menu-nav");

btnMenu.addEventListener("click", () => {
    menuNav.classList.toggle("mostrar");

    const estaAbierto = menuNav.classList.contains("mostrar");
    btnMenu.textContent = estaAbierto ? "✕" : "☰";
    btnMenu.setAttribute("aria-expanded", estaAbierto);
});

const formContacto = document.querySelector(".contacto form");
const mensajeForm = document.querySelector("#mensaje-formulario");

formContacto.addEventListener("submit", (event) => {
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;

    mensajeForm.classList.remove("mostrar", "error", "exito");

    if (nombre.trim() === "") {
        event.preventDefault();
        mensajeForm.textContent = "Por favor completa tu nombre completo.";
        mensajeForm.classList.add("mostrar", "error");
        return;
    }

    if (!correo.includes("@")) {
        event.preventDefault();
        mensajeForm.textContent = "Por favor ingresa un correo electrónico válido.";
        mensajeForm.classList.add("mostrar", "error");
        return;
    }

});
