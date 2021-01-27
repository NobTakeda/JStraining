$(function(){
	$('.slideshow').each(function(){
			const fadeTime=2000;
			let $slides=$(this).find('img');
			//変数$slidesにimgタグの要素を配列として格納
			let i=0;
			$slides.eq(i).fadeIn(fadeTime);
			//eq(i)...listのget(i)と同じ。
			setInterval(function(){
					$slides.eq(i++).fadeOut(fadeTime);//i++で後置なので、処理を終えてからiの値が変わる
					if(i==$slides.length){i=0;}
					$slides.eq(i).fadeIn(fadeTime);
				},3000);//第一引数の内容を第二引数のIntervalで処理
		});
});
