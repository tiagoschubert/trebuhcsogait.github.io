// PRESTON CURRENT WEATHER
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=6550c3831761dea8b4e2a100db91503d&units=imperial';

var weatherReq = new XMLHttpRequest();
weatherReq.open('GET', apiURL, true);
weatherReq.responseType = 'json';
weatherReq.send();
weatherReq.onload = function () {
     var weatherData = weatherReq.response;
     var temp = weatherData.main.temp;
     var windSpeed = weatherData.wind.speed;
     var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
     
     document.getElementById("Temperature").innerHTML = weatherData.main.temp.toFixed(1) + "&#8457";
     document.getElementById("Humidity").innerHTML = weatherData.main.humidity.toFixed(1) + "%";
     document.getElementById("WindSpeed").innerHTML = weatherData.wind.speed.toFixed(1) + "mph";
     document.getElementById("WindChill").innerHTML = windChill.toFixed(1) + "&#8457";
}

// PRESTON FORECAST
var forecastRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f82892a0a3a767ffe4875439f1ca5a0d&units=imperial';
fetch(forecastRequestURL)
    .then((response) => response.json())

    .then((jsonObject) => {

        const forecastfiveDays = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
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
    // PRESTON EVENTS  
let city = "Preston";
const URL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];
        towns.forEach(town => {

            if (town.name == city) {
                const events = town.events;
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let hr = document.createElement('hr');
                h2.innerHTML = `Upcoming Events: `;

                div.appendChild(h2);
                div.appendChild(hr);

                events.forEach(event => {
                    let p = document.createElement('p');

                    p.textContent = event;
                    div.appendChild(p);

                });
                document.getElementById('events').appendChild(div);
            }
        });
    });
