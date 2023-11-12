// Seleccionar todos los elementos checkbox
let checkboxes = document.querySelectorAll("input[type='checkbox']");

// Recorrer cada checkbox con un bucle for...of
for (let checkbox of checkboxes) {
  // Añadir un evento change para detectar los cambios de estado
  checkbox.addEventListener("change", function () {
    // Seleccionar el elemento li que contiene el checkbox
    let li = checkbox.parentElement;
    // Si el checkbox está marcado
    if (checkbox.checked) {
      // Cambiar el color de fondo del li a gris
      li.style.backgroundColor = "gray";
    } else {
      // Si no, cambiar el color de fondo del li a blanco
      li.style.backgroundColor = "white";
    }
  });
}
