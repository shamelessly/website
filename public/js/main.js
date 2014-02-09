
$(document).ready(function(){
	resize();
});

$(document).on('resize', resize)

function resize(){
	var height = $(window).height();
	$('.row-top').css({height:height});
}
