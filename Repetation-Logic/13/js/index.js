
// loop 1
var ans = document.querySelector(".loop1");
var str = "";
for (var i = 1; i <= 5; i++)
{
    for (var j = 5; j > 5-i; j--)
    {
        str += j + "&nbsp;";
    }
    str += "<br>";
}
ans.innerHTML = str;
