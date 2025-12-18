// 4.Write a JavaScript program for convert all array element in ASCII value.

var result = document.querySelector(".result");

var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// print all element of array                   
result.innerHTML = "array element: " + arr.join(",");

// convert array element to ascii value using map function
var asciiArr = arr.map(element => element.charCodeAt(0));
result.innerHTML += "<br>" + "ascii value of array element: " + asciiArr.join(",");



