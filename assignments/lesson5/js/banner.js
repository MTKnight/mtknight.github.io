function showBanner() {
    var date = new Date();
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = names[date.getDay()];
    
    if(day=="Friday"){
        document.getElementById("banner").style.display = disp;
        } else {
        document.getElementById("banner").style.display = "none";
    }
    console.log(dayname)
}

