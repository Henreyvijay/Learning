class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
const person1 = new Person('Henrey', 32, 'india');
const person2 = new Person('Vijay', 31, 'USA');
console.log('Person-1 Details:');
person1.displayDetails();
console.log('Person-2 Details:');
person2.displayDetails();