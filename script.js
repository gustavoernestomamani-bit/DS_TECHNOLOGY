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
