
$(document).ready(function(){
	resize();
});

$(window).on('resize', resize)

function resize(){
	var height = $(window).height();
	$('.row-top').css({height:height});
}
