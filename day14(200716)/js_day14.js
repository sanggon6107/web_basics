function fun_ret(){
	var inp = document.children[0].children;
	return inp
}

function call_back(){
	console.log("console.log : callBackFunction called.")
}

setInterval(call_back, 5000);

 //onsubmit = "console.log('console.log'); return false;" 
