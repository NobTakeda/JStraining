'use strict';
window.onload=function(){
//htmlを読み込み終わってから実行するこの記述があるため、
//jsのみのファイルで先にDOMの取得を書くことができる。
	class Card{
		constructor(suit,num){
			this.suit=suit;
			this.num=num;
			this.front=`${this.suit}${this.num<10? '0':''}${this.num}.gif`;
		}
	}
	//カード配列作成
	const cards=[];
	const suits=['s','d','h','c'];
	for(let i=0;i<suits.length;i++){
		for(let j=1;j<=13;j++){
			let card=new Card(suits[i],j);
			cards.push(card);
		}
	}

	function shuffle(){
		let i=cards.length;
		while(i){//jsでは0がfalseとなる。i--をつけて、最後に0になってbreakとなる。
			let index=Math.floor(Math.random()*i--);
			let temp=cards[index];
			cards[index]=cards[i];
			cards[i]=temp;
		}
	}
	//シャッフル実行
	shuffle();
	//テーブル作成
	const table=document.getElementById('table');
	for(let i=0;i<suits.length;i++){
		let tr=document.createElement('tr');
		for(let j=0;j<13;j++){
			let td=document.createElement('td');
			let tempCard=cards[i*13+j];
			td.classList.add('card','back');
			td.onclick=flip;
			td.num=tempCard.num;
			console.dir(td);
			td.style.backgroundImage=`url(images/${tempCard.front})`;
			//td.textContent=`${tempCard.suit}:${tempCard.num}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	let firstCard=null;
	let rest=52;	
	let flipTimerId=NaN;
	let timerId=NaN;
	function flip(e){
		let td=e.target;
		//td.classList.toggle('back');
		if(!td.classList.contains('back') || flipTimerId){
			return;//表のカードをクリックしても何もしない
			//flipTimerIdが1.2秒経つとNaNになるのでfalseとなる。
		}
		td.classList.remove('back');//カードを表にする
		if(firstCard===null){
			firstCard=td;//1枚目だったら今めくったカードをfirstCardに変更
		}else{
			//2枚目だったら1枚目を比較して結果を判定
			if(firstCard.num===td.num){
				//2枚が同じだった時の処理
				firstCard.classList.add('fadeOut');
				td.classList.add('fadeOut');
				rest-=2;
				if(rest===0){
					clearInterval(timerId);
				}
				firstCard=null;
			}else{
				flipTimerId=setTimeout(function(){
					firstCard.classList.add('back');
					td.classList.add('back');
					flipTimerId=NaN;
					firstCard=null;
				},1200);
			}
		}
	}
	const time=document.getElementById('time');
	let sec=0;
	timerId=setInterval(function(){
		time.textContent=++sec+"(残り:"+rest+"枚)";
	},1000);
};
