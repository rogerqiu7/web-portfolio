// dynamic age script

//set timecontainer variable from html element
//set my birthday and its conversion to date format
//set interational number formatter variable
const timeContainer = document.getElementById("age");
const BIRTH_DAY = "11-01-1996";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");


// use interval function to print update every second
// set now as current date and difference as the difference between current date and my birthday in seconds
// round down and divided by 1000 to turn milliseconds into seconds
// use division and modulus functions to find years, months, days, hours, minutes and seconds from  difference
setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  var numyears = Math.floor(difference / 31536000);
  var nummonths = Math.floor((difference % 31536000) / 2628000);
  var numdays = Math.floor(((difference % 31536000) % 2628000) / 86400);
  var numhours = Math.floor((((difference % 31536000) % 2628000) % 86400)/3600);
  var numminutes = Math.floor(((((difference % 31536000) % 2628000) % 86400) % 3600) / 60);
  var numseconds = Math.floor(((((difference % 31536000) % 2628000) % 86400) % 3600) % 60);
  
  // type out age
  timeContainer.innerText = " - I am " + numyears + " years, " + nummonths + " months, " + numdays +  " days, " + numhours + " hours, " + numminutes + " minutes and " + numseconds + " seconds old"}, 1000);





