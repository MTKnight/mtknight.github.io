;const requestURL = 'https://mtknight.github.io/assignments/SalmonRiver/js/guides.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
	  const guides = jsonObject['guides'];
	
	  guides.forEach(guide => {
	  var card = document.createElement('section');
	  var name = document.createElement('p');
	  var image = document.createElement('img');
      var cert = document.createElement('p');
      var years = document.createElement('p');
      var email = document.createElement('p');
      var bio = document.createElement('p');

      switch (guide.name) {
        case 'Aragorn II Elessar Telcontar':
        case 'Frodo Baggins':
        case 'Gandalf':
		case 'Legolas':
		case 'Gimli':
		case 'Samwise Gamgee':
		case 'Boromir':
		case 'Meriadoc Brandybuck':
		case 'Peregrin Took':
          name.textContent = guide.name;
          cert.textContent = guide.certification;
          years.textContent = `Years of Experience: ${guide.yearsExperience}`;
          email.textContent = `Email: ${guide.email}`;
          bio.textContent = `Snapshot: ${guide.bio}`;
    
          image.setAttribute('src', `images/${guide.photo}`);
          image.setAttribute('alt', `${guide.name} - ${guide.certification}`);
    
		  card.appendChild(name);
		  card.appendChild(image);
          card.appendChild(cert);
          card.appendChild(years);
          card.appendChild(email);
          card.appendChild(bio);
            
          document.querySelector('div.guides').appendChild(card);
      }
    });
  });