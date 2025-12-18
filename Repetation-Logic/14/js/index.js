
// loop 1
var ans = document.querySelector(".loop1");
var str = "";
var num = 0;
for (var i = 1; i <= 5; i++)
{
    for (var j = 5; j > 5-i; j--)
    {
        num++;
        str += num + "&nbsp;";
    }
    str += "<br>";
}
ans.innerHTML = str;
