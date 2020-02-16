function showBanner (){
    var date = new Date();
    var announcment = document.getElementsByClassName("banner");
    for (i = 0; i < announcment.length; i++) {
        if (date.getDay() == 5){
            announcment[i].style.display = "block";
        }
        else {
            announcment[i].style.display = "none";
        }
    }
}

showBanner();
