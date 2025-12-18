// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)

var result = document.querySelector(".result");

var arr = [12, 22, 10, 34, 18];

    // print array
    result.innerHTML = "array element: " + arr.join(",");
    result.style.fontSize = "50px";
    result.style.fontWeight = "bold";
    result.style.textAlign = "center";
    result.style.margin = "20px";
    result.style.padding = "20px";
    result.style.border = "1px solid black";

// maximum value of array
result.innerHTML += "<br>" + "maximum value of array: " + Math.max.apply(null, arr);

// minimum value of array
result.innerHTML += "<br>" + "minimum value of array: " + Math.min.apply(null, arr);



