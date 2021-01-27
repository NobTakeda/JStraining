$(function(){
	$('.image').on('mouseover',function(){
		$(this).find('strong').stop(true).animate({opacity:1,left:'0%'},400);
	})
	.on('mouseout',function(){
		$(this).find('strong').stop(true).animate({opacity:0,left:'-200%'},400);
	});
	$('#menus li').each(function(i){//each...menus liの要素全てに対して行う。
	//functionの引数にiを用いることで、function内でiを用いた処理ができる。
	//*iは0から始まる(この場合はliの要素が4つの配列とみなしている)
			$(this).css({top:(i%2==0? -5:5)+"px",left:i*130+"px"})
			.on('mouseover',function(){
					$(this).animate({width:'110px',height:'110px',lineHeight:'110px'},200);
				})
			.on('mouseout',function(){
					$(this).animate({width:'100px',height:'100px',lineHeight:'100px'},200);
				});
		});
});
