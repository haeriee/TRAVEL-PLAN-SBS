              
$(function() {

	$(".section .cont").mouseover(function() {					
		$(".section .cont").stop().animate({width:"153px"}, 900, 'easeOutCirc').removeClass("on");
		$(this).stop().animate({width:"413px"}, 900, 'easeOutCirc').addClass("on");	
	});

});