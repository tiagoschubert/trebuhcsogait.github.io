
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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const names = "Preston, Fish Haven, Soda Springs"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
  for (let i = 0; i < towns.length; i++ ) {
    if (names.includes(towns[i].name)) {
      let card = document.createElement('section');
      let texts = document.createElement('div')
      let hIIII = document.createElement('h3');
      let hIII = document.createElement('h4');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let img = document.createElement('img');

      
      hIIII.textContent = towns[i].name;
      hIII.textContent = towns[i].motto;
      population.textContent = "Population: " + towns[i].currentPopulation;
      founded.textContent = "Year Founded: " + towns[i].yearFounded;
      rain.textContent= "Rainfall: " + towns[i].averageRainfall;


      img.setAttribute('src', 'https://loremflickr.com/320/240/barn');
      img.setAttribute('alt', hIIII);

      card.appendChild(texts)
      texts.appendChild(hIIII);
      texts.appendChild(hIII);
      texts.appendChild(founded);
      texts.appendChild(population);
      texts.appendChild(rain);

      card.appendChild(img)
      document.querySelector('div.cards').appendChild(card);}
    }
  
  });