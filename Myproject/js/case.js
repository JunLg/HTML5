$(function(){
	// 点击事件
	$('.main .more').on('click',function(){
		$(this).text('已经是最后一页了');
		$(this).css('background','rgba(53, 51, 51, 0.86)')
		$('.main .decs').css('height','1100px');
	})

	// 鼠标事件
	$('div.main .all .decs div').on('mouseenter',function(){
		$(this).children('img').eq(1).show().eq(0).hide();
	})
	$('div.main .all .decs div').on('mouseleave',function(){
		$(this).children('img').show();
	})

	$('div.main .VI div').on('mouseenter',function(){
		$(this).children('img').eq(1).show().eq(0).hide();
	})
	$('div.main .VI div').on('mouseleave',function(){
		$(this).children('img').show();
	})

	$('div.main .art div').on('mouseenter',function(){
		$(this).children('img').eq(1).show().eq(0).hide();
	})
	$('div.main .art div').on('mouseleave',function(){
		$(this).children('img').show();
	})
	
	$('div.main .package div').on('mouseenter',function(){
		$(this).children('img').eq(1).show().eq(0).hide();
	})
	$('div.main .package div').on('mouseleave',function(){
		$(this).children('img').show();
	})
	$('.header .banner ul li a').on('mouseover',function(){
		$(this).css('color','black');
	})
	$('.header .banner ul li a').on('mouseout',function(){
		$(this).css('color','#a39c9c').parent().parent().children('li').eq(2).children('a').css('color','black');
	})

	$('.wrap .detail .silde').on('mouseenter',function(){
		$(this).children('a').css('display','block')
	})
	$('.wrap .detail .silde').on('mouseleave',function(){
		$(this).children('a').css('display','none')
	})

	// 点击事件
	var index;
	var list = [
		{
			path1:'image/01.jpg',
			path2:'image/02.jpg',
			path3:'image/03.jpg',
			path4:'image/04.jpg',
			tip:'这款速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/05.jpg',
			path2:'image/06.jpg',
			path3:'image/07.jpg',
			path4:'image/08.jpg',
			tip:'针对的适用人群多以白领上班族为主',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/09.jpg',
			path2:'image/010.jpg',			
			path3:'image/011.jpg',
			path4:'image/012.jpg',
			tip:'2016德国iF设计奖、红点奖获奖作品',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/013.jpg',
			path2:'image/014.jpg',
			path3:'image/015.jpg',
			path4:'image/016.jpg',
			tip:'所针对的适用人群多以白领上班族为主',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/017.jpg',
			path2:'image/018.jpg',
			path3:'image/019.jpg',
			path4:'image/020.jpg',
			tip:'这款速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/021.jpg',
			path2:'image/022.jpg',
			path3:'image/023.jpg',
			path4:'image/024.jpg',
			tip:'也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/025.jpg',
			path2:'image/026.jpg',
			path3:'image/027.jpg',
			path4:'image/028.jpg',
			tip:'2016德国iF设计奖、红点奖获奖作品',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/029.jpg',
			path2:'image/030.jpg',
			path3:'image/031.jpg',
			path4:'image/032.jpg',
			tip:'一项全新培育并且足够唯一性的产品',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/033.jpg',
			path2:'image/034.jpg',
			path3:'image/035.jpg',
			path4:'image/036.jpg',
			tip:'均需要设计方自行挖掘和创新',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/037.jpg',
			path2:'image/038.jpg',
			path3:'image/039.jpg',
			path4:'image/040.jpg',
			tip:'为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/041.jpg',
			path2:'image/042.jpg',
			path3:'image/043.jpg',
			path4:'image/044.jpg',
			tip:'出版社品牌策划，以简洁唯美的树叶作为创作设计创意',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
		{
			path1:'image/049.jpg',
			path2:'image/050.jpg',
			path3:'image/051.jpg',
			path4:'image/052.jpg',
			tip:'也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新',
			decs:'作为一项全新培育并且足够唯一性的产品，这款名为“伴者”的速溶饮品，客户方也为其注册了相关的英文名称-—“bonzer”。所提供给设计方的资料，除了这个名称，也就是产品的基本属性以及售价了，其余所有，均需要设计方自行挖掘和创新。凌云创意针对于市面上常见的罗汉果产品进行了一番调研，并对目前这一款“速溶饮品”进行了分析。所针对的适用人群多以白领上班族为主，这一类人群，工作压力大，生活闲暇时间相对较少，但是又对产品的审美要求比较高，那么一款颜值高的速溶产品，或许更能进入他们的视线一些。而传统球状，需要破坏再冲泡的罗汉果，第一是在使用过程中显得略微繁琐，第二就是烘烤制作的过程良莠不齐，许多罗汉果的卫生品质得不到保证，并且作为商品而言，存在一些老旧的痕迹。针对这些问题，我们为其设定了新形象的整体调性之后，展开了为期数十个工作日的设计和打样。最终以这样的一组形态来诠释我们对这个产品的理解。'
		},
	]
	$('div.main .all .decs div').children('span').on('click',function(){
		index = $(this).parent().index();
		fun();
	})
	$('.wrap .VI div').eq(0).on('click',function(){
		index = 0;
		fun();
	})
	$('.wrap .VI div').eq(1).on('click',function(){
		index = 8;
		fun();
	})
	$('.wrap .VI div').eq(2).on('click',function(){
		index = 9;
		fun();
	})
	$('.wrap .VI div').eq(3).on('click',function(){
		index = 10;
		fun();
	})
	$('.wrap .VI div').eq(4).on('click',function(){
		index = 11;
		fun();
	})
	$('.wrap .art div').eq(0).on('click',function(){
		index = 6;
		fun();
	})
	$('.wrap .art div').eq(1).on('click',function(){
		index = 7;
		fun();
	})
	$('.wrap .package div').eq(0).on('click',function(){
		index = 1;
		fun();
	})
	$('.wrap .package div').eq(1).on('click',function(){
		index = 2;
		fun();
	})
	$('.wrap .package div').eq(2).on('click',function(){
		index =3;
		fun();
	})
	$('.wrap .package div').eq(3).on('click',function(){
		index = 4;
		fun();
	})
	$('.wrap .package div').eq(4).on('click',function(){
		index = 5;
		fun();
	})
	function fun(){
		$('body,html').animate({scrollTop:0},800);
		$('.main').css('display','none').next().css('display','block');
		$('.detail .banner').children('a').eq(2).html('VI设计/品牌策划');
		$('.detail .nav').children('h3').eq(0).html('VI设计/品牌策划');
		$('.silde .img li a img').eq(0).attr('src',list[index].path1);
		$('.silde .img li a img').eq(1).attr('src',list[index].path2);
		$('.silde .ceil li img').eq(0).attr('src',list[index].path3);
		$('.silde .ceil li img').eq(1).attr('src',list[index].path4);
		$('.detail .decs h2').html(list[index].tip);
		$('.detail .decs p').html(list[index].decs);
	}
	var num = 0;
	$('.wrap .detail .silde .ceil li').css('border','1px solid transparent').eq(0).css('border','2px solid blue')
	$('.wrap .detail .silde .pres').on('click',function(){
		if(num == 0){
			num = 1;
			$('.wrap .detail .silde .img li').css('display','none').eq(num).css('display','block');
			$('.wrap .detail .silde .ceil li').css('border','1px solid transparent').eq(num).css('border','2px solid blue')
		}else{
			num --;
			$('.wrap .detail .silde .img li').css('display','none').eq(num).css('display','block');
			$('.wrap .detail .silde .ceil li').css('border','1px solid transparent').eq(num).css('border','2px solid blue')
		}		
	})
	$('.wrap .detail .silde .next').on('click',function(){
		if(num == 1){
			num = 0;
			$('.wrap .detail .silde .img li').css('display','none').eq(num).css('display','block');
			$('.wrap .detail .silde .ceil li').css('border','1px solid transparent').eq(num).css('border','2px solid blue')
		}else{
			num ++;
			$('.wrap .detail .silde .img li').css('display','none').eq(num).css('display','block');
			$('.wrap .detail .silde .ceil li').css('border','1px solid transparent').eq(num).css('border','2px solid blue')
		}
	})

	$('.wrap .detail .banner a').eq(0).on('click',function(){
		$(this).attr('href','index.html');
	})
	$('.wrap .detail .banner a').eq(1).on('click',function(){
		$(this).attr('href','case.html');
	})

	$('.wrap .detail .nav a').on('click',function(){
		$('body,html').animate({scrollTop:'604px'},800);
	})
})