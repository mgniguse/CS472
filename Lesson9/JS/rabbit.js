let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    if (isOwn) {
      console.log(`Own: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }
  

rabbit.__proto__= animal;
alert(rabbit.eats);
alert(rabbit.jumps);