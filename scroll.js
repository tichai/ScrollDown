jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
});

$(document).ready( function() {
	$('.toTop').click(function() {
		$("html","body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});