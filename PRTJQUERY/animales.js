var animal = document.getElementById("animales");
var boton = document.getElementById("boton");

boton.addEventListener("click", function() {
  var peticion = new XMLHttpRequest();
  peticion.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-1.json"
  );
  peticion.onload = function() {
    var data = JSON.parse(peticion.responseText);
    render(data);
  };
  peticion.send();
});

function render(data) {
  var cadena = "";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var gusto = obj.foods.likes[0];
    cadena +=
      "<p>Este animal se llama " +
      obj.name +
      " es un " +
      obj.species +
      " y le gusta " +
      gusto +
      "</p>";
  }
  console.log(data);
  animal.insertAdjacentHTML("beforeend", cadena);
}
