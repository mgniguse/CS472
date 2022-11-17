/**
 * app.js
 */
// class User{
//     sayHi(){
//         console.log('The name is ${this,name}')

//     }
// }
// const john = new User("John");
// john.sayHi();
// console.log(User)

    // __________________________________________

    class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  // proof: User is a function
  alert(typeof User); // function
  
  // Usage:
  let user = new User("John");
  user.sayHi();

  
  