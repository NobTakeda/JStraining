$(function(){
	$('.slider').each(function(){
			let $slider=$(this);
			let $slideContainer=$slider.find('.slideContainer');
			let $slides=$slideContainer.find('img');
			let index=0;
			let id;
			/*
			//先頭の要素を複製してコンテナに追加
			let $first=$slidesOrg.eq(0).clone();
			$slideContainer.append($first);
			//コンテナにある画像を全て取得
			let $slides=$slideContainer.find('img');
			*/
			//画像それぞれの位置を決める(横並び)
			$slides.each(function(i){
					$(this).css({left:i*100+'%'});
				});
			
			//アニメーション処理
			function startInterval(){
				id=setInterval(function(){
					$slideContainer.animate({left:-100*(++index%$slides.length)+'%'},500,'easeInOutExpo');
				},3000);
			}
			$slider.on({
				mouseenter:function(){clearInterval(id);},
				mouseLeave:startInterval
			});
			startInterval();
			/*
			setInterval(function(){
					$slideContainer.animate({left:-100*(++index%$slides.length)+'%'},500,'easeInOutExpo',function(){
							if(index===$slides.length-1){
								index=0;
								$slideContainer.css({left:'0px'});
							}
						});
				},3000);
			*/
		});
});
