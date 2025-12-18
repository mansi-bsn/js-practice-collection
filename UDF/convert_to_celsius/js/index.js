// Write a JAVASCRIPT Program to convert Fahrenheit to Celsius (c = (f−32)/1.8) using return type with argument function.var resultCelsius = document.querySelector(".resultCelsius");
var convertButton = document.getElementById("convertToCelsius");
var result = document.querySelector(".resultCelsius");
function toCelsius(f) {
  return (f - 32) / 1.8;
}

convertButton.onclick = function () {
  var f = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = toCelsius(f);
    result.innerHTML = "Celsius: " + celsius;
};




