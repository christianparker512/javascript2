'use strict';
(function (){
  const second =1000, minute = second * 60, hour = minute *60, day = hour *24;

  let myBirthday  = "August, 2021 16:00:00",
    countdown = new Date(myBirthday).getTime(),
    x = setInterval(function(){
      let nowTime = new Date().getTime(),
        distanceToBirthday = countdown - nowTime;

      document.getElementById('days').innerText = Math.floor(distanceToBirthday/(day));
      document.getElementById('hours').innerText = Math.floor((distanceToBirthday%(day)) /(hour));
      document.getElementById('minute').innerText = Math.floor((distanceToBirthday%(hour)) /(minute));
      document.getElementById('second').innerText = Math.floor((distanceToBirthday%(minute)) /(second));

      console.log(distanceToBirthday);

      if(distanceToBirthday <0) {
        let msg = document.getElementById('days').innerText = "done";
        clearInterval(x);
      }
    },0)
}());
