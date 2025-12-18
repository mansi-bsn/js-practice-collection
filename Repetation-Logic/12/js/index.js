
  let str = "";
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    let square = i * i;
    sum += square;
    str += square;
    if (i < 10) {
      str += " + ";
    }
  }

  str += " = " + sum;

  document.getElementById("output").innerHTML = str;