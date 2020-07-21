//var stringToint = prompt("INPUT : ");
//var int_ = parseInt(stringToint);

//console.log("stringToint : ", typeof(stringToint));
//console.log("int_ : ", typeof(int_));

var obj = {
	property_1 : "p1",
	property_2 : "p2"
};

console.log(obj.property_1);
console.log(obj.property_2);

function return_test(variable1, variable2){
	var dyn = {pro1 : variable1, pro2 : variable2};
	return dyn;
}

console.log(return_test(2, 3).pro1);

console.log(return_test(5, 1.7).pro2);

function if_eqs(a, b){
	return a==b}