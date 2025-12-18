// Write a JAVASCRIPT Program to find Circle area (area = π*r²) using return type with argument function.var greet1 = document.querySelector(".greet");
var circleArea1 = document.querySelector(".areaCir");
var area = document.getElementById("chkCirArea");
function circleArea(r) {
  return Math.PI * r * r;
}

area.onclick = function(){
  var num = parseFloat(document.getElementById("number").value);
  circleArea1.innerHTML = "Area of Circle: " + circleArea(num);
}


