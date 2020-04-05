const jsonData = 'https://mtknight.github.io/assignments/SalmonRiver/js/guides.json';

fetch(jsonData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  	const guides = jsonObject['guides'];
  	for (var i=0; i<guides.length; i++){
      if( guides[i].name == "Aragorn II Elessar Telcontar"|| guides[i].name == "Frodo Baggins" || guides[i].name == "Galdalf" ||
      guides[i].name == "Legolas" || guides[i].name == "Gimli" || guides[i].name == "Samwise Gamgee" || guides[i].name == "Boromir" ||
      guides[i].name == "Meriadoc Brandybuck" || guides[i].name == "Peregrin Took"){
  			buildGuideDiv(guides[i]);
  		}
  	}
  });

function buildGuideDiv(data){
	var guidesDiv = document.getElementsByClassName("gudies")[0];
	var newGuide = document.createElement("div");
	var data = document.createElement("div");
	var image = document.createElement("div");
	var name = document.createElement("p");
	var cert = document.createElement("p");
	var years = document.createElement("p");
	var email = document.createElement("p");
	var bio = document.createElement("p");
	var img = document.createElement("img");

	name.textContent = data.name;
	cert.textContent = data.certification;
	years.textContent = "Years of Experience: "+data.yearsExperience;
	email.textContent = "Email: "+data.email;
	bio.textContent = "Short Biography: "+ data.bio;
	img.setAttribute('src', "images/"+data.photo);
	img.setAttribute('alt', data.name);

	data.appendChild(name);
	data.appendChild(cert);
	data.appendChild(years);
	data.appendChild(email);
	data.appendChild(bio);
	newGuide.appendChild(data);
	image.appendChild(img);
	newGuide.appendChild(image);

	guidesDiv.appendChild(newGuide);
}