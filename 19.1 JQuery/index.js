// $ is the same as writing jQuery
$("h1").addClass("big-title");

$(document).keydown(function(event) {
    $("h1").text(event.key);
})