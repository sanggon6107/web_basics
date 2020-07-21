function a(){
	var v_a = "a";

	function b(){
		var v_b = "b";
		console.log("b : ", typeof(v), typeof(v_a), typeof(v_b));
	}

	b();

	console.log("a : ", typeof(v), typeof(v_a), typeof(v_b));
}
var v = "v";

a(a);

console.log("o : ", typeof(v), typeof(v_a), typeof(v_b));

/****** v_a, v_b  : dynamic, v : static*/

function ta(){
	for (let i = 0; i < 3; i++){
		console.log("inside the block : ", typeof(i));
	}
	console.log("outside of the block", typeof(i));
}
console.log("outside of the function ta() : ", typeof(i));
ta();


function simple_f(){
	console.log("simple_f"); }

var obj = {name : "name", method : simple_f};

function set_name(){
	this.name = "name";
}

var obj_2 = {name : "befor_name()", method : set_name};

console.log(obj_2.name);
obj_2.method();
console.log(obj_2.name);