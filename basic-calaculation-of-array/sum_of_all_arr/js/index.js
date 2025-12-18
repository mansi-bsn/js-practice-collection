var result = document.querySelector(".result");

var arr = [12, 22, 10, 34, 18];

    // print array
    result.innerHTML = "<b>array element: </b>" + arr.join(",");
    result.style.fontSize = "50px";
    result.style.fontWeight = "bold";
    result.style.textAlign = "center";
    result.style.margin = "20px";
    result.style.padding = "20px";
    result.style.border = "1px solid black";

    // sum of all array element
    result.innerHTML += "<br>" + "<b>sum of all array element: </b>" + arr.reduce((acc, curr) => acc + curr, 0);





