$(function(){
	var index=1;
	var num = 0;
	$('div.main div.silde ul.ceil li').first().css('border','4px solid #ccc').siblings().css('border','4px solid white');
	$('#pres').on('click',function(){
		if(index == 1){
			index = 3;
			$('div.main div.silde ul.image').css('left','-2698px');
		}
		index -=2;
		run();
	})
	$('#next').on('click',function(){
		run();
	})
	var timer = setInterval(run,5000)
	function run(){
		if(index >2){
			index = 1;
			$('div.main div.silde ul.image').css('left','0px');
		}
		var obj={
			left:-index*1349+'px'
		}
		index++;
		$('div.main div.silde ul.image').animate(obj,800);
		if(num>=1){
			num = 0;
			$('div.main div.silde ul.ceil li').eq(num).css('border','4px solid #ccc').siblings().css('border','4px solid white');
		}else{
			num ++;
			$('div.main div.silde ul.ceil li').eq(num).css('border','4px solid #ccc').siblings().css('border','4px solid white');
		}
	}
	$('.main .silde').on('mouseenter',function(){
		clearInterval(timer);
		$('.main #pres').css('display','block').next().css('display','block');
	})
	$('.main .silde').on('mouseleave',function(){
		timer = setInterval(run,5000);
		$('.main #pres').css('display','none').next().css('display','none');		
	})
})