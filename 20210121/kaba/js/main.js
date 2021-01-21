'use strict';
//この記述で厳密に動作チェックをしてくれるようになる
window.onload=function(){
	//window.onloadで
	//画像の読み込みが終わった後にこの挙動をするよう指定
	let images=document.getElementsByClassName('headerImage');
	let zIndexMax=0;
	let zIndexChange=(eve)=>{eve.target.style.zIndex=++zIndexMax;};//後から追記したため、下の処理をコメントアウト
	let xChange=(eve)=>{
		//console.log(eve.target);
		let x=eve.target.left;
		x=x+30;
		eve.target.style.left=x;
	};
	
	for(let i=0;i<images.length;i++){
		images[i].addEventListener("click",(eve)=>{
			images[i].addEventListener('mouseover',zIndexChange);
			//console.log(eve);
			//eve.target.style.zIndex=++zIndexMax;
			//eveの持つターゲットを指定しないといけない。
			//引数2にfunction(){}を入れた時はthis
		});
	}

}
