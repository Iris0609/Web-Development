//select

$("img");

$(".sale");

$("#bonus");

$("li a");


$("ul li").css("color","yellow");

$("ul li").css({
	fontSize:"10px",
	border:"3px dashed purple"

}); 

//exercise
$("div").css("color","purple");

$("div.highlight").css("width","200px");

$("dix#third").css("border-color","orange");

$("div:first-of-type").css("color","pink");

.val()//extract value from input
.text()
.attr()//get the value of an attribute for the first element 
.html()
.last()

$("img").attr(attributename,value);

.addClass()
.removeClass()
.toggleClass()

//event
$("item").click(function(){
	$(this).css("background","pink");
});

.keydown()//indicate which key is pressed

.keyup()
.keypress()//indicate which character is pressed

$("input").keypress(function(event){
	if(event.which===13){
		//13 is enter
		console.log();
	}
});

$("input").on()

//click() only effect on existed element
//on("click") can effect on potential future element
