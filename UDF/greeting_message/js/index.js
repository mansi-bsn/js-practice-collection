// Write a JAVASCRIPT Program to print a greeting message using with argument no return type function. When call a function without argument at that time print message Good Morning.
var greet1 = document.querySelector(".greet");

function greet(name) {
  if (name === undefined) {
    greet1.innerHTML = "Good Morning!!!";
  } else {
    greet1.innerHTML = "Hello, " + name;
  }
}

greet("Good Morning!!!");
greet(); 
