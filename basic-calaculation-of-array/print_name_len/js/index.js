let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let myName = "Mansi";

result1.innerHTML = "<b>Your Name is:</b> " + myName;

let totalChars = myName.length;

result.innerHTML = "<b>Total Characters in your name:</b> " + totalChars;
