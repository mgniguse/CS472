function Person() {
    console.log(this);
    this.university = 'MUM';
    year = '2016';
  }
  var faculty = new Person(); // Person {university: "MUM"} – no year!
  Person.prototype.greet = function() {
    return 'Hi ' + this.university;
  }
  var greeting = faculty.greet(); // "Hi MUM"
  console.log(greeting);
  