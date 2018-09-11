$(function(){
	// 鼠标事件
	$('.header .banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.header .banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(3).children('a').css('color','black');
	})

})