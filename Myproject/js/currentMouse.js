$(function(){
	$('.footer .little .one').on('mouseenter',function(){
		$(this).children('div').css('display','block');
	})
	$('.footer .little .one').on('mouseleave',function(){
		$(this).children('div').css('display','none');
	})
	$('.back').on('mouseenter',function(){
		$(this).css({'background':'white','border':'1px solid black'}).children('a').eq(0).addClass('active')
	})
	$('.back').on('mouseleave',function(){
		$(this).css('background','black').children('a').removeClass('active')
	})
})