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


friends.forEach(function(fri){
	console.log(fri);
})

