let countdownInterval;

function setCountdown() {
    const datetimePicker = document.getElementById('datetime-picker');
    const targetDate = new Date(datetimePicker.value);
    if (isNaN(targetDate)) {
        alert('Please select a valid date and time.');
        return;
    }

    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        updateCountdown(targetDate);
    }, 1000);
}

function updateCountdown(targetDate) {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Time is up!';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
