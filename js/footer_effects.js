var duration = 1000;
var linkDelay = 100;
var loadDelay = 500;

$(document).ready(function() {
        $('.footer .links #gmaps_icon').hide().delay(loadDelay + linkDelay).show("slide", { direction: "down" }, duration);
        $('.footer .links #fb_icon').hide().delay(loadDelay + (linkDelay*2)).show("slide", { direction: "down" }, duration);
        $('.footer .links #fb_likes').hide().delay(loadDelay + (linkDelay*3)).show("slide", { direction: "down" }, duration);
});