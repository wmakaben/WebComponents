const SLOT_NUM = 10;
const RING_RADIUS = 200;
var lastScroll;

$(document).ready(function(){
	lastScroll = $('#scroll-back').innerHeight()*0.5;
	$('#scroll-back').scrollTop(lastScroll);


	initRing();

	$('#scroll-back').scroll(function(){
		// Current scrollTop value
		var sTop = $(this).scrollTop();
		// Maximum scrollTop value
		var maxScroll = $(this).prop('scrollHeight') - $(this).innerHeight();
		// Checks if scroll direction is downwards
		var downscroll = sTop > lastScroll;

		// wrap to top
		if(downscroll && $(this).scrollTop() == maxScroll)
			$(this).scrollTop(0);
		// wrap to bottom
		else if(!downscroll && $(this).scrollTop() == 0)
			$(this).scrollTop(maxScroll);

		$('#ring').css({
			'transform': 'rotateX(' + -(($(this).scrollTop()-$(this).innerHeight()*0.5) / $(this).height() * 360) + 'deg)'
		});

		// Update lastScroll value
		console.log(sTop);
		lastScroll = sTop;
	});


});


function initRing(){
	slotAngle = 360/SLOT_NUM;
	for (var i=0; i<SLOT_NUM; i++){
		slot = $('<div class="slot">').text(i+1);
		slot.css('-webkit-transform', 'rotateX(' + slotAngle*i + 'deg) translateZ(' + RING_RADIUS + 'px)');
		$('#ring').append(slot);
	}
}
