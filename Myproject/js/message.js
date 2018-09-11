$(function(){
	// 鼠标事件
	$('.banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(4).children('a').css('color','black');
	})

	$('.main .search ul li').on('mouseenter',function(){
		$(this).children('a').css('color','black');
	})
	$('.main .search ul li').on('mouseleave',function(){
		$(this).children('a').css('color','#a39c9c');
	})

	$('.main .news .row ul li .right a').on('mouseenter',function(){
		$(this).css('color','black');
	})
	$('.main .news .row ul li .right a').on('mouseleave',function(){
		$(this).css('color','#a39c9c');
	})
	var list = [
		{
			path:'image/1522220972.jpg',
			tip:'联合国教科文组织全球文化研究大会',
			pOne:'2018-03-28 14:52:29 发表',
			pTwo:'一篇题为“没事别想不开去创业公司”，公号“Spenser的二次学习日记”，作者Spenser。这篇讲述创业公司有多难对人要求有多高的文章，7月22日21点发出，次日午间阅读量已过十万加。',
			pThree:'1人看过'
		},
		{
			path:'image/1522220340.jpg',
			tip:'如何提升品牌国际影响力—东道成功举办中国国际商标品牌节论坛',
			pOne:'2018-03-28 14:51:48 发表',
			pTwo:'7月28日中午12时正式预售索尼PlayStation ChinaJoy发布会后，索尼互动娱乐上海有限公司负责人添田武人告诉36氪， 索尼PS VR将于明日12点正式开启预售。',
			pThree:'0人看过'
		},
		{
			path:'image/1522220743.jpg',
			tip:'公司受邀2015国美杯·智能生活全球创客设计大赛启动仪式',
			pOne:'2018-03-28 14:50:54 发表',
			pTwo:'“技术思维”赢了“内容为王”？让我们回到2000年年初，雅虎公司当时正以1250亿美元的市值站在互联网行业的顶峰，是全世界访问量最多的网站“统帅”。',
			pThree:'0人看过'
		},
		{
			path:'image/1522220829.jpg',
			tip:'让世界聆听我们的声音',
			pOne:'2018-03-28 14:53:14 发表',
			pTwo:'如果你是一个数字娱乐爱好者，烦恼没时间去逛美国 E3 展、日本东京电玩展以及德国科隆国际游戏展，那一定就不能错过 ChinaJoy。中国国际数码互动娱乐展览会（简称：ChinaJoy）是全球数码互动娱乐领域最具影响力的盛会。',
			pThree:'0人看过'
		},
		{
			path:'image/1522220829.jpg',
			tip:'让世界聆听我们的声音',
			pOne:'2018-03-28 14:53:14 发表',
			pTwo:'如果你是一个数字娱乐爱好者，烦恼没时间去逛美国 E3 展、日本东京电玩展以及德国科隆国际游戏展，那一定就不能错过 ChinaJoy。中国国际数码互动娱乐展览会（简称：ChinaJoy）是全球数码互动娱乐领域最具影响力的盛会。',
			pThree:'0人看过'
		},
		{
			path:'image/1522220743.jpg',
			tip:'公司受邀2015国美杯·智能生活全球创客设计大赛启动仪式',
			pOne:'2018-03-28 14:50:54 发表',
			pTwo:'“技术思维”赢了“内容为王”？让我们回到2000年年初，雅虎公司当时正以1250亿美元的市值站在互联网行业的顶峰，是全世界访问量最多的网站“统帅”。',
			pThree:'0人看过'
		},
		{
			path:'image/1522220340.jpg',
			tip:'如何提升品牌国际影响力—东道成功举办中国国际商标品牌节论坛',
			pOne:'2018-03-28 14:51:48 发表',
			pTwo:'7月28日中午12时正式预售索尼PlayStation ChinaJoy发布会后，索尼互动娱乐上海有限公司负责人添田武人告诉36氪， 索尼PS VR将于明日12点正式开启预售。',
			pThree:'0人看过'
		},
	]
	var num = list.length%4;
	var res =Math.ceil(list.length/4);
	var index = 1;
	var cont = index*4;
	// 把数组里面的内容写入网页
	$('.main .btn .two').html(index);
	for(var i=0;i<4;i++){
			$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',list[i].path);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(list[i].tip);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(list[i].pOne);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(list[i].pTwo);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(list[i].pThree);
		}
	
	$('.main .btn .next').on('click',function(){
		for(var i=0;i<4;i++){
			$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).removeClass('one');
			$('.main .news .row ul li').eq(i).css('borderBottom','2px solid white');		
		}
		if(index < res){
			index++;
			$('.main .btn .two').html(index);
			$('body,html').animate({scrollTop:0},800);
			for(var i=0;i<4;i++){
				$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',list[cont+i].path);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(list[cont+i].tip);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(list[cont+i].pOne);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(list[cont+i].pTwo);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(list[cont+i].pThree);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).addClass('one');
				$('.main .news .row ul li').eq(i).css('borderBottom','2px solid #ccc');
			}
		}
		else if(index == res){
			$('.main .btn .aout').css('display','block').html('已经是最后一页了');
			for(var i=0;i<num;i++){
				$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',list[cont+i].path);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(list[cont+i].tip);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(list[cont+i].pOne);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(list[cont+i].pTwo);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(list[cont+i].pThree);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).addClass('one');
				$('.main .news .row ul li').eq(i).css('borderBottom','2px solid #ccc');
			}
			index = res;
		}
	})
	$('.main .btn .pres').on('click',function(){
		for(var i=0;i<4;i++){
			$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(null);
			$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).removeClass('one');
			$('.main .news .row ul li').eq(i).css('borderBottom','2px solid white');		
		}
		if(index>2){
			index--;
			$('body,html').animate({scrollTop:0},800);
			for(var i=0;i<4;i++){
				$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',list[cont+i].path);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(list[cont+i].tip);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(list[cont+i].pOne);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(list[cont+i].pTwo);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(list[cont+i].pThree);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).addClass('one');
				$('.main .news .row ul li').eq(i).css('borderBottom','2px solid #ccc');
			}
			$('.main .btn .two').html(index);
		}
		index =1;
		if(index == 1){
			index = 1;
			// $('body,html').animate({scrollTop:0},800);
			$('.main .btn .two').html(index);
			$('.main .btn .aout').css('display','block').html('已经是第一页了');
			for(var i=0;i<4;i++){
				$('.main .news .row ul li').eq(i).children('div').eq(0).children('img').attr('src',list[i].path);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('a').html(list[i].tip);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(0).html(list[i].pOne);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(1).html(list[i].pTwo);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(1).html(list[cont+i].pThree);
				$('.main .news .row ul li').eq(i).children('div').eq(1).children('p').eq(2).children('span').eq(0).addClass('one');
				$('.main .news .row ul li').eq(i).css('borderBottom','2px solid #ccc');
			}
		}		
	})
})