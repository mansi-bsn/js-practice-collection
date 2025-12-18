// 6. Write a JavaScript program using array map() method and return the square of array element.
//  arr = [2, 5, 6, 3, 8, 9];


let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");
str = "";
list = [];
arr = [2, 5, 6, 3, 8, 9];
arr.forEach(element => {
    str += element + ", ";
});
result1.innerHTML = "<b>Original list is: </b>" + str;
result.innerHTML = "<br>";
let pos = arr.map((element) => element * element + " ");

result.innerHTML = "<b>After square list is: </b>" + pos;