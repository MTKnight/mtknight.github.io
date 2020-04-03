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
      var cert = document.createElement('h4');
      var years = document.createElement('p');
      var email = document.createElement('p');
      var bio = document.createElement('p');
      var image = document.createElement('img');

      switch (guide.name) {
        case 'Aragorn II Elessar Telcontar':
        case 'Frodo':
        case 'Gandalf':
        case 'Legolas':
        case 'Gimli':
        case 'Samwise':
        case 'Boromir':
        case 'Meriadoc':
        case 'Peregrin':
          name.textContent = guide.name;
          cert.textContent = guide.certification;
          years.textContent = `Years Experience: ${guide.yearsExperience}`;
          email.textContent = `Email: ${guide.email}`;
          bio.textContent = `Biography Snapshot: ${guide.bio}`;
    
          image.setAttribute('src', `images/${guide.photo}`);
          image.setAttribute('alt', `${guide.name} - ${guide.cert}`);
    
          card.appendChild(name);
          card.appendChild(cert);
          card.appendChild(years);
          card.appendChild(email);
          card.appendChild(bio);
          card.appendChild(image);
            
          document.querySelector('div.guides').appendChild(card);
      }
    });
  });