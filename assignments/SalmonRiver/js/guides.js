const requestURL = 'https://mtknight.github.io/assignments/SalmonRiver/js/guides.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
	  const guides = jsonObject['guides'];
	
    guides.forEach(guide => {
      var card = document.createElement('section');
      var name = document.createElement('h6');
      var certification = document.createElement('h4');
      var year = document.createElement('p');
      var email = document.createElement('p');
      var bio = document.createElement('p');
      var image = document.createElement('img');

      switch (guide.name) {
        case 'Aragorn II Elessar Telcontar':
        case 'Frodo Baggins':
        case 'Galdalf':
          name.textContent = guide.name;
          certification.textContent = guide.certification;
          year.textContent = `Years of Experience: ${guide.yearsExperience}`;
          email.textContent = `Email: ${guide.email}`;
          bio.textContent = `Short Background: ${guide.bio}`;
    
          image.setAttribute('src', `images/${guide.photo}`);
          image.setAttribute('alt', `${guide.name} - ${guide.motto}`);
    
          card.appendChild(name);
          card.appendChild(certification);
          card.appendChild(year);
          card.appendChild(email);
          card.appendChild(bio);
          card.appendChild(image);
            
          document.querySelector('div.guides').appendChild(card);
      }
    });
  });