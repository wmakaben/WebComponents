
$(document).ready(function(){
	$('#nav').hover(
		function(){
			$('#nav-menu').stop().animate({
				right: 0
			}, 300);
			$('#nav').stop().delay(200).animate({
				left: 0
			}, 400);
		}, function(){
			$('#nav').stop().animate({
				left: -325
			}, 400);
			$('#nav-menu').stop().delay(300).animate({
				right: 75
			});
		}
	);
});