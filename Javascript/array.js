var friends=["Charlie", "Liz", "David", "Mattias"];

//initialize array

var friends=[];
var friends= new Array();//uncommon

//Arrays can hold any types of data
var random_collection=[49,true,"Hermine",null];

//length property
friends.length

//pop the right most element
friends.pop();
friends.push("Simon");

//add element in front of the array
friends.unshift();
//pop the left most element
friends.shift();

//find index
friends.indexOf();

//array slice
//end is optional
// non parameter means the all array
friends.slice(start index, end index)

//delete element by index
friends.splice(index,number)


friends.forEach(function(fri){
	console.log(fri);
})


function printReverse(array){
	// while (array.length!=0){
	// 	console.log(array.pop());

	// }
	for (var i = array.length-1; i >=0; i--) {
		console.log(array[i]);
	}
}

printReverse(friends);


function isUniform(arr){
	var first=arr[0];
	arr.forEach(function(a){
		if(a!=first){
			return false;
		}
	});
	return true;
}

isUniform(friends);

function max(arr){
	var max=arr[0];
	arr.forEach(function (a) {
		if(a>max){
			max=a;
		}
	});
	console.log(max);

}

max(friends);

function sumArray(array){
	var s=0;
	array.ForEach(function(a){
		s+=a;
	});
	console.log(s);
}

sumArray(friends);


function myForEach(arr,func){
	//loop through array
	for(var i=0; i<arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}

}


Array.prototype.myForEach=function(func){
	for (var i=0;i<this.length;i++){
		func(this[i]);
	}
}

friends.myForEach(alert)