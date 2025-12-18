// 5.Write a JavaScript program for remove negative values using the filter array function.
// numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");
str = "";
list = [];
numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
numbers.forEach(element => {
    str += element + ", ";
});
result1.innerHTML = "<b>Original list is: </b>" + str;
result.innerHTML = "<br>";
let pos = numbers.filter((element) => element > 0);

result.innerHTML = "<b>After removing negative number: </b>" + pos;








