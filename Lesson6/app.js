/**
 * apps.js
 */
var p=50;
var q =100;
var r = function(p, q, r) {
    console.log(`a = ${a}`); //a = ${a}
    console.log("q = "+ q);// nothing 
    var s = function(p, q, r) {
        p = r;
        console.log(`p = ${p}`);// console.log is not a function
        p = q;
        r = r * 2;
        var a = 75;
        return r;
    }
    return s(p, q, r);
}
a = 17;
q = r(18, 19,100);
console.log("p =" + p);
console.log(`q = ${q}`);
console.log("------------------------------------------------");

function calc (multiplier, base, ...numbers) { 
	var val = numbers.reduce((accumulator, num) => accumulator + num, base); 
	return multiplier * val;
} 

var total = calc(2, 6, 10, 8, 9);
console.log(total);




var adress = {
    street:'main street','number': 1000,
    apartment:{
        'floor': 3,
        'number': 301
    }
};
console.log(adress);
console.log (adress['apartment'],['floor']);
//Global environment (a.k.a global scope)
var myName = 'Msgie';// variable initialization 
//finction environment (a.k.a Function scope)
function printName(){
    var myName1= "Msgie4";
    console.log("My name is "+ myName);
    var num = 2;
    if (num > 0){
        let hisName = ('Naoddd');
        console.log (hisName);
        }
        // console.log (hisName);
}

// alert ("Danger danger!!");
printName();
//global this 
console.log(this);
const name ="MyMy";
// b();
function b(){
    var b =20;
    console.log("Excuting b");
};
b();

var b2 = function(){
    console.log("Excuting b2");
}
console.log(b)

function f() { 
	var a = 1, b = 20, c; 
	console.log("A "+a + " " + b + " " + c); // 1 20 undefined 
	function g() { 
	   var b = 300, c = 4000; 
	   console.log("B "+a + " " + b + " " + c); // 1 300 4000 		   
	   a = a + b + c; 
	   console.log("C "+a + " " + b + " " + c); // 4301 300 4000 
	}
 	   
	console.log("D "+a + " " + b + " " + c); // 1 20 undefined 
	g(); 
	console.log("E "+a + " " + b + " " + c); // 4301 20 undefined 
} 
f();
console.log("---------------------------------------------------")
var x = 10; 
function main() { 
	console.log("A "+"<br>x1 is " + x); 
 
	console.log("B "+"<br>x2 is " + x); 
	if (x > 0) { 
		//var x = 30; // x=30; 
		console.log("C "+"<br>x3 is " + x); 
	} 
	console.log("D "+"<br>x4 is " + x); 
    
	var x = 40; // x=40; 
	var f = function(x) { 
			console.log("E "+"<br>x5 is " + x); 
		 } 
	f(50); 
	 console.log("F "+"<br>x6 is " + x); 
     x = 20;
} 
main(); 
console.log("G "+"<br>x7 is " + x);
console.log("----------------------------------------------");
console.log("-----------------------------------------------");
/**
 * app js
 */
console.log(printName ("John"));
 function printName (name){
    return "Hello "+ name;
}
