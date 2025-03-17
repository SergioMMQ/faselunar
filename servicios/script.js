
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const menuLinks = document.querySelectorAll(".menu-link");
    const contentSections = document.querySelectorAll(".content");
    
    // Alternar el menú en móviles
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
    
    // Cambiar de sección al hacer clic en el menú
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Quitar la clase "active" de todos los links
            menuLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            
            // Ocultar todas las secciones
            contentSections.forEach(section => section.classList.remove("active"));
            
            // Mostrar la sección correspondiente
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
            
            // Cerrar el menú en móviles
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("active");
                
            }
        });
    });
});
