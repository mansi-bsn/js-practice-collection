
function chkArmstrongNum()
{
    var number = document.getElementById("inputNum").value;
    var result = document.querySelector(".chkNum");
    var sum = 0;
    var num = parseInt(number);
    var orgNum = num;
    while (num > 0)
    {
        num1 = num % 10;
        sum += num1 * num1 * num1;
        num = Math.floor(num / 10);
    }
    if (sum === orgNum)
    {
        result.innerHTML = "The " + number + " number is an Armstrong number.";
    }else{
        result.innerHTML = "The " + number + " number is not an Armstrong number.";
    }
}