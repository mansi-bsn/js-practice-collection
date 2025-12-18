function disariumNumber() {
    var input = document.getElementById("inputNum").value;
    var number = parseInt(input);
    var result = document.querySelector(".disariumNumber");
    var sum = 0;
    var len = input.length;
    while (number > 0) 
    {
        var digit = number % 10;
        sum += Math.pow(digit, len);
        number = Math.floor(number / 10);
        len--;
    }

    if (sum === parseInt(input))
    {
        result.textContent = input + " is a Disarium number.";
    }else{
        result.textContent = input + " is not a Disarium number.";
    }
}