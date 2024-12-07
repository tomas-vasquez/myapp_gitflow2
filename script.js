// Función para mostrar una alerta cuando se hace clic en el botón
document.getElementById("alertButton").addEventListener("click", () => {
  alert("¡Hola! Has hecho clic en el botón.");
});

// Función para manejar el envío del formulario de contacto
document.getElementById("formContacto").addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío real del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  alert(`¡Gracias por tu mensaje, ${nombre}!\nTe responderemos pronto a ${email}.`);

  // Opcional: Limpiar el formulario después del envío
  e.target.reset();
});

