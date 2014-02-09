var currentReview;
var interval = 7000;

$(document).ready(function() {
        $('.container .pic #slider img:gt(0)').hide();
        $('.container .pic #slider :first-child').load(function() {
		$('.container .pic #slider :first-child').fadeIn(500);
	});
	setInterval(function() {
		$('.container .pic #slider :first-child').fadeOut(500)
			.next('img').fadeIn(500)
            .end().appendTo('.container .pic #slider');
	}, interval);
	setInterval(function(){showReview()}, interval);
	showReview();
});

function showReview() {
	var newReview = Math.floor(Math.random()*3);
	while (newReview == currentReview) {
		newReview = Math.floor(Math.random()*3);
	}
	if (newReview == 0) {
		document.getElementById('review').innerHTML='"Many thanks for a great evening. Great food with plenty of spice (not talking about the chilli) and very authentic food"';
		document.getElementById('customerName').innerHTML='- Tash';
		document.getElementById('via').innerHTML='via Urbanspoon';
	}
	else if (newReview == 1) {
		document.getElementById('review').innerHTML='"I have lived here for 30yrs in melbourne, and have eaten at many Indian restaurants.... The food quality and the taste is by far one of the best. I tried the tandoori chicken patter and chow-mein which made me feel like im back in India. Everyone must go check this place out"';
		document.getElementById('customerName').innerHTML='- Tash';
		document.getElementById('via').innerHTML='via Urbanspoon';
	}
	else if (newReview == 2) {
		document.getElementById('review').innerHTML='"The food was good, fresh especially Dal makhani it was awesome , the kitchen is open so everything prepared in front of us , friendly environment great service everything is good so 10/10"';
		document.getElementById('customerName').innerHTML='- Tash';
		document.getElementById('via').innerHTML='via Urbanspoon';	
	}
	currentReview = newReview;
}
