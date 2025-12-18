// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
// words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];


let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");
str = "";
list = [];
words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
words.forEach(element => {
    str += element + ", ";
});
result1.innerHTML = "<b>Original list is: </b>" + str;
result.innerHTML = "<br>";
let pos = words.filter((element) => element.length < 8);

result.innerHTML = "<b>Less than 8 characters string: </b>" + pos;








