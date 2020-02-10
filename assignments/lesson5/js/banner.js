
function displayBanner() {
    var today = new Date();
    var day = today.getDay();
    var disp = "none";
    if (day == 5) {
        document.getElementById("banner").style.display = disp;
    }
}

