// Write a JAVASCRIPT Program to swap a value without third variable using with argument no return type.

var swapResult = document.querySelector(".swapResult");
var swapBtn = document.getElementById("swapBtn");

function swapValues(a, b) {
  swapResult.innerHTML = "Before Swap: a = " + a + " b = " + b + "<br>";
  a = a + b;
  b = a - b;
  a = a - b;
  swapResult.innerHTML += "After Swap: a = " + a + " b = " + b + "<br>";
}

swapBtn.onclick = function () {
  var a = parseFloat(document.getElementById("val1").value);
  var b = parseFloat(document.getElementById("val2").value);
  swapValues(a, b);
};







