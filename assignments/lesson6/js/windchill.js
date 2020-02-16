function getWindChill()
{
    var temp = parseFloat(document.getElementById('temp').innerHTML);
    var windSpeed = parseFloat(document.getElementById('windSpeed').innerHTML);
    var windChill = document.getElementById('windchill');

    if (temp > 50 || windSpeed < 3) {
        windChill.innerHTML = "N/A";
    }else{
        calcWindChill(temp,windSpeed);
    }
}

function calcWindChill(temp,windSpeed)
{
    var result = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temp * Math.pow(windSpeed,0.16));
    windChill.innerHTML = parseFloat(result.toFixed(2));
}

getWindChill();