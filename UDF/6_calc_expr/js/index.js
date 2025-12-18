// Write a JAVASCRIPT Program to find ans of (a²) + (2*a*b) + (b²) using return type with argument function.var output6 = document.querySelector(".ansExp6");
var button6 = document.getElementById("chkExp6");
var ans = document.querySelector(".ansExp6");
function expression6(a, b) {
  return (a * a) + (2 * a * b) + (b * b);
}

button6.onclick = function () {
  var a = parseFloat(document.getElementById("a6").value);
  var b = parseFloat(document.getElementById("b6").value);
  var result = expression6(a, b);
  ans.innerHTML = "Answer: " + result;
};



