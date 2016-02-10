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







/*
initRing($('#ring'));

$('#ring').scroll(function(){
	maxScroll = $(this).prop('scrollHeight') - $(this).innerHeight();
    if($(this).scrollTop() == maxScroll){
    	$(this).scrollTop(0);
    }
    
    //else if($(this).scrollTop() == 0){
    //	$(this).scrollTop(maxScroll);
    //}
});
*/
/*
function initRing(ring){
	ringHeight = ring.innerHeight();
	slotHeight = ring.find('.slot').first().innerHeight();
	slotNum = Math.ceil(ringHeight/slotHeight);

	//last = ring.find('.slot').last().clone();
	//first = ring.find('.slot').first().clone();
	//ring.append(first);
	//ring.prepend(last);

	//ring.scrollTop(last.innerHeight()+5);
}
*/
/*
keep track of scroll direction
jump to top/bottom based on direction

pad ring with clones on top and bottom
*/