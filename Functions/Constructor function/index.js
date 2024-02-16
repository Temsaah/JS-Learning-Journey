function Person(name, age) {
  this.name = name;
  this.age = age;
}

let userName = prompt("What is your name ?");
let userAge = +prompt("what is your age");

var person1 = new Person(userName, userAge);

var personElement = document.createElement("p");
personElement.textContent = `User name is ${person1.name} and your age is ${person1.age}`;

document.body.appendChild(personElement);
