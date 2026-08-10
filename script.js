// ==================================================
//   DS_COMPUTER - Interacción: menú hamburguesa
// ==================================================

const btnMenu = document.querySelector("#btn-menu");
const menuNav = document.querySelector("#menu-nav");

btnMenu.addEventListener("click", () => {

    // Muestra u oculta la lista de navegación
    menuNav.classList.toggle("mostrar");

    // Cambia el texto del botón entre abrir (☰) y cerrar (✕)
    const estaAbierto = menuNav.classList.contains("mostrar");
    btnMenu.textContent = estaAbierto ? "✕" : "☰";

    // Actualiza el atributo de accesibilidad
    btnMenu.setAttribute("aria-expanded", estaAbierto);

});


// ==================================================
//   DS_COMPUTER - Interacción: validar formulario
// ==================================================

const formContacto = document.querySelector(".contacto form");
const mensajeForm = document.querySelector("#mensaje-formulario");

formContacto.addEventListener("submit", (event) => {

    // Evita que la página se recargue
    event.preventDefault();

    // Lee lo que escribió el visitante
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;

    // Antes de revisar, se borra cualquier mensaje anterior
    mensajeForm.classList.remove("mostrar", "error", "exito");

    // Revisión 1: el nombre no puede estar vacío
    if (nombre.trim() === "") {
        mensajeForm.textContent = "Por favor completa tu nombre completo.";
        mensajeForm.classList.add("mostrar", "error");
        return;
    }

    // Revisión 2: el correo debe contener una arroba
    if (!correo.includes("@")) {
        mensajeForm.textContent = "Por favor ingresa un correo electrónico válido.";
        mensajeForm.classList.add("mostrar", "error");
        return;
    }

    // Si pasó las dos revisiones, se muestra el mensaje de éxito
    mensajeForm.textContent = "¡Tu solicitud fue enviada con éxito! Te contactaremos pronto.";
    mensajeForm.classList.add("mostrar", "exito");

});
