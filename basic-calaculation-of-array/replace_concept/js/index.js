// Input : - "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
// Output:-  "I often take a walk with my cat in the evening. His cat follows him everywhere. I don't feed my cat in the morning"

// replace dog with cat
var result = document.querySelector(".result");

var str = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
result.innerHTML = "<b>Original String: </b>" + str;
var str1 = str.replace(/dog/g, "cat");
result.innerHTML += "<br> <b>After replace word string: </b>" + str1;








