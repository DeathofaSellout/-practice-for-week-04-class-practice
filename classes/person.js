class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() { //instance method
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  static introducePeople(...Persons) {
    if (!Array.isArray(Persons)) { //f the argument is not of type Array
      return console.log("introducePeople only takes an array as an argument.");
    }
    Persons.forEach((person) => {
      if ((person instanceof Person) !== true) { //if any of the items in the array are not instances of the Person class.
        return console.log("All items in array must be Person class instances.");
      }
    });

    Person.forEach((person) => { introduce(person); });
    //If there are no errors logged to the console, call introduce on each of
    //the People instances in the input array.
  }
}




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}