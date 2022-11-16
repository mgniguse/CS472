// a constructor function
function Foo(y) {
      this.y = y;
    }
     
    // inherited properties
    Foo.prototype.x = 10;
    Foo.prototype.calculate = function (z) {
      return this.x + this.y + z;
    };
     
    // now create our "b" and "c" objects using "pattern" Foo
    var b = new Foo(20);
    var c = new Foo(30);
     
    // call the inherited method
    console.log(b.calculate(30)); // 60
    console.log(c.calculate(40)); // 80
     
    // let's show that we reference properties we expect 
    console.log(
     
      b.__proto__ === Foo.prototype, // true
      c.__proto__ === Foo.prototype, // true
     
      // also "Foo.prototype" automatically creates a special 
      //property "constructor", which is a reference to the 
      //constructor function itself; instances "b" and "c" may 
      //use to check their constructor
      b.constructor === Foo, // true
      c.constructor === Foo, // true
      Foo.prototype.constructor === Foo, // true
     
      b.calculate === b.__proto__.calculate, // true
      b.__proto__.calculate === Foo.prototype.calculate // true
      );
    
    