//Check Off Specific Todos By Clicking
$("ul").on("click","li",function(){
	//if li is grey
	//change to black
	//else
	//change to be grey
	$(this).toggleClass("completed");

});

//cliked on x to delet todos
//click is for existing elements, on is for future potential elements
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});

});

$("input[type='text']").keypress(function(event){
	if (event.which===13){
		//grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val(" ");

		//create a new li and add to ul
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i> </span>"+todoText+"</li>");
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});