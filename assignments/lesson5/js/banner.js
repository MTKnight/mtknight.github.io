function showBanner() {
    var date = new Date();
    console.log(date.getDay())
    if(date.getDay() === 5) {
        document.getElementById("banner").style.display = disp;
    } 
}

