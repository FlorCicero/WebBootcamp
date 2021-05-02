window.onload = function () {
  const botonAgregar = document.querySelector(".button-add");
  const botonQuitar = document.querySelector(".button-remove");
  let contador = 0;

  botonAgregar.onclick = function () {
    if (contador < 8) {
      contador++;
      document.querySelector("#silla_" + contador).style = "visibility:visible";
    }
  };
  botonQuitar.onclick = function () {
    if (contador > 0) {
      document.querySelector("#silla_" + contador).style = "visibility:hidden";
      contador--;
    }
  };
};
