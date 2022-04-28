document.getElementById("recBox").addEventListener("click", function() {
    if (document.getElementById("start").classList.contains("Rec")) {
        document.getElementById("start").classList.remove("Rec");
        document.getElementById("start").classList.add("notRec");
    } else {
        document.getElementById("start").classList.remove("notRec");
        document.getElementById("start").classList.add("Rec");
    }
});