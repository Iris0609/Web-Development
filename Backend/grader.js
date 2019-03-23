function average(arr){
	var sum=0;
	var n=arr.length;
	for(var i = 0;i<n;i++){
		sum+=arr[i]

	}
	console.log(Math.round(sum/n));
	return Math.round(sum/n)
}

var scores=[90,98,89,100,100,86,94];
var scores2=[40,65,77,82,80,54,73,63,95,49];
average(scores);
average(scores2);