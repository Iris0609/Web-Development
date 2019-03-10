var todos=[]





function todolist(){
	var input=prompt("What would you like to do");
	while (input!=="quit"){
		if (input==="list"){
		console.log(todos);
		} else if(input==="new"){
			var newTodo=prompt("Enter new todo");
			todos.push(newTodo);
		}
		input=prompt("What would you like to do");
	}
};

window.setTimeout(function(){todolist()

}, 1000);


console.log("Ok, you quit the app");