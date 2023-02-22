var countDownDate = new Date("May 31, 2023 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = (String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'));
    var hours = (String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'));
    var minutes = (String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'));
    var seconds = (String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'));
    document.getElementById("time").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "TimeIsOver";
    }
}, 1000);