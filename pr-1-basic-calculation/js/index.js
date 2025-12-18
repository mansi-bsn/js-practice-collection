
document.querySelector(".main-h1").innerHTML = "Basic Calculation";
document.querySelector(".h1-triangle").innerHTML = "Area Of a Triangle";
document.querySelector(".h2-temp").innerHTML = "Convert Temperatures to Celsius";
document.querySelector(".h3-rect").innerHTML = "Area Of a Rectangle";
document.querySelector(".h4-circle").innerHTML = "Area Of Circle";
document.querySelector(".formulas").innerHTML = "Formulas";

// Area of triangle

var triaBase = 4;
var triaHeight = 5;

var base = document.querySelector(".tria-base");
var height = document.querySelector(".tria-height");

base.innerHTML = triaBase;
height.innerHTML = triaHeight;
var res = 0.5 * triaBase * triaHeight;

var triaResult = document.querySelector(".tria-res");

triaResult.innerHTML = res;

// Arae of Celcius and Fehranheit
// Celcius 
var fahrenheit = 50;

var fehrenInput = document.querySelector(".fehranheit");
fehrenInput.innerHTML = fahrenheit;
var celciusRes = (fahrenheit-32) * 5/9;

var fehran = document.querySelector(".convert-cels");
fehran.innerHTML = celciusRes;
// Fehranheit
var celsius = 50;

var celsiusInput = document.querySelector(".celsius");
celsiusInput.innerHTML = celsius;
var fehranRes = (celsius*9/5) + 32;

var celsius = document.querySelector(".convert-fehran");
celsius.innerHTML = fehranRes;

// Area of Rectangle

var rectLength = 4;
var rectWidth = 5;

var length = document.querySelector(".rect-length");
var width = document.querySelector(".rect-width");

length.innerHTML = rectLength;
width.innerHTML = rectWidth;
var areaOfRect = rectLength * rectWidth;

var rectResult = document.querySelector(".rect-res");

rectResult.innerHTML = areaOfRect;

// Area of Circle

var pi = 3.14;
var radius = 5;

var cirRadius = document.querySelector(".circle-radius");

cirRadius.innerHTML = radius;
var areaOfCir = pi * radius * radius;

var cirResult = document.querySelector(".cir-res");

cirResult.innerHTML = areaOfCir;

// equation-1

var a = 4;
var b = 5;
var c = 6

var eq1aVal = document.querySelector(".a-value");
var eq1bVal = document.querySelector(".b-value");

eq1aVal.innerHTML = a;
eq1bVal.innerHTML = b;
var eq1Res = (a-b)*(a+b);

var eq1Result = document.querySelector(".eq1-res");

eq1Result.innerHTML = eq1Res;

// equation 2
var eq2Res = a*a - 2*a*b + b*b;

var eq2Result = document.querySelector(".eq2-res");

eq2Result.innerHTML = eq2Res;

// equation 3
var eq3Res = a*a + b*b + c*c + 2*a*b + 2*a*c + 2*b*c;

var eq3Result = document.querySelector(".eq3-res");

eq3Result.innerHTML = eq3Res;

// equation 4
var eq4Res = a*a + b*b + c*c - 2*a*b - 2*a*c + 2*b*c;

var eq4Result = document.querySelector(".eq4-res");

eq4Result.innerHTML = eq4Res;

// equation 5
var eq5Res = a*a*a - 3*a*a*b + 3*a*b*b - b*b*b;
console.log(eq5Res);

var eq5Result = document.querySelector(".eq5-res");

eq5Result.innerHTML = eq5Res;