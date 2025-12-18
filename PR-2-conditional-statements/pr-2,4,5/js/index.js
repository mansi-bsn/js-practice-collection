// write a javascript program to print season according user input using switch case. (e.g. 1 to 4 for "winter", 5 to 8 for "summer", 9 to 12 for "monsoon" then add any number print "Invalid season" etc.)


// Write a javascript program to check voting eligibility.
// Write a javascript program to classify Age group.

document.querySelector(".pr-2-title").innerHTML = "Print season according user input.";
document.querySelector(".pr-4-title").innerHTML = "Check Voting Eligibility.";
document.querySelector(".pr-5-title").innerHTML = "Classify Age Group";

// program 2 js 
function ans()
{
    var number = document.getElementById("num").value;
    var result = document.querySelector(".season");
    
    switch(true){
        case (number >= 1 && number <= 4):
            result.innerHTML = "Season is: winter";
            break;
    
        case (number >= 5 && number <= 8):
            result.innerHTML = "Season is: summer";
            break;
        
        case (number >= 9 && number <= 12):
            result.innerHTML = "Season is: monsoon";
            break;
    
        default:
            result.innerHTML = "Invalid Number!!! Enter number between (1 to 12)!!!";
    }
}
// program 4 js 
function check()
{
    var age = document.getElementById("age").value;
    var result = document.querySelector(".votingCheck");
    
    if (age >= 18)
        result.innerHTML = "You are eligible to vote!!!";
    else{
        result.innerHTML = "You are not eligible to vote!!!";
    }
}
// program 5 js 

function ageGroup()
{
    var ageGroup = document.getElementById("ageGroup").value;
    var result = document.querySelector(".ageGroup");
    
    if (ageGroup >= 0 && ageGroup <= 12)
        result.innerHTML = "You are a kid!!!";
    else if (ageGroup >= 13 && ageGroup <= 19)
        result.innerHTML = "You are a teenager!!!";
    else if (ageGroup >= 20 && ageGroup <= 59)
        result.innerHTML = "You are an adult!!!";
    else if (ageGroup >= 60)
        result.innerHTML = "You are a Senior Citizen";
    else
        result.innerHTML = "Invalid Age!!! Enter age between (0 to 100)!!!";
}
