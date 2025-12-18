// Write a JAVASCRIPT Program to find Triangle area (area = (l*h)/2) using return type with argument function.var triangleAreaText = document.querySelector(".areaTri");
var button = document.getElementById("chkTriArea");
var triaArea = document.querySelector(".areaTri");

function triangleArea(base, height) {
  return (base * height) / 2;
}

button.onclick = function () {
  var base = parseFloat(document.getElementById("base").value);
  var height = parseFloat(document.getElementById("height").value);
    var area = triangleArea(base, height);
    triaArea.innerHTML = "Area of Triangle: " + area;
};


