$(document).ready(function() {
	$("#datepicker").datepicker({ dateFormat: 'dd/mm/yy' });
});

function initialize() {
  var myLatlng = new google.maps.LatLng(-37.804036,144.966683);

  var mapOptions = {
    zoom: 15,
    center: myLatlng,
	disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var image = 'http://www.royalefusion.com.au/images/marker_shadow.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
	  animation: google.maps.Animation.DROP,
	  icon: image
  });
}