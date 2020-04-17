class Person {
    //created a constructor and added properties 
    constructor(name,age,gender,interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
     //Creating a Method
    hello (){
        return "Hello, my name is " + this.name + "and I am " + this.age + "years old. " + "My interests are " + this.interests;
    }

}
//creating new objects that are link to person class

let person = new Person('Ryan', 30, 'male',[' being a hardarse ', 'agile', 'and ssd hard drives.'])
let greeting = person.hello()

console.log (greeting)
