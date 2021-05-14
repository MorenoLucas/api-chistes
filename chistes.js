let chiste;
let gif = document.getElementById("confetti");
gif.style.display = "none";
// funcion que al hacer click, se conecta a la API y muestra el chiste en pantalla
// no se me asigna a la variable
async function mostrarChiste() {
  await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.joke);
      chiste = json.joke;
      gif.style.display = "block";
      setTimeout(() => {
        gif.style.display = "none";
      }, 6000);
      document.getElementById("chistes").innerHTML = "“" + json.joke + "”";
    });
}

// Aqui empieza la API para el tiempo Meteorilogico
// APi https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019

fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019")
  .then((response) => response.json())
  .then((json) => {
    console.log("tiempo", json);
    document.getElementById("tiempo").innerHTML =
      "Tiempo en Barcelona: " +
      json.stateSky.description +
      " " +
      json.temperatura_actual +
      "º";
  });
