$(function(){
	// 滚动条事件
	$(window).scroll(function(){
		if($(window).scrollTop() >= 300){
			$('.back').css('display','block');
		}else{
			$('.back').css('display','none');
		}
	})
	// 鼠标事件
	$('.header .banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.header .banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(1).children('a').css('color','black');
	})
	
	var obj = {
		backgroundSize:'580px'
	}
	var obj1 = {
		backgroundSize:'500px'
	}
	$('div.main .all a').on('mouseenter',function(){
		$(this).children('span').eq(0).animate(obj,500);
		$(this).children('div').eq(0).css({'border':'3px solid white'})
	})
	$('div.main .all a').on('mouseleave',function(){
		$(this).children('span').eq(0).animate(obj1,500);
		$(this).children('div').eq(0).css('border','3px solid transparent')
	})

})