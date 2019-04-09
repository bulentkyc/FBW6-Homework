//for class name, has to be upperCase as the beginning

class User {
  //let name, email; no need to write the variable because the parameters have already in the constructor
  //has to create a constructor to set up parameters after the function name
  //right side is the parameters, lefe side are variables
  constructor(name, email, country, age, favFood) {
    this.name = name;
    this.email = email;
    this.country = country;
    this.age = age;
    this.favFood = favFood;
  }

  salute() {
    alert(
      "Hi " +
        this.name +
        "\n" +
        this.email +
        "\n" +
        this.age +
        "\n" +
        this.country +
        "\n" +
        this.favFood
    );
  }
}
//give a variable to call the function
//when use the CLASS constructor, has to be called with NEW.
//class has a default constructor(){} If there is no constructor in the class, then an empty function is genetared, so we have to write constructor()/,
let userInst = new User("Bea", "beablome@gmail.com", "Chinese", "30", "hotpot");

//call the salute function
userInst.salute();

//another example to show how the functon and class work independent for differecnt functions
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
function Person1(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
function Person2(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");
var myUncle = new Person1("Joe", "Doe", 40, "brown");
var myAunt = new Person2("Annie", "Doe", 30, "green");

// Display age
document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "." + myFather.firstName;
document.getElementById("demo1").innerHTML =
  "My Uncle is " + myUncle.age + "." + myUncle.firstName;
document.getElementById("demo2").innerHTML =
  "My Aunt is " + myAunt.eyeColor + "." + myAunt.lastName;

//get method
class UserName {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      alert("name is too short!");
      //   return;
    }
    this._name = value;
  }
}

let userName = new UserName("bess");
document.getElementById("demo3").innerHTML = userName.name; //Beatrix
let userNameEmpty = new UserName(""); //name is too short

//example3 - extending the first one
//1.create a new class
//2. the new class has 1 method , and the name and count as variables
class Food {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  buy(count) {
    this.count = +count;
  }
}
//creating a new class witch extending main one
//the class has 3 methods
//the class has name and count as same with the main class
class Banana extends Food {
  eat(eaten) {
    this.count -= eaten;
  }
  showCount() {
    document.getElementById("demo4").innerHTML =
      "You have " + this.count + " food left!";
    document.getElementById("demo5").innerHTML =
      "You have " + this.count + " " + this.name;
  }
}
// buy methods
let banana = new Banana("green banana"); //green banana is the name
banana.buy(3);
banana.eat(1);
banana.showCount();

//creating another new class witch extending main one
class Orange extends Food {
  buy(count) {
    //has to be count
    this.count += count;
  }

  //also can specific the meaning of the "buy count"
  /*buy(countFromOrange) {
    this.count += countFromOrange;
  }*/
  eat(eaten) {
    this.count -= eaten;
  }
  showCount() {
    document.getElementById("demo6").innerHTML =
      "You have " + this.count + " " + this.name;
  }
}

let orange = new Orange("Madarian");
orange.buy(9);
orange.eat(2);
orange.showCount();
//all the class extends are independent, the count and name inside are not influence with each sother

//super method
class Meloon extends Food {
  buy(count) {
    super.buy(count); //A constructor can use the super keyword to call the constructor of a parent class.
    document.getElementById("demo7").innerHTML =
      "You have " + this.count + " " + this.name;
  }
}
let meloon = new Meloon("Dole");
meloon.buy(6); // show 6

class Strawberry extends Food {
  constructor(name) {
    super(name); //without super, you can not call this
    this.countFromStraberry = 2;
  }
  buy(countFromStraberry) {
    //avoid to use the same named variables in child constructor
    this.countFromStraberry += countFromStraberry;
    document.getElementById("demo8").innerHTML =
      "You have " + this.countFromStraberry + " " + this.name;
  }
}
let strawberry = new Strawberry("strawberry");
strawberry.buy(3); // show 6

//Task One
//create a task and name it Person
//create a method inside of Person and name it aging
//require age for the person increase "age" 1 more
//create an instance from person and name it person

class Person3 {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastname = lastName;
    this.age = age;

    console.log(this.name, this.lastname);
    document.getElementById("demo9").innerHTML =
      "The new person is " + this.name + " " + this.lastname + " " + this.age;
    console.log(this.name, this.lastname, this.age);
  }
  aging(year) {
    //this.age += 1;
    this.age += year;
  }
}

let person = new Person3("Bea", "Blome", 30); //instance from a persons
console.log(person.name, person.lastname, person.age); //when console.log is inside of funcion, use the this.
console.log(Person, person); //when console.log is out, use the instance name
// document.getElementById("demo10").innerHTML =
//   "In 5 years, the person is " + person.aging(5);
console.log(person.name + person.aging(8) + person.age); //person.aging(8) will not show out , and just give the parameter to person.age

class AnotherPerson {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastname = lastName;
    this.age = age;
    document.getElementById("demo11").innerHTML =
      "The another new person is " +
      this.name +
      " " +
      this.lastname +
      " " +
      this.age;
  }
}
let anotherPerson = new AnotherPerson("Chris", "Blome", 29);
document.getElementById("demo11").innerHTML =
  "after 8 years, the new person is " +
  " " +
  person.name +
  " " +
  person.lastname +
  "is " +
  person.age;
console.log(person.name, person.lastname, person.age); // bea blome 38
console.log(AnotherPerson, anotherPerson);

//get method task
// class Person4 {
//   constructor(auth) {
//     this.auth = auth;
//   }
//   get auth() {
//     if (this.age > 17) {
//       return true;
//     }
//   }
//   set auth(age) {
//     if (age < 19) {
//       return true;
//     }
//   }
// }

//task 13
class Person4 {
  constructor(age) {
    this.age = age;
  }
  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 19) {
      this._age = false;
      return;
    }
    this._age = true;
  }
  aging(year) {
    this.age += year;
  }
}
let authAge = new Person4("10");
document.getElementById("demo12").innerHTML = authAge.age;
let authAgeLess = new Person4("19");

//task 14 - 18
//create a new class and name it employee
// Task - 16: create a method into Employee and name it logAge
// This method should log to console age!
// Task - 17: create an instance from Employee and name it employee
// Task - 18: call aging with 20 from employee.
//     Task - 19: call logAge from employee and check the console /
//         Task - 20: extend aging from Employee and add this future:
// log to console also this kind of message - Happy new year, you are XX
// anymore.You are YY years older.
//     Task - 21: Make Task - 13 more flexible.For example, if you set person
// less then 18. For now even if you call aging method and if person
//     getting older more than 18, auth is still false.In this case
// make it true.
class Employee extends Person3 {
  logAge() {
    console.log(this.age);
  }
  aging(year) {
    super.aging(year);
    document.getElementById("demo13").innerHTML =
      "Happy new year, you are " +
      "20 " +
      "years anymore. You are " +
      this.age +
      " years older.";
  }
}

let employee = new Employee("Bulent", "K", 30);
employee.aging(20);
employee.logAge();
