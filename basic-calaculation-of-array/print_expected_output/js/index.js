// write a simple javascript program to print expected outputusing following array

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 

var result = document.querySelector(".result");
var myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
result.innerHTML = myColor.join(",");
// Red+Green+White+Black
result.innerHTML += "<br>" + myColor.join("+");
// Red,Green,White
myColor.pop();
result.innerHTML += "<br>" + myColor.join(",");
// red 
var red = myColor.shift();
result.innerHTML += "<br>" + red;
// Green,White
result.innerHTML += "<br>" + myColor.join(",");
// Red,Green,White,Black,orange 
myColor.unshift("Red");
myColor.push("Black");
myColor.push("orange");
result.innerHTML += "<br>" + myColor.join(",");




