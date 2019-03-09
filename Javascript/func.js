function isEven(num) {
	if (num%2==0) {
		return true;
	}
	else{
		return false;
	}

}

function factorial(num) {
	var res=0;
	for (var i = 0; i < =num; i++) {
		if (i==0) {
			res*=1
		}
		else{
			res*=i;

		}		
	}

}

function kebabToSnake(s) {
	s.replace("-","_");
	return s;

}

function kebabToSnake(s) {
	//regular expression in js
	s.replace(/-/g,"_");
	return s;

}