var startTime = new Date('Nov, 30, 2013').getTime();
var days, hours, minutes, seconds;
var display = document.getElementById('time');

function count() {
	var currentTime = new Date().getTime();
	var durTime = (currentTime - startTime) / 1000;
	days = parseInt(durTime / 86400);
	durTime = durTime % 86400;
	hours = parseInt(durTime / 3600);
	durTime = durTime % 3600;
	minutes = parseInt(durTime / 60);
	seconds = parseInt(durTime % 60);
}

setInterval(function() {
	count();
	display.innerHTML = '<span class="days">' + days + ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">' + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';
}, 1000);