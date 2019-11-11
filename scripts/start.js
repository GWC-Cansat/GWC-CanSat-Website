var countFromDate = new Date("Sep 2, 2019 15:30:00").getTime();
    
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance =  now - countFromDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("start").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}, 1000);