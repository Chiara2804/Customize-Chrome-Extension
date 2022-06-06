var app = false;

function disp() {
    if (app == false) {
        document.getElementById("color-picker").style.display = "block";
        app = true;
    } else {
        document.getElementById("color-picker").style.display = "none";
        app = false;
    }
}