let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let x1 = "airplane";
let x2 = "oxoxoxox";
let x3 = "A New Java Book";

let task1 = x1.charAt(2);

let task2 = "";
for (let i = 0; i < x2.length; i++) {
    if (i % 2 !== 0) {
        task2 += x2[i].toUpperCase();
    } else {
        task2 += x2[i];
    }
}

let task3_lower = x3.toLowerCase();
let task3_upper = x3.toUpperCase();

result1.innerHTML = "<b>Original Strings:</b><br>" +
    "x1 = " + x1 + "<br>" +
    "x2 = " + x2 + "<br>" +
    "x3 = " + x3;

result.innerHTML =
    "<b>Expected Outputs:</b><br>" +
    "From x1 → " + task1 + "<br>" +
    "From x2 → " + task2 + "<br>" +
    "From x3 → '" + task3_lower + "' , '" + task3_upper + "'";
