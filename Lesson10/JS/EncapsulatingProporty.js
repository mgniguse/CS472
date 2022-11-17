class CoffeeMachine {
  
    set waterAmount(value) {
      if (value < 0) throw new Error("Negative water");
      this._waterAmount = value;
    }
    get waterAmount() {
      return this._waterAmount;
    }
    constructor(power) {
     this._waterAmount = 0;
     this._power = power;
    }
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  // add water
  coffeeMachine.waterAmount = -10; 
  