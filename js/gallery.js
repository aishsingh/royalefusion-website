var currentImageID = 1;
var maxImages = 10;

$(document).ready(function() {
        $('.imageviewer #selected_image img').load(function() {
		$('.imageviewer #selected_image img').fadeIn(400);
	});
	document.getElementById("1").style.opacity = "0.8";
	document.getElementById("1").style.filter = "alpha(opacity=80)";
});

function changePic(newPicID) {
	for(var i = 1; i <= maxImages; i++) {
		if(newPicID == i) {
			for(var x = 1; x <= maxImages; x++) {
				if(x == newPicID) {
					document.getElementById(x).style.opacity = "1.0";
					document.getElementById(x).style.filter = "alpha(opacity=100)";
				}
				else {
					document.getElementById(x).style.opacity = "0.4";
					document.getElementById(x).style.filter = "alpha(opacity=40)";
				}
			}
		}
	}

	$('.imageviewer #selected_image img').fadeOut(400, function() {
		$('.imageviewer #selected_image img').attr('src', "images/gallery/pic" + newPicID + ".png");
	});
	$('.imageviewer #selected_image img').load(function() {
		$('.imageviewer #selected_image img').fadeIn(400);
	});
	currentImageID = newPicID;
}

function imageHover(imageID) {
	for(var i = 1; i <= maxImages; i++) {
		if(imageID == i) {
			document.getElementById(i).style.opacity = "1.0";
			document.getElementById(i).style.filter = "alpha(opacity=100)";
			
			for(var x = 1; x <= maxImages; x++) {
				if(x != i) {
					if(currentImageID != x) {
						document.getElementById(x).style.opacity = "0.4";
						document.getElementById(x).style.filter = "alpha(opacity=40)";
					}
					else {
						document.getElementById(x).style.opacity = "0.8";
						document.getElementById(x).style.filter = "alpha(opacity=80)";	
					}
				}
			}
		}
	}
}

function imageOut() {
	for(var i = 1; i <= maxImages; i++) {
		if(currentImageID == i) {
			document.getElementById(i).style.opacity = "0.8";
			document.getElementById(i).style.filter = "alpha(opacity=80)";
			
			for(var x = 1; x <= maxImages; x++) {
				if(x != i) {
					document.getElementById(x).style.opacity = "0.4";
					document.getElementById(x).style.filter = "alpha(opacity=40)";
				}
			}
		}
	}
}