/**
 * gettersAndSetters.js
 * */class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  }
  let user = new User("John");
  console.log(user.name); // calling the getter
  user.name = "Fred";  //calling the setter
  user.name = "Sam";
  console.log(user.name);
  user2 = new User(""); // Name too short.
  class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
    get name() {
      return this._name;
    }
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  }
  let user = new User("John");
  user.nam = "Jim";
  console.log(user.nam);
  
  