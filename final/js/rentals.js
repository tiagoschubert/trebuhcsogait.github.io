const requestURL = 'http://trebuhcsogait.github.io/final/data/rentals.json';

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//console.table(jsonObject);
  const rentals = jsonObject['rentals'];

  rentals.forEach(rentals => {
    let card = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    td1.innerHTML = `${rentals.renttype}`;
    td2.innerHTML = `${rentals.max}`;
    td3.innerHTML = `$${rentals.reservation[0]['half']}`;
    td4.innerHTML = `$${rentals.reservation[1]['full']}`;
    td5.innerHTML = `$${rentals.walkin[0]['half']}`;
    td6.innerHTML = `$${rentals.walkin[1]['full']}`;
  
    card.appendChild(td1);
    card.appendChild(td2);
    card.appendChild(td3);
    card.appendChild(td4);
    card.appendChild(td5);
    card.appendChild(td6);

    document.getElementById('tr1').appendChild(card);

    let heading = document.createElement('h3');
    let div2 = document.createElement('div');
    let image = document.createElement('img');

image.setAttribute('src', 'images/' + `${rentals.photo}`);
image.setAttribute('alt', `${rentals.renttype}`);
heading.innerHTML = `${rentals.renttype}`;

div2.appendChild(heading);
div2.appendChild(image);

    document.getElementById('rentalsimages').appendChild(div2);



    
  });
});
