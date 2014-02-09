var currentPage = 1;
var maxPages = 7;

$(document).ready(function() {
	$(".menu #border_side .menu_viewer #" + currentPage).delay(1000).fadeIn(400);
	$(".menu #border_side .menu_viewer #" + currentPage).attr('draggable', false);
	document.getElementById("prev").style.visibility = "hidden";
});

function nextPage() {
	$(".menu #border_side .menu_viewer #" + currentPage).fadeOut(400);
	currentPage = currentPage + 1;
	$(".menu #border_side .menu_viewer #" + currentPage).fadeIn(400);
	$(".menu #border_side .menu_viewer #" + currentPage).attr('draggable', false);
	if(document.getElementById("prev").style.visibility == 'hidden') {
		document.getElementById("prev").style.visibility = 'visible';
	}
	
	if(currentPage == maxPages) {
		document.getElementById("next").style.visibility = "hidden";
	}
}
function prevPage() {
	$(".menu #border_side .menu_viewer #" + currentPage).fadeOut(400);
	currentPage = currentPage - 1;
	$(".menu #border_side .menu_viewer #" + currentPage).fadeIn(400);
	$(".menu #border_side .menu_viewer #" + currentPage).attr('draggable', false);
	if(document.getElementById("next").style.visibility == 'hidden') {
		document.getElementById("next").style.visibility = 'visible';
	}
	if(currentPage == 1){
		document.getElementById("prev").style.visibility = "hidden";
	}
}

function prevHover() {
	document.getElementById("prev").style.color = "#ed1c24";
	document.body.style.cursor = "pointer";
}

function nextHover() {
	document.getElementById("next").style.color = "#ed1c24";
	document.body.style.cursor = "pointer";
}
function prevOut() {
	document.getElementById("prev").style.color = "#000";
	document.body.style.cursor = "default";
}

function nextOut() {
	document.getElementById("next").style.color = "#000";
	document.body.style.cursor = "default";
}