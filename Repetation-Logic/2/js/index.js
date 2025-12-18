
function chkFact()
{
    var number = document.getElementById("inputFact").value;
    var result = document.querySelector(".chkFact");
    var fact = 1;
    while (number > 1) {
        fact *= number;
        number--;
    }
    result.innerHTML = "Factorial is: " + fact;
}