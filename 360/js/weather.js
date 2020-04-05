const appid = "d828b9bbd5a4d69655f7f329aa88e0c8";
var id = "4092267";

const forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=${appid}`;
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    for (var i=0; i<fiveday.length; i++) {
      var d = new Date(fiveday[i].dt_txt);
      var dayName = days[d.getDay()];
      document.getElementById("day" + i).textContent = dayName;
      document.getElementById("temp" + i).innerHTML = parseFloat(fiveday[i].main.temp).toFixed(0) + "&#8457;";
      document.getElementById("icon" + i).setAttribute("src", `https://openweathermap.org/img/w/${fiveday[i].weather[0].icon}.png`);
      document.getElementById("icon" + i).setAttribute("alt", fiveday[i].weather[0].description);
    }
  });