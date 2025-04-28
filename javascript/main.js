document.addEventListener('DOMContentLoaded', () => {
  // Cargar la librería AOS (estilos y script)
  const cargarAOS = () => {
    // Crear y añadir el enlace de los estilos de AOS
    const enlace = document.createElement('link');
    enlace.rel = 'stylesheet';
    enlace.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css';
    document.head.appendChild(enlace);

    // Crear y añadir el script de AOS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
    script.onload = () => AOS.init({ duration: 800, once: true }); // Iniciar AOS después de cargar
    document.body.appendChild(script);
  };

  cargarAOS(); // Ejecutar la función para cargar AOS

  // Añadir el evento para hacer scroll hacia arriba cuando se hace clic en el botón
  const botonArriba = document.getElementById("boton-arriba");
  if (botonArriba) {
    botonArriba.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    });
  }
});

// MENÚ HAMBURGUESA
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('show');
  });
});
