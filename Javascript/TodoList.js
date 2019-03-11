var todos=[]

function todolist(){
	var input=prompt("What would you like to do");
	while (input!=="quit"){
		if (input==="list"){
			listTodos()
			
		console.log(todos);
		} else if(input==="new"){
			var newTodo=prompt("Enter new todo");
			todos.push(newTodo);
			console.log("Added Todo");
		}else if (input==="delete") {
			var index=prompt("Enter index of the todo to delete");
			todos.splice(index,1);
			console.log("Deleted Todo");
		}
		input=prompt("What would you like to do");
	}
};

window.setTimeout(function(){todolist()

}, 1000);

function listTodo(){
	console.log("*******");
	todos.forEach(function(todo,i){

		console.log(i+": ",todo);
	});
	console.log("*******");

}

console.log("Ok, you quit the app");