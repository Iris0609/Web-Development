//Creat XMLHttpRequest
var xhttp=new XMLHttpRequest();

// if (window.XMLHttpRequest){
// 	xmlhttp = new XMLHttpRequest();

// }else{
// 	xmlhttp = new ActiveXObject("Miscrosoft.XMLHTTP")
// }

//Send a request to a server
//method:get/post,url: the server (file) location,true asyncronize, false syncronize
xhttp.open("GET","ajax_info.txt",true);
xhttp.send();

//With the XMLHttpRequest object you can define a function to be executed when the request receives an answer.
xhttp.onreadystatechange=function(){
	if(this.readyState==4 && this.state==200){
		document.getElementById("demo").innerHTML=this.responseText;
	}
};

//To post data like a form, add http hearder with setRequestHeader()
xhttp.open("Post",url,true);
xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");


//JSONP
JSON.stringify()
JSON.parse()

// JSONP is a method for sending JSON data without worrying about cross-domain issue
// JSONP does not use XMLHttpRequest, used <script> tag instead

<script src="demo_json.php">