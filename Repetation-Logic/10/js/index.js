//write a javascript program which iterates the integers from 1 to 100. for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz" using do while loop.
    var fizzbuzz = document.querySelector(".fizzbuzz");
    for (var i = 1; i <= 100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
            fizzbuzz.innerHTML += i + " is FizzBuzz.<br>";
        }else if (i % 3 === 0)
        {
            fizzbuzz.innerHTML += i + " is Fizz.<br>";
        }else if (i % 5 === 0)
        {
            fizzbuzz.innerHTML += i + " is Buzz.<br>";
        }
    }
