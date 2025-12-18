// Write a JAVASCRIPT Program to find if a given number is odd or even using with argument no return type.var resultOddEven = document.querySelector(".resultOddEven");
var checkButton = document.getElementById("chkOddEven");

function checkOddEven(num) {
  if (num % 2 === 0) {
    resultOddEven.innerHTML = num + " is Even";
  } else {
    resultOddEven.innerHTML = num + " is Odd";
  }
}

checkButton.onclick = function () {
  var num = parseInt(document.getElementById("oddEvenNum").value);
  checkOddEven(num);
};






