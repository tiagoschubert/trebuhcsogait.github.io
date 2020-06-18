const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
.then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];

    prophets.forEach ( prophet => {

        let cards = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p') ;
        let p2 =document.createElement('p');
        let images = document.createElement('img');
        let fullName = prophet.name + ' ' + prophet.lastname;

        h2.textContent = fullName;
        p1.textContent = " Date of Birth: " + prophet.birthdate;
        p2.textContent = " Place of Birth: " + prophet.birthplace;

        images.setAttribute('src', prophet.imageurl);
        images.setAttribute('alt', fullName + " - " + prophet.order) ;

        cards.appendChild(h2);
        cards.appendChild(p1);
        cards.appendChild(p2);
        cards.appendChild(images);

        document.querySelector('div.cards').appendChild(cards); 
   
    });

});