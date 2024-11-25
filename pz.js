// Obtener elementos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Obtener todas las imágenes dentro de las tablas
const images = document.querySelectorAll(".imagen-tabla");

// Función para abrir la imagen en el modal
images.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src; // Establece la fuente de la imagen ampliada
    });
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Función para abrir el modal
function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src; // Establece la fuente de la imagen ampliada
}

// Agregar eventos de clic y táctil a las imágenes
images.forEach(img => {
    img.addEventListener("click", function () {
        openModal(this.src);
    });

    img.addEventListener("touchstart", function () {
        openModal(this.src);
    });
});