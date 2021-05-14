let chiste;
// funcion que al hacer click, se conecta a la API y muestra el chiste en pantalla
// no se me asigna a la variable
function mostrarChiste() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.joke);
      chiste = json.joke;
      document.getElementById("chistes").innerHTML = "“" + json.joke + "”";
    });
}
