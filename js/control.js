$('#nav_a').click(function() {
	$('.m_section').hide();
	$('#a').show(500);
	m_t1 = setInterval(function() {
		timeC.count();
	}, 1000);
});

$('#nav_b').click(function() {
	$('.m_section').hide();
	$('#b').show(500);
	clearInterval(m_t1);
});

$('#nav_c').click(function() {
	$('.m_section').hide();
	$('#c').show(500);
	clearInterval(m_t1);
});

$('#nav_d').click(function() {
	$('.m_section').hide();
	$('#d').show(500);
	clearInterval(m_t1);
});