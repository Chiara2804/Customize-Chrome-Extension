document.getElementById("recBox").addEventListener("click", function() {
    if (document.getElementById("recButton").classList.contains("Rec")) {
        document.getElementById("recButton").classList.remove("Rec");
        document.getElementById("recButton").classList.add("notRec");
    } else {
        document.getElementById("recButton").classList.remove("notRec");
        document.getElementById("recButton").classList.add("Rec");
    }
});