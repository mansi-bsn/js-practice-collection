function primeNumber() {
    var number = document.getElementById("inputNum").value;
    var result = document.querySelector(".primeNumber");
    var str = "";
    var count = 0;
    var i = 0;
    while ( i < number) 
    {
        if (number % i == 0) {
            count++;
        }
        i++;
    }
    if (count > 1) {
        str += number + " is not a prime number<br>";
    } else {
        str += number + " is a prime number<br>";
    }

    result.innerHTML = str;
}