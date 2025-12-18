// Write a JAVASCRIPT Program to find ans of ((b³)*(4*a³*c))/(2*a) using return type with argument function.
var outputExp = document.querySelector(".ansExp");
var buttonExp = document.getElementById("chkExp");

function calcExpression(a, b, c) {
  return (Math.pow(b, 3) * (4 * Math.pow(a, 3) * c)) / (2 * a);
}

buttonExp.onclick = function () {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

    var result = calcExpression(a, b, c);
    outputExp.innerHTML = "Answer: " + result;
};


