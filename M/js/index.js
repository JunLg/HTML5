$(function(){
	// 轮播图
	var index=1;	
	var width = $('body').innerWidth();
	// 当调整浏览器窗口的大小时，发生 resize 事件,让轮播图随时匹配窗口的大小
	$(window).on('resize',function(){
		clearInterval(timer);
		width = $('body').innerWidth();
		$('.wrap .main .sildeShow .image').css('left',-(index-1)*width+'px');
		timer = setInterval(fun,2000);
	})
	function fun(){
		if(index>4){
			index=1;
			$('.wrap .main .sildeShow .image').css('left','0px');
		}
		var obj={
			left:-index*width+'px'
		}
		index++;
		$('.wrap .main .sildeShow .image').animate(obj,800);
	}
	var timer = setInterval(fun,2000);

	// 滚动条事件
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.wrap .header').css('backgroundColor','white');
			$('.wrap .header .banner .nav li a').css({'color':'black'});
			$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid black'});
			$('.wrap .header .banner .coin').css('backgroundPosition','left bottom');
			$('.wrap .header .banner .nav li').on('mouseenter',function(){
				$(this).children().css({'borderBottom':'2px solid black'});
				$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid black'});
			})
			$('.wrap .header .banner .nav li').on('mouseleave',function(){
				$(this).children().css({'borderBottom':'0px'});
				$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid black'});
			})
		}else{
			$('.wrap .header').css('backgroundColor','transparent');
			$('.wrap .header .banner .nav li a').css('color','white');
			$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid white'});
			$('.wrap .header .banner .coin').css('backgroundPosition','left top');
			$('.wrap .header .banner .nav li').on('mouseenter',function(){
				$(this).children().css({'borderBottom':'2px solid white'});
				$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid white'});
			})
			$('.wrap .header .banner .nav li').on('mouseleave',function(){
				$(this).children().css({'borderBottom':'0px'});
				$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid white'});
			})
		}
	})

	// 鼠标事件
	$('.wrap .header .banner .nav li').on('mouseenter',function(){
		$(this).children().css({'borderBottom':'2px solid black'});
		$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid black'});
	})
	$('.wrap .header .banner .nav li').on('mouseleave',function(){
		$(this).children().css({'borderBottom':'0px'});
		$('.wrap .header .banner .nav li a').eq(0).css({'borderBottom':'2px solid black'});
	})

	// 点击事件
	var count = true;
	$('.wrap .header .banner .btn').on('click',function(){
		if($('.wrap .header .list').css('display') == 'none'){
			$('.wrap .header .list').css('display','block');
		}
		else if($('.wrap .header .list').css('display') == 'block'){
			$('.wrap .header .list').css('display','none');
		}	
	})
})