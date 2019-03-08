var secret=4;

var guess=Number(prompt("guess a number"));

if(guess===secret){
	alert("You are right!")
}

else if(guess<secret){
	alert("too small! guess again!");
}

else{
	alert("too high!! guess again!");
} 


// var ini=-10;

// while (ini<=19){
// 	console.log(ini);
// 	ini++;
// }

// var ini=10;

// while (ini<=40){
// 	if(ini%2==0){
// 		console.log(ini);

// 	}
	
// 	ini++;
// }

// var ini=300;

// while (ini<=333){
// 	if(ini%2==1){
// 		console.log(ini);
// 	}
// 	ini++;
// }

var ini=5;

while (ini<=50){
	if(ini%5==0 && ini%3==0){
		console.log(ini);
	}
	ini++;
}

// Annoy.js

var answer = prompt("are we there yet?");
while(answer.indexof("yes")!=-1 and answer!="yay"){
	var answer = prompt("are we there yet?");

alert("we made it!");

//for loop in js

// for (init;condiction;ini change){

// }
 


