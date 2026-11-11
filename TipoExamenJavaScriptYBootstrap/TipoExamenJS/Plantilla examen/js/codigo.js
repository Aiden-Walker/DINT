"use strict";
// Codificar aquí el programa principal
var oLibro = new Libro();
registrarEventos();

function registrarEventos() {
  // Opciones de menú
  document
    .querySelector("#mnuCrearLibro")
    .addEventListener("click", mostrarFormulario);
  document
    .querySelector("#mnuListado")
    .addEventListener("click", mostrarFormulario);
  // Botones
  /*
  frmCrearLibro.btnCrearLibro.addEventListener("click", procesarAltaTipo);
  frmListado.btnListado.addEventListener(
    "click",
    procesarBuscarComponente,
  );
  */
}

function mostrarFormulario(oEvento) {
  let opcionMenu = oEvento.target.id; // Opción de menú pulsada (su id)

  ocultarFormularios();

  switch (opcionMenu) {
    case "mnuCrearLibro":
      frmCrearLibro.classList.remove("d-none");
      break;
    case "mnuListado":
      frmListado.classList.remove("d-none");
      break;
  }
}

function ocultarFormularios() {
  frmCrearLibro.classList.add("d-none");
  frmListado.classList.add("d-none");
  // Borrado del contenido de capas con resultados
  /*
  document.querySelector("#resultadoBusqueda").innerHTML = "";
  document.querySelector("#listados").innerHTML = "";
  */
}