
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

//Place holder JS
//get all the imgs on the page with data-src
const imagesTobeLoad = document.querySelectorAll('img[data-src]')
const imgOptions = {
    threshold:0.4,
    rootMargin: "0px 0px 50px 0px"
};
const loadingImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');};
    };


  if('IntersectionObserver' in window ) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadingImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesTobeLoad.forEach((img ) => {
    observer.observe(img);
  });
} else {
  imagesTobeLoad.forEach((img) => {
    loadingImages(img );
  });
}