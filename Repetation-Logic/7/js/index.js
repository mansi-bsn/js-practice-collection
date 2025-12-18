function magicNumber() {
    var number = parseInt(document.getElementById("inputNum").value);
    var result = document.querySelector(".magicNumber");
    var sum = 0;
    while (number > 0) 
    {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    result.innerHTML = sum;
}