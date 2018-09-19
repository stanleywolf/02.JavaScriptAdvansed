'use strict';

function attachEventsListeners() {

    let dayButton = document.getElementById('daysBtn');
    let dayInput = document.getElementById('days');

    let hourButton = document.getElementById('hoursBtn');
    let hourInput = document.getElementById('hours');

    let minButton = document.getElementById('minutesBtn');
    let minInput = document.getElementById('minutes');

    let secButton = document.getElementById('secondsBtn');
    let secInput = document.getElementById('seconds');

    dayButton.addEventListener('click',pressButton);
    hourButton.addEventListener('click',pressButton);
    secButton.addEventListener('click',pressButton);
    minButton.addEventListener('click',pressButton);

    function pressButton( ) {
        if(dayInput.value !== ''){
            hourInput.value = dayInput.value * 24;
            minInput.value = dayInput.value * 1440;
            secInput.value = dayInput.value * 86400;
        }else if(hourInput.value !== ''){
            dayInput.value = hourInput.value / 24;
            minInput.value = dayInput.value * 1440;
            secInput.value = dayInput.value * 86400;
        }else if(minInput.value !== ''){
            dayInput.value = minInput.value / 1440;
            hourInput.value = dayInput.value * 24;
            secInput.value = dayInput.value * 86400;
        }else if(secInput.value !== ''){
            dayInput.value = secInput.value / 86400;
            minInput.value = dayInput.value * 1440;
            hourInput.value = dayInput.value * 24;
        }
    }
}
