// Write a JAVASCRIPT Program to convert Celsius to Fahrenheit (f = (c*1.8)+32) using return type with argument function.var convertButton = document.getElementById("convertToCelsius");
var resultFahrenheit = document.querySelector(".resultFahrenheit");
var convertToF = document.getElementById("convertToFahrenheit");

function toFahrenheit(c) {
  return (c * 1.8) + 32;
}

convertToF.onclick = function () {
  var c = parseFloat(document.getElementById("celsius").value);
  var f = toFahrenheit(c);
  resultFahrenheit.innerHTML = "Fahrenheit: " + f;
};





