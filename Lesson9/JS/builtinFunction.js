const x = new Number(12); 
const y = new String("Hello"); 
const z = new Date(2016, 03, 01); 

/* Number.prototype, String.prototype, Date.prototype 
 are objects with helper methods 
 available because objects were created using new() keyword */ 

console.log(x.toString()); // "12" 
console.log(y.italics()); // "<i>Hello</i>" 
console.log(z.getMonth()); // 3 
