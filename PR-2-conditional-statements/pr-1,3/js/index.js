// Enter electricity unit and calculate amount to pay
// For first 50 units, Rs: 1/unit 
// for next 100 units, 2/unit
// for next 100 units, 3/unit
// for units above 250, 4/units
// for all bills above 150 units additional surcharge of 20% of total bill amount is added. 

// write a javascript program to find rate based on year and calculate total interest using nested if. (I = PRN/100) Principal Amount (P)
// Interest Rate
// No. of Years (N)
// (if 3>N<=5 then R is 3 | if 5>N<=8 then R is 5 | if 8>n<=12 then R is 12| else R is 15)


// program 1 js 

document.getElementById("calcAmount").innerHTML = "Calculate amount for electricity units";
function amtToPay()
{
    
    var units = document.getElementById("num").value;
    var amt = document.querySelector(".amountEle");
    var amount = 0;
    
    if (units <= 50){
        amount = units * 1;
    }else if (units <= 150){
        amount = 50 * 1 + (units - 50) * 2;
    }else if (units <= 250){
        amount = (50 * 1) + (100 * 2) + ((units - 150) * 3);
    }else{
        amount = (50 * 1) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
    }
    
    if (units > 150){
        var surcharge = amount * 0.20;
        amount += surcharge;
    }
    
    amt.innerHTML = "Total amount to pay: ₹" + amount;
}
// program 3 js 
document.getElementById("InterestAmt").innerHTML = "find rate based on year and calculate total interest."
function findRate()
{
    var rate = document.querySelector(".rate");
    var interest = document.querySelector(".interest");
    var principal = document.querySelector(".amount");
    var amount1 = document.getElementById("amt").value;
    var year = document.getElementById("year").value;
    var interestRate = 0;
    var interestAmt = 0;
    
    if (year > 0)
    {
        if (year <= 3)
        {
            interestRate = 0;
        }else{
            if (year > 3 && year <= 5)
            {
                interestRate = 3;
            }else{
                if (year > 5 && year <= 8)
                {
                    interestRate = 5;
                }else{
                    if (year > 8 && year <= 12)
                    {
                        interestRate = 12;
                    }else{
                        interestRate = 19;
                    }
                }
            }
        }
        interestAmt = (amount1 * year * interestRate) / 100;
        rate.innerHTML = year + "%";
        interest.innerHTML = "Interest: ₹" + interestAmt;
        principal.innerHTML = "Total amount: " + (Number(amount1) + Number(interestAmt));
    }
}