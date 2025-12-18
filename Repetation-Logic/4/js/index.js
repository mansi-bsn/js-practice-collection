function listPalindrome()
{
    var number = document.getElementById("inputNum").value;
    var result = document.querySelector(".chkpalindrome");
    var str = "";
    var num = parseInt(number);
    var org = num;
    while (num > 0)
    {
        str += num % 10;
        num = Math.floor(num / 10);
    }
    if (parseInt(str) === org)
    {
        result.innerHTML = "The " + number + " number is an Palindrome number.";
    }else{
        result.innerHTML = "The " + number + " number is not an Palindrome number.";
    }
}