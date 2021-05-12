let chiste;
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
