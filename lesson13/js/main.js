var year = new Date();

document.getElementById("updated").innerHTML = year.getFullYear();

// hamburguer menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("response");
}
// PRESTON CURRENT WEATHER
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=f82892a0a3a767ffe4875439f1ca5a0d&units=imperial';

var weatherReq = new XMLHttpRequest();
weatherReq.open('GET', apiURL, true);
weatherReq.responseType = 'json';
weatherReq.send();
weatherReq.onload = function () {
     var weatherData = weatherReq.response;
     var temp = weatherData.main.temp;
     
     document.getElementById("Temperature").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
     document.getElementById("Humidity").innerHTML = weatherData.main.humidity.toFixed(1) + "%";
     
}

// forecast 5
var forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=f82892a0a3a767ffe4875439f1ca5a0d&units=imperial';
fetch(forecastRequestURL)
    .then((response) => response.json())

    .then((jsonObject) => {

        const forecastfiveDays = jsonObject.list.filter(x => x.dt_txt.includes('12:00:00'));
        const listdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 1;

        forecastfiveDays.forEach(forecast => {
            let date = forecast.dt_txt;
            let i = new Date(date).getDay();
            let two = forecast.main.temp;
            const icon = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;


            document.getElementById(`day${day}`).textContent = listdays[i];
            document.getElementById(`numb-forecast${day}`).textContent = Math.floor(two);
            document.getElementById(`image${day}`).setAttribute('alt', forecast.weather[0].description);
            document.getElementById(`image${day}`).setAttribute('src', icon);
            day++;
            i++;
        })
    });
 

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
