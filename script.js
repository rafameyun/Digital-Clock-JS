function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23 hours
    var m = date.getMinutes(); // 0 - 59 min
    var s = date.getSeconds(); // 0 - 59 sec
    var session = "AM";

    if(h == 0){
        h = 12;
    }
    else if (h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session; // show the clock

    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();