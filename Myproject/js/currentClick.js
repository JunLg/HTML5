$(function(){
	// 点击事件
	$('.main .banner ul li').on('click',function(){
		$('.main .banner').nextAll('div').css('display','none');
		$('.main .banner').nextAll('div').eq($(this).index()).css('display','block');
		$(this).parent().children('li').children('a').removeClass('active')
		$(this).parent().children('li').eq($(this).index()).children('a').addClass('active');
		console.log($('.main .banner').nextAll('div').eq($(this).index()));
	})
	$('.back').on('click',function(){
		$('body,html').animate({scrollTop:'0px'},1000);
	})
})