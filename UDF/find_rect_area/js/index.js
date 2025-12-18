// Write a JAVASCRIPT Program to find Rectangle area = l * h using return type with argument function.

var rectOutput = document.querySelector(".areaRect");
var rectButton = document.getElementById("chkRectArea");

function rectangleArea(length, height) {
  return length * height;
}

rectButton.onclick = function () {
  var length = parseFloat(document.getElementById("length").value);
  var height = parseFloat(document.getElementById("height").value);

    var area = rectangleArea(length, height);
    rectOutput.innerHTML = "Area of Rectangle: " + area;
};


