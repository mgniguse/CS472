/**
 * app.js
 */
const tripleEyeFuncs=[];
for(var i = 0; i <= 5; i++){
    tripleEyeFuncs[i]= function(){
        return i*3;
    }
}
console.log(tripleEyeFuncs[0]());
console.log(tripleEyeFuncs[1]());
console.log(tripleEyeFuncs[2]());
console.log(tripleEyeFuncs[3]());
console.log(tripleEyeFuncs[4]());


var Funcs=[];
for(var i = 0; i < 5; i++){
    Funcs[i]= function(){
        return i;
    }
}
console.log(Funcs[0]());
console.log(Funcs[1]());
console.log(Funcs[2]());
console.log(Funcs[3]());
console.log(Funcs[4]());