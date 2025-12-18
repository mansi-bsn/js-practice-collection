let result = document.querySelector(".result");
let result1 = document.querySelector(".result1");

let arr = [10, 20, 30, 40, 50]; 
let str = "";

arr.forEach(element => {
    str += element + ", ";
});
result1.innerHTML = "<b>Original array is: </b>" + str;
function check(){
    let searchValue = parseInt(document.getElementById("value").value);
    if (arr.includes(searchValue)) {
        result.innerHTML = `<b>Value ${searchValue} is found in the array.</b>`;
    } else {
        result.innerHTML = `<b>Value ${searchValue} is NOT found in the array.</b>`;
    }
}
