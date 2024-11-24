// //object Literal

// const person1 = {
//     name:'esma',
//     age:24,
//     langs:['java', 'python'],
//     address:{
//         city: 'İstanbul',
//         street: 'bakırköy',
//     },
//     showInfos: function (){
//         console.log(this.name,this.age,this.langs,this.address);
//     },
// };

// const person2 = {
//     name:'beren',
//     age:34,
//     langs:['java', 'python'],
//     address:{
//         city: 'İstanbul',
//         street: 'bakırköy',
//     },
//     showInfos: function (){
//         console.log(this.name,this.age,this.langs,this.address);
//     },
// };

// YApıcı Fonksiyon(Constructor)

function Person(name,age,langs){
  this.name = name;
this.age = age;
this.langs = langs;

// this.showInfos = function (){
//     console.log(this.name,this.age,this.langs);  
// };
}

Person.prototype.showInfos = function () {
    console.log(this.name,this.age,this.langs); 
}

function Employee(name,age,langs,salary){
    Person.call(this,name,age,langs);
    this.salary = salary; //diiğerinden miras alıyoruz.
}
   Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("esma",24,["java","python"]);
console.log(emp1);
emp1.showInfos();

const person1 = new Person("esma",24,["java","python"]);
const person2 = new Person("beren",34,["javascript","go"]);

console.log(person1);
console.log(person2);
person1.showInfos();
person2.showInfos();