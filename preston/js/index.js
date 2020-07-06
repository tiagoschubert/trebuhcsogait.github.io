
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("response");
}


var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;



var currentDate = new Date ();
var date = currentDate.getDate();
var day = currentDate.getDay();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var dateString = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year; 

document.getElementById(".date").innerHTML = dateString;
