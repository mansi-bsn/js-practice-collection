let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let arr = [10, 20, 30, 40, 50];
let str = "";

arr.forEach(element => {
    str += element + ", ";
});
result1.innerHTML = "<b>Original array is: </b>" + str;

let reversedArr = [...arr].reverse(); 

result.innerHTML = "<b>Reversed array is: </b>" + reversedArr.join(", ");
