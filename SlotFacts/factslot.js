
var facts = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12"
];


$(document).ready(function(){
	displayFacts();


	// +1 for borders
	var fHeight = $('.fact').innerHeight()+1;
	// last scroll top value
	var lastScroll = fHeight;
	$('#facts').scrollTop(lastScroll);
	// Maximum scroll value
	var maxScroll = $('#facts').prop('scrollHeight') - $('#facts').innerHeight();
	$('#facts').scroll(function(){

		var sTop = $(this).scrollTop();
		var downScroll = sTop > lastScroll;
		//console.log(sTop);

		// wrap to top
		if(downScroll && $(this).scrollTop() == maxScroll)
			$(this).scrollTop(fHeight);
		// wrap to bottom
		else if(!downScroll && $(this).scrollTop() == 0)
			$(this).scrollTop(maxScroll-fHeight);

		lastScroll = sTop;
	});

	var order = getOrder();

	$('#spin-button').click(function(){ spin(order); });
	//autoScroll(2, 7);


});

function displayFacts(){
	$.each(facts, function(ind, val){
		$('#facts').append($('<div class="fact">').append($('<span class="fact-text">').text(val)));
	});

	$('#facts').prepend($('<div class="fact">').append($('<span class="fact-text">').text(facts[facts.length-1])));
	$('#facts').append($('<div class="fact">').append($('<span class="fact-text">').text(facts[0])));
}

function spin(order){
	var index = order.shift();
	autoScroll(2, index);
	order.push(index);
}

function autoScroll(count, index){
	var maxScroll = $('#facts').prop('scrollHeight') - $('#facts').innerHeight();
	var fHeight = $('.fact').innerHeight()+2;
	$('#facts').stop().animate({
		scrollTop: maxScroll
	}, 500, 'linear', function(){
		$('#facts').scrollTop(fHeight);
		if(count > 0){
			//console.log(count);
			autoScroll(--count, index!=1 ? index : 10);
		}
		else{
			//console.log('done');
			$('#facts').stop().animate({
				scrollTop: fHeight * index
			}, 700, 'easeOutQuad', function(){
				//console.log($('#facts').scrollTop());
			});
		}
	});
}

function getOrder(){
	var order = [];
	$.each(facts, function(i){
		order.push(i+1);
	});
	order = shuffle(order);
	return order;
}

// Fisher-Yates Shuffle
function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

