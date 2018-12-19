function respTopnav() {
    var x = document.getElementById("topNav");
    if (x.className === "respNav") {
        x.className += " responsive";
    } else {
        x.className = "respNav";
    }
}