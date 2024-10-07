
//HEWAN//

// Base Class: Animal
class Animal {
    speak() {
      console.log("The animal makes a sound");
    }
  }
  
  // Subclass: Dog
  class Dog extends Animal {
    speak() {
      console.log("The dog barks");
    }
  }
  
  // Subclass: Cat
  class Cat extends Animal {
    speak() {
      console.log("The cat meows");
    }
  }
  
  // Subclass: Bird
  class Bird extends Animal {
    speak() {
      console.log("The bird chirps");
    }
  }
  
  // Subclass: Cow
  class Cow extends Animal {
    speak() {
      console.log("The cow moos");
    }
  }
  
  // Testing polymorphism
  let animals = [new Dog(), new Cat(), new Bird(), new Cow()];
  
  animals.forEach((animal) => {
    animal.speak(); // Each animal calls its own speak method
  });

  
//KENDARAAN//

  // Base Class: Vehicle
class Vehicle {
  startEngine() {
    console.log("The vehicle's engine is starting...");
  }
}

// Subclass: Car
class Car extends Vehicle {
  startEngine() {
    console.log("The car's engine is starting...");
  }
}

// Subclass: Motorcycle
class Motorcycle extends Vehicle {
  startEngine() {
    console.log("The motorcycle's engine is starting...");
  }
}

// Testing polymorphism
let vehicles = [new Car(), new Motorcycle()];

vehicles.forEach((vehicle) => {
  vehicle.startEngine(); // Each vehicle calls its own startEngine method
});


//PERALATAN//

// Base Class: Appliance
class Appliance {
  turnOn() {
    console.log("The appliance is turning on...");
  }
}

// Subclass: WashingMachine
class WashingMachine extends Appliance {
  turnOn() {
    console.log("The washing machine is turning on...");
  }
}

// Subclass: Refrigerator
class Refrigerator extends Appliance {
  turnOn() {
    console.log("The refrigerator is turning on...");
  }
}

// Testing polymorphism
let appliances = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => {
  appliance.turnOn();
});


//MAKANAN//


// Base Class: Food
class Food {
  describe() {
    console.log("This is a type of food.");
  }
}

// Subclass: Pizza
class Pizza extends Food {
  describe() {
    console.log("This is a pizza, an Italian dish.");
  }
}

// Subclass: Sushi
class Sushi extends Food {
  describe() {
    console.log("This is sushi, a Japanese dish.");
  }
}

// Testing polymorphism
let foods = [new Pizza(), new Sushi()];

foods.forEach((food) => {
  food.describe();
});


//HANDPHONE//

// Base Class: Handphone
class Handphone {
  specifications() {
    console.log("This is a generic handphone.");
  }
}

// Subclass: iPhone
class iPhone extends Handphone {
  specifications() {
    console.log("This is an iPhone. It runs iOS.");
  }
}

// Subclass: AndroidPhone
class AndroidPhone extends Handphone {
  specifications() {
    console.log("This is an Android phone. It runs Android OS.");
  }
}

// Testing polymorphism
let phones = [new iPhone(), new AndroidPhone()];

phones.forEach((phone) => {
  phone.specifications();
});

