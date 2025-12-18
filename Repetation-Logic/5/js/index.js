function fiboSeries()
{
    var number = document.getElementById("inputNum").value;
    var result = document.querySelector(".fiboSeries");
    var str = "";
    var first = 0;
    var second = 1;
    str += first + " ";
    str += second + " ";
    var i = 2;
    while (i < number)
    {
        var next = Number(first) + Number(second);
        first = second;
        second = next;
        str += next + " ";
        i++;
    }
    result.innerHTML = str;
}