var h1=document.querySelector("h1");
h1.style.color="pink";

var body=document.querySelector("body");
var isBlue=false;

setInterval(function(){
	if(isBlue){
		body.style.background="white";
	}else{
		body.style.background="blue";
	}
	isBlue=!isBlue;
}, 1000);


//Id can only ocurred once in the document
document.getElementById();// return js object

//elements with s
document.getElementsByClassName();//return js object list,looks like array but not, cannot foreach

document.getElementsByTagName();//body, head,h1...

document.querySelector();//take css style selector, #id,. class,only get the first element

document.querySelectorAll();//return all matching elements


//excercise
//1
document.getElementById("first");
//2
document.getElementsByClassName("special")[0];
//3
document.getElementsByTagName("p")[0];
//4
document.querySelector("#first");
//5
document.querySelector(".special");
//6
document.querySelector("p");



//DOM Manipulation
var tag = document.getElementById("hightlight");

//bad code, can define in css, js is for behavior
tag.style.color="yellow";
tag.style.border = "5px solid pink";
tag.style.background = "yellow";

//define a class in css
// .some-class{
// 	color:blue;
// 	boder:solid 5px pink;
// }

tag.classList.add("big");
tag.classList.remove("big");
tag.classList.toggle("big");

var p = document.getElementsByTagName("p")[0];
p.textContent //return just text without tag

p.innerHTML//return text and html tag

p.getAttribute(arributename);
p.setAttribute(arributename,value);

<img alt="Google" height="92" id="hplogo" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" style="padding-top:109px" width="272" onload="window.lol&amp;&amp;lol()" data-atf="4">








