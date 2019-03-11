var p1btn=document.querySelector("#p1");
var p2btn=document.querySelector("#p2");
var p1dis=document.querySelector("#p1score");
var p2dis=document.querySelector("#p2score");
var inputnum=document.querySelector("input");
var numdis=document.querySelector("#maxscore");
var resetbtn=document.querySelector("#reset");
var h1=document.querySelector("h1");
var maxscore=5;
var end=false;

var p1score=0;
var p2score=0;



p1btn.addEventListener("click",function(){

	if(!end){
		p1score++;
	

	if (p1score>maxscore){
		p1dis.classList.add("win");
		p1score=maxscore;
		end=true;
	}
	p1dis.textContent=p1score;
	}
});

p2btn.addEventListener("click",function(){
	if(!end){
		p2score++;
	
		
	if (p2score>maxscore){
		p2dis.classList.add("win");
		p2score=maxscore;
		end=true;
	}
	p2dis.textContent=p2score;
	}
});

resetbtn.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score=0;
	p2score=0;
	p1dis.textContent = 0;
	p2dis.textContent = 0;
	p1dis.classList.remove("win");
	p2dis.classList.remove("win");
	end=false;
}

inputnum.addEventListener("change",function(){
	maxscore=Number(inputnum.value);
	numdis.textContent=maxscore;
	reset();

});

