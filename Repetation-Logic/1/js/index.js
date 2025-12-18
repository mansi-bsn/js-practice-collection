// multiplication table
function multi()
{
    var inputNum = document.getElementById("inputNum").value;
    var multiTable = document.querySelector(".multi");
    var str = "";
    var i = 1;
    while (i <= 10)
    {
        str = inputNum * i;
        multiTable.innerHTML += inputNum + " * " + i + " = " + str + "<br>";
        i++;
    }
}