// var num = prompt("Please enter your phone number including dashes");
//
// if (num.charAt(3) && num.charAt(7) === '-'){
//   alert("Thank you for you phone number\!");
// } else {
//   alert("Invalid phone number\!")
// }

var zip = prompt("Please enter your postal code. ex. 12345 or 12345-1234");

if (zip.charAt(5) === '-'){
  alert("Thank you for your zip code\!");
} else if (zip.charAt(5) === ' '){
  alert("Thank you for your zip code\!");
} else {
  alert("Invalid zip code\!")
}
