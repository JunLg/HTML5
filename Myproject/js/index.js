$(function(){
	// 滚动条滚动事件
	var a = false;
	 var b = false;
	 var c = false;
	 var d = false;
	 var e = false;
	 var f = false;
	 var g = false;
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('div.advantage .advTop .left').offset().top) ){
			if(a == false){
				$('div.advantage .advTop .left div').animate({height:'180px'},700).animate({height:'160px'},700);
				a = true;
			}			
		}
		if($(window).scrollTop() >= ($('div.advantage .advTop .right .top').offset().top) -300 ){
			if(b == false){
				$('div.advantage .advTop .right .top div').css({'display':'block'}).animate({width:'350px'},700).animate({width:'300px'},700);
				b = true;
			}			
		}
		if($(window).scrollTop() >= ($('div.advantage .advTop .right .bottom').offset().top)-300 ){
			if(c == false){
				$('div.advantage .advTop .right .bottom div').css({'display':'block'}).animate({width:'350px'},700).animate({width:'300px'},700);
				c = true;
			}			
		}
		if($(window).scrollTop() >= ($('div.advantage .advBottom').offset().top-300) ){
			if(d == false){
				$('div.advantage .advBottom div').css({'display':'block'}).animate({width:'650px'},700).animate({width:'600px'},700).css('width','600px');
				d = true;
			}
		}

		if($(window).scrollTop() >= ($('div.main .but').eq(0).offset().top)-500){
			if(e == false){
				$('div.main .but').eq(0).children('h2').animate({height:'60px'},800).css('border','1px solid #6c6a6a');
				e = true;
			}
		}
		if($(window).scrollTop() >= ($('div.main .but').eq(1).offset().top)-500){
			if(f == false){
				$('div.main .but').eq(1).children('h2').animate({height:'60px'},800).css('border','1px solid #6c6a6a');
				f = true;
			}
		}
		if($(window).scrollTop() >= ($('div.main .but').eq(2).offset().top)-500){
			if(g == false){
				$('div.main .but').eq(2).children('h2').animate({height:'60px'},800).css('border','1px solid #6c6a6a');
				g = true;
			}
		}
		if($(window).scrollTop() >= ($('div.respect').offset().top)){
			$('div.respect .right .text .one').css({'display':'block'}).animate({height:'300px'},1500).delay(1000).siblings().eq(0).css({'display':'block'}).animate({height:'300px'},1500).delay(1000).siblings().eq(1).css({'display':'block'}).animate({height:'300px'},1500);
		}
	})
	// 点击事件
	var num = parseInt($('.main .case ul li').css('left'));
	$('.main .case .pres').on('click',function(){
		if(num == 0){
			$('.main .case ul li').css('left','-1172px');
			num = -1172;
		}else{
			num +=293;
			$('.main .case ul li').css('left',num+'px');			
		}
	});
	$('.main .case .next').on('click',function(){
		if(num == -1172){
			$('.main .case ul li').css('left','-1172px');
			num = 293;
		}else{
			num -=293;
			$('.main .case ul li').css('left',num+'px');			
		}
	});

	// 鼠标事件
	$('.banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(0).children('a').css('color','black');
	})
	$('div.main .advantage .advTop .left').on('mouseenter',function(){
		var obj ={
			backgroundSize:'660px'
		}
		$(this).animate(obj,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.6)');
	})
	$('div.main .advantage .advTop .left').on('mouseleave',function(){
		var obj1 ={
			backgroundSize:'600px'
		}
		$(this).animate(obj1,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.2)');
	})
	$('div.main .advantage .advTop .right .top').on('mouseenter',function(){
		var obj ={
			backgroundSize:'660px'
		}
		$(this).animate(obj,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.6)');
	})
	$('div.main .advantage .advTop .right .top').on('mouseleave',function(){
		var obj1 ={
			backgroundSize:'600px'
		}
		$(this).animate(obj1,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.2)');
	})
	$('div.main .advantage .advTop .right .bottom').on('mouseenter',function(){
		var obj ={
			backgroundSize:'660px'
		}
		$(this).animate(obj,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.6)');
	})
	$('div.main .advantage .advTop .right .bottom').on('mouseleave',function(){
		var obj1 ={
			backgroundSize:'600px'
		}
		$(this).animate(obj1,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.2)');
	})
	$('div.main .advantage .advBottom').on('mouseenter',function(){
		var obj ={
			backgroundSize:'1380px'
		}
		$(this).animate(obj,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.6)');
	})
	$('div.main .advantage .advBottom').on('mouseleave',function(){
		var obj1 ={
			backgroundSize:'1229px'
		}
		$(this).animate(obj1,600)
		$(this).children('div').css('background','rgba(255, 255, 255,0.2)');
	})

	$('div.main .case ul li').on('mouseenter',function(){
		$(this).children('img').eq(1).show().eq(0).hide();
	})
	$('div.main .case ul li').on('mouseleave',function(){
		$(this).children('img').show();
	})

	$('div.main .respect .right .one a').on('mouseenter',function(){
		$(this).children('div').animate({width:'70px'},800);
	})
	$('div.main .respect .right .one a').on('mouseleave',function(){
		$(this).children('div').animate({width:'20px'},800);
	})
	$('div.main .respect .right .two a').on('mouseenter',function(){
		$(this).children('div').animate({width:'70px'},800);
	})
	$('div.main .respect .right .two a').on('mouseleave',function(){
		$(this).children('div').animate({width:'20px'},800);
	})
	$('div.main .respect .right .three a').on('mouseenter',function(){
		$(this).children('div').animate({width:'70px'},800);
	})
	$('div.main .respect .right .three a').on('mouseleave',function(){
		$(this).children('div').animate({width:'20px'},800);
	})
	

	$('div.main .search ul li').on('mouseenter',function(){
		$(this).children('a').css('color','black')
	})
	$('div.main .search ul li').on('mouseleave',function(){
		$(this).children('a').css('color','#a39c9c')
	})

	$('.wrap .main .news ul li a').on('mouseenter',function(){
		$(this).css('color','black')
	})
	$('.wrap .main .news ul li a').on('mouseleave',function(){
		$(this).css('color','#a39c9c')
	})
})