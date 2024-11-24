// //Class

// class Employee{
//   onstructor(name,age,salary){
//     this.name = name;
//   this.age = age;
//   this.salary = salary;  
// }
// showInfos(){
//     console.log('İsim: ${this.name} Yaş:${this.age} Maaş: ${this.salary}');
//     const emp1 = new Employee("Esma,24")
// }
// };
  
// class Matematik  {
//     cube(x){
//         console.log(x*x*x);
//     }
//     static cube2(x){
//         console.log(x*x*x*);
//     }
// }
//   const math = new Matematik();
//   math.cube(3);

//   Math.random();

//kalıtım 

class Person {
    constructor (name,age) { 
        this.name = name ; 
        this.age = age;
    }
    showInfos() { 
        console.log('İsim: ${this.name} Yaş:${this.age} ');
    }
}

class Employee  extends Person{
    constructor (name,age,salary) { 
        super(name,age) ;
        this.age = age;
        this.salary = salary;
    }
}

const emp = new Employee("Esma",24,);
console.log(emp);
emp.showInfos();