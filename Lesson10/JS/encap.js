/**
 * encap.js
 */
"use strict"
class person{
    #fullname = null;
    constructor(name){
        this.#fullname = name;
    }
    getName(){
        return this.#fullname;
    }
    // console.log("Hello"); This can code without putting it inside
}
class personApp{
    main(){
        const p1 = new Person ("Bob");
        console.log(p1.getName());
        // console.log(p1.#fullname); // 
    }

}