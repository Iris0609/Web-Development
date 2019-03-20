//Form Validation

function validationForm(){
	var x = document.forms["myForm"]["fname"].value;
	if (x == ""){
		alert("Name must be filled out");
		return false;
	}
}

//HTML
// <form name="myForm" action="/action_page.php" onsubmit="return validationForm"
// method="post">
// Name:<input type = "text" name = "fname">
// <input type="submit" value="Submit">
// </form>


//Forms API

// <input id="id1" type="number" min="100" max="300" required>
// <button onclick="myFunction()"> OK</button>
// <p id="demo"></p>

// <script>
// function myFunction(){
// 	var inpObj=document.getElementbyId("id1");
// 	if (!inpObj.checkValidity()){
// 		document.getElementbyId("demo").innerHTML=inpObj.validationMessage;

// 	}
// }
// </script>


//call function in js
//call(), and object can use a method belonging to another object
var person={
	fullName:function(){
		return this.firstName+" "+this.lastName;
	}
}

var person1={
	firstNmae="Iris",
	lastName="Zou"
}

person.fullName.call(person1);//return Iris Zou


//apply
person.fullName.apply(person1);//return Iris Zou

//The Difference between apply and call

//The call() method takes arguments separately
//The apply() method takes arguments as an array


var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
person.fullName.call(person1,"Oslo","Norway");

//Nested Function
function add(){
	var counter=0;
	function plus(){
		counter+=1;
	}
	plus();
	return counter;
}
//function closures
var add=(function(){
	var counter=0;
	return function(){
		counter+=1;
		return counter

	}

})();

//
var para=document.createElement("p");
var text=document.createTextNode("Hello");
para.appendChild(text);

insertBefore()

getElementBy... return HTMLcollections
query return NodeList


