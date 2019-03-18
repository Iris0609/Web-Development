
var colors;
var pickedColor;
var mode="hard";
var h1=document.getElementsByTagName("h1")[0];
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var newColors=document.querySelector("#newColors");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");



init();

function init(){
	//initialize button
	easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	mode="easy";
	newGames();
	});

	hardbtn.addEventListener("click",function(){
		easybtn.classList.remove("selected");
		hardbtn.classList.add("selected");
		mode="hard";
		newGames();
		
	});



	newColors.addEventListener("click",function(){
		newGames();
		
	});

	newGames();


	//initialize squares
	for(var i=0; i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listener
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if (clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			newColors.textContent="Play Again?";
			changeColor(pickedColor);
			h1.style.background=pickedColor;

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
		});
	}
	newGames();
	

}




function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random]
}

function generateRandomColors(num){
	var arr=[];

	for(var i=0;i<num;i++){
		var red= Math.floor(Math.random()*256)
		var green= Math.floor(Math.random()*256)
		var blue= Math.floor(Math.random()*256)
		var randomColor="rgb("+red+", "+green+", "+blue+")";
		arr.push(randomColor);
	}

	return arr;

}


function newGames(){
	messageDisplay.textContent=""; 
	newColors.textContent="New Colors";
	h1.style.background="steelblue";
	if(mode==="hard"){
		colors=generateRandomColors(6);

		}else{
			colors=generateRandomColors(3);
		}

	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}else{
			squares[i].style.display="none";
		}
	}
		

};






// var container=document.querySelector('container');

//use even bubbling to bind click, "this" in bubbling are always the "container"; this=e.currentTarget
// var container=document.getElementById("container");
// container.addEventListener('click',function(e){
// 	if(e.target.className==="square"){
// 		var clickedcolor=e.target.style.backgroundColor;
// 		if (clickedcolor===pickedcolor){
// 			console.log(clickedcolor);

// 		}else{
// 			e.target.style.backgroundColor="#232323";
// 		}

// 	}
// })