
$(document).ready(function(){
	$('#nav-button').click(function(){ $('#nav-button').css('left') == '0px' ? showNav() : hideNav(); });

	$('#page-content').click(function(){
		if($('#nav-wrapper').css('right') == '150px')
			hideNav();
	});
});

function showNav(){
	$('#nav-wrapper').animate({
		left: 0,
		right: 150
	}, 200, function(){});

	$('#nav-button').animate({
		left: 150,
	}, 200, function(){});
}

function hideNav(){
	$('#nav-wrapper').animate({
		left: -150,
		right: 0,
	}, 200, function(){});

	$('#nav-button').animate({
		left: 0,
	}, 200, function(){});
}