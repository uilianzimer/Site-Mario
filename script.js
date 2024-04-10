class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    talk() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const newPerson = new Person("Uilian", 29);
  const newPerson1 = new Person("Renan", 30);
  const newPerson2 = new Person("Zimer", 29);
  
  newPerson.talk();
  newPerson1.talk();
  newPerson2.talk();
  
