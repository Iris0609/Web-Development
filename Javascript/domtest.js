var btn=document.getElementsByTagName("button")[0];
var bgc=true;
// btn.addEventListener("click",function(){
// 	var bd=document.getElementsByTagName("body")[0];
// 	if(bgc===false){
// 		bd.style.background="white";
// 	}else{
// 		bd.style.background="purple";
// 	}
// 	bgc=!bgc;


// });

btn.addEventListener("click",function(){
	document.body.classList.toggle("purple");



});