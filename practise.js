//Write a JavaScript program to display the current day and time


var current = new Date();// get the current date and time

// Get the day of the week 
var day = current.getDay();
// Array of day names
var day_list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Display the current day
console.log("The day is: " + day_list[day] + ".");

// To get the current hour, minute, and second
var hour = current.getHours();
var min = current.getMinutes();
var sec = current.getSeconds();

// Add leading zeros to single-digit minutes and seconds
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

// To determine if it's AM or PM
var what = (hour >= 12) ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hour = (hour>=12 ) ? hour-12 : hour;

// Check for special cases when hour is 0
if(hour === 0 && what === 'PM'){
    if (min === 0 && sec === 0){
        hour = 12;
        what = "Noon"; 
    } 
    else{
        hour = 12;
        what = "PM"; 
    } 
}

// Check for special cases when hour is 0
if (hour === 0 && what === ' AM ') {
    if (min === 0 && sec === 0) {
        hour= 12;
        what = " Midnight ";
    } else {
        hour = 12;
        what = "AM";
    }
}

// Display the current time
console.log("Current Time: " + hour + what + " : " + min + " : " +  sec); 
