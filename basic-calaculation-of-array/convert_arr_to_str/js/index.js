let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let arr = ['5', 32, 'Daniel'];

result1.innerHTML = "<b>Original Array is:</b> [" + arr.join(", ") + "]";

let str = arr.join(",");

result.innerHTML = "<b>Converted String is:</b> " + str;
