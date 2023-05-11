const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function digitalClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 11) {
        h = h - 12;
        ampm = "PM";
    }

    if (h < 10){
        h = "0" + h;
    } else h;
    if (m < 10){
        m = "0" + m;
    } else m;
    if (s < 10){
        s = "0" + s;
    } else s;
    
     if (h == 0){
        h = 12;
    };

    setTimeout(digitalClock);

hoursEl.innerText = h;
minutesEl.innerText = m;
secondsEl.innerText = s;
ampmEl.innerText = ampm;
}

digitalClock();
