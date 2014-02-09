
$(document).ready(function(){
	setTimeout(resize, 800);
});

$(window).on('resize', resize)

function resize(){
	var height = $(window).height();
  var topHeight = $('.row-top').height();
  if(topHeight > height){
    height = topHeight;
  }
	$('.row-top').css({height:height});
}
