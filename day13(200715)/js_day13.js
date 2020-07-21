//import document

var head = document.children[0].children[0];
console.log("var head = document.children[0].children[0] : ", head);
console.log("console")
var chld = head.firstElementChild;
console.log("head.firstElementChild : ", chld);


// js 편집기에서는 document API를 바로 사용하지 못하는 듯 하다.
// import 필요? x ---> js_day13.js:1 Uncaught SyntaxError: Cannot use import statement outside a module
var by_id = document.getElementById("section_h3_id");

function alt_section(){
	var inp = prompt("INPUT : ");

	console.log("prompt operated.")

	if (inp == "__alt__section"){
		by_id.innerHTML = "fun__alt__section_";
	}

	return console.log("alt_section_done")																																											
}

alt_section();