$(function(){ //$(function(){});で読み込みが終わったら実行
	$('#logo').css({color:'yellow',fontSize:'30px'})
	//document.getElement...('logo'); が$('#logo')にあたる
	.on('click',function(){$(this).css({color:'red'})
			.animate({opacity:0,fontSize:'0px'},2000)
			.animate({opacity:1,fontSize:'140px'},2000,'easeOutBounce');
		});
	//DOMの取得はコストが大きいので、
	//メソッドチェーンを使ってできるだけ1回で済ませる。
});
