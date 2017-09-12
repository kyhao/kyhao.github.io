var display = document.getElementById('time');

function timecounter(dis) {
	var startTime = new Date('Nov, 30, 2013').getTime();
	var days, hours, minutes, seconds;
	this.count = function count() {
		var currentTime = new Date().getTime();
		var durTime = (currentTime - startTime) / 1000;
		days = parseInt(durTime / 86400);
		durTime = durTime % 86400;
		hours = parseInt(durTime / 3600);
		durTime = durTime % 3600;
		minutes = parseInt(durTime / 60);
		seconds = parseInt(durTime % 60);
		dis.innerHTML = '<span class="days">' + days + ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">' + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';
	}
}
var m_t1;
var timeC = new timecounter(display);
m_t1 = setInterval(function() {
	timeC.count();
}, 1000);

//count
