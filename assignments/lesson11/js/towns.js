const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
	  const towns = jsonObject['towns'];
	
    towns.forEach(hometown => {
      var card = document.createElement('section');
      var name = document.createElement('h3');
      var moto = document.createElement('h4');
      var year = document.createElement('p');
      var population = document.createElement('p');
      var rainfall = document.createElement('p');
      var image = document.createElement('img');

      switch (hometown.name) {
        case 'Fish Haven':
        case 'Preston':
        case 'Soda Springs':
          name.textContent = hometown.name;
          moto.textContent = hometown.motto;
          year.textContent = `Year Founded: ${hometown.yearFounded}`;
          population.textContent = `Population: ${hometown.currentPopulation}`;
          rainfall.textContent = `Annual Rainfall: ${hometown.averageRainfall}`;
    
          image.setAttribute('src', `images/${hometown.photo}`);
          image.setAttribute('alt', `${hometown.name} - ${hometown.motto}`);
    
          card.appendChild(name);
          card.appendChild(moto);
          card.appendChild(year);
          card.appendChild(population);
          card.appendChild(rainfall);
          card.appendChild(image);
            
          document.querySelector('div.towns').appendChild(card);
      }
    });
  });