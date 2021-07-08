class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.bark = function() {
    console.log(`Woof I am ${this.name}`);
  };
  
  const pet = new Dog('Mara');
  
  pet.bark(); //Woof I am Mara
  
  delete Dog.prototype.bark;
  
  pet.bark(); //TypeError: pet.bark is not a function