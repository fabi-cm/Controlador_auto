import mover_auto from './mover_auto'

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + mover_auto(comandos.value) + "</p>";
});
