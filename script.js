const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');





const newYear = "24 Aug 2022";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = (newYearDate -currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const mintues = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds % 60) ;
    
   
daysEl.innerHTML = days;
hoursEl.innerHTML =mytimeFormat (hours);
minsEl.innerHTML =mytimeFormat (mintues);
secondsEl.innerHTML = mytimeFormat(seconds);

    
}

function mytimeFormat(time){
    return time < 10 ? (`0${time}`): time;
}

countdown()

setInterval(countdown, 1000);