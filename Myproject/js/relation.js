$(function(){
	$('.banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(5).children('a').css('color','black');
	})
})