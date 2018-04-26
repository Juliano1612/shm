import React, { Component } from 'react';


class HomePage extends Component {
  componentDidMount() {
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
      };
    }
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
  
      function updateClock() {
          var t = getTimeRemaining(endtime);
  
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
          if (t.total <= 0) {
              clearInterval(timeinterval);
          }
      }
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

    initializeClock('clockdiv', deadline);
  }
  render() {
    
  
  
  

  
  
    return (
        <div className="ui center aligned container">
          <h1>Faltam</h1>
          <div id="clockdiv">
            <div>
              <span class="days"></span>
              <div class="smalltext">Dias</div>
            </div>
            <div>
              <span class="hours"></span>
              <div class="smalltext">Horas</div>
            </div>
            <div>
              <span class="minutes"></span>
              <div class="smalltext">Minutos</div>
            </div>
            <div>
              <span class="seconds"></span>
              <div class="smalltext">Segundos</div>
            </div>
          </div>
          <h1>Para o casamento</h1>
      </div>
      
    )
  }

}

export default HomePage;