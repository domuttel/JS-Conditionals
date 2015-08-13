var num = prompt("Please enter your phone number including dashes");

if (num.charAt(3) && num.charAt(7) === '-'){
  alert("Thank you for you phone number!");
} else {
  alert("Invalid phone number!");
}

var zip = prompt("Please enter your postal code. ex. 12345 or 12345-1234");

if (zip.length === 5){
  alert("Thank you for your zip code!");
} else if (zip.length === 10 && zip.charAt(5) === '-'){
  alert("Thank you for your zip code!");
} else {
  alert("Invalid zip code!");
}

var state = prompt("Please enter your two letter state abriviation in uppercase.")

if (state.length === 2){
  alert("Thank you for providing your state abbreviation!");
} else {
  alert("Invalid state abbreviation!");
}

var married = prompt("Are you married? yes or no");
   var makeLow = married.toLowerCase();
  if (makeLow === "yes" || makeLow === "no") {
    alert("Thank you for your maritial status");
  } else {
    alert("Invalid entry!");
  }
