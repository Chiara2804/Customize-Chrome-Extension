var app = false

function appear() {
    if (app == false) {
        document.getElementById('background-image').style.display = "block";
        app = true;
    } else {
        document.getElementById('background-image').style.display = "none";
        app = false;
    }
}

document.getElementById('background-image').addEventListener('change', readURL, true);

function readURL() {
    var file = document.getElementById('background-image').files[0];
    var reader = new FileReader();
    var readFile = reader.readAsDataURL(file);

    reader.onloadend = function() {
        document.getElementById("main-background-image").style.backgroundImage = "url(" + reader.result + ")";
    }

    if (file) {
        readFile;
    } else {}
}