/**
 * product.js
 */
"use strict"
class product {
    constructor(productId, name, unitPrice, dateSupplied) {
        this.productId = productId;
        this.name = name;
        this.unitPrice = unitPrice;
        this.dateSupplied = dateSupplied;
    }
    //Getters
    get productId() { return this._productd; }
    get name() { return this._name; }
    get unitPrice() { return this._unitPrice; }
    get dateSupplied() { return this._dateSupplied; }
    //Setter 
    set productId(value) {
        this._productId = value;
    }
    set name(value) {
        this._name = value;
    }
    set unitPrice(value) {
        this._unitPrice = value;
    }
    set dateSupplied(value) {
        this._dateSupplied = value;
    }
    toString(){
        return `
        {
            productId: ${this._productId},
            Name: ${this._name},
            UnitPrice: ${this._unitPrice},
            DateSupplied: ${this._dateSupplied}  
        }  

            `;
        }
    }
    const products = [
        new product(101,"Apple", 1.55, new Date(2022,10,15)),
        new  product(102,"Bananas", 0.50, new Date(2022,10,16)),
        new product (103,"carrots", 1.90, new Date(2022,10,17))
    ];
    products[0].name = "Apples"; // ca;;ing a setter
    products.forEach(p => console.log(p.toString()));
    const carrots = products[2];
    console.log(carrots.dateSupplied);// Calling a getter
        
    
        
    

