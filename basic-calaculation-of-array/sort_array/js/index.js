// 7.Write a JavaScript program for sort array in ascending descending.
// numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
// myColor = ["Red", "Green", "White", "Black"];


let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
result1.innerHTML = "<b>Original list is: </b>" + numbers;

for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] > numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

result.innerHTML = "<b>After sorting list is: </b>" + numbers;

myColor = ["Red", "Green", "White", "Black"];

document.querySelector(".clrsort").innerHTML = "<b>Original list is: </b>" + myColor;
myColor.sort()
document.querySelector(".clrsort1").innerHTML = "<b>After sorting list is: </b>" + myColor;











