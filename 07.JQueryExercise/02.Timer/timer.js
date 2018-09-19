function timer() {

    let sec = $('#seconds');
    let min = $('#minutes');
    let hour = $('#hours');

    let startButton = $('#start-timer');
    startButton.on('click', startTimer);

    let stopButton = $('#stop-timer');
    stopButton.on('click', stopTimer);

    let incr = null;

    function increment() {
        let currentSec = +sec.text() + 1;

        if (currentSec === 60) {
            currentSec = 0;

            let currencMinute = +min.text() + 1;
            if (currencMinute === 60) {
                currencMinute = 0;

                hour.text(('0' + +hour.text() + 1).slice(-2));
            }
            min.text(('0' + currencMinute).slice(-2));
        }
        sec.text(('0' + currentSec).slice(-2));
    }
        function startTimer() {
            if (incr === null) {
                incr = setInterval(increment, 1000);
            }
        }

        function stopTimer() {
            if (incr !== null) {
                clearInterval(incr);
                incr = null;
            }
        }

}



