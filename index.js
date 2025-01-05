setInterval(function(){
    var Time = new Date();
    var hour = Time.getHours();
    var minutes = Time.getMinutes();
    var seconds = Time.getSeconds();
    var amOrpm = hour >= 12 ? "PM" : "AM";
    
    if (hour > 12) {
        hour -= 12;
    }
    
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    var timeArray = [hour, minutes, seconds, amOrpm];


    var digitDivs = Array.from(document.querySelectorAll(".digit"));
    var timeDigits = timeArray.join("").split("");
    
   
    timeDigits.forEach((digit, i) => {
        Array.from(digitDivs[i].querySelectorAll("li")).forEach((e) => {
            e.style.top = -(parseInt(digit) * 50) + "px";
        });
    });
}, 1000);
