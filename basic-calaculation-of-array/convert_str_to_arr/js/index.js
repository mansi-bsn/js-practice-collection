let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let inputStr = "Hire the top 1% freelance developers";

result1.innerHTML = "<b>Original String is:</b> " + inputStr;

let wordsArray = inputStr.split(" ");

result.innerHTML = "<b>Converted Array:</b> [" + wordsArray.join(", ") + "]";
