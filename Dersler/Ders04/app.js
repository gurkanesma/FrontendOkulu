//giriş
// console.log("Merhaba Js)")

// //var a = 10;
// //var b="javascript";


// var firstNumber = 10;
// var secondNumber = "20";
// console.log("firstNumber + secondNumber");

//hoisting
// var firstNumber 
// console.log(firstNumber);
// firstNumber =20;
// a();
// function a() {
//     console.log("a fonksiyonu");
// }

//boolean
// if(age) { 
//       age >= 18 ? console.log("ehliyet alır") : ("ehliyet alamaz");
// }
  
//Undefined = tanımsız

// var userName;
// console.log(userName);
// console.log(typeof userName);

// //null

// var isNull = null;
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

//object (detaylı bak)

// var user= {
//     name: "Esma",
//     age:24,
//     isActive: true,
//     notlar:{
//         mat: 90,
//     },
// };
// console.log(user);
// console.log(user.name);
// console.log(user.notlar.mat);

// //array
// var fruits = ["elma", "muz","çilek"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);

// //function
// function hello(){
//     console.log("Merhaba")
// }
// hello();
// console.log("hello");

// //Date
// var Date = new Date();
// console.log(Date);

// Çıktı ne olur????
// var a =10;
// var b= a;
// console.log("1-",a,b);
// a=20;
// console.log("2-",a,b);

//çıktı ne olur??
// var a =10;
// var b= a;
// console.log("1-",a,b);
// a=[20];
// console.log("2-",a,b);
// console.log("3-",a*b);

//  var a =[10,20,30,40,50];
//  var b= a;
//  console.log("1-",a,b);
//  a[0]=60;//başı değişitrir
//  a.push(60); //sona ekler
// console.log("2-",a,b);

// //mülakat sorusu Scope- kapsam

// var a= 10; // global scope 
// function scope () {
//     var b = 20; //function scope //dışarıdan erişilmiyor
//     console.log(a,b);
// }
// if(true){
//     let c=30; //block scope
//     b=40;
// }
// {
//     let d= 40;
// }
// console.log(a,b,c,d);

// //Tip döönüşümleri 
// var a= 5;
// console.log(a,typeof a);
// a= String(a);
// console.log(a,typeof a);

// var a= 5 + "2";
// console.log(a,typeof a);

// let value;
// const firstName = "Esma";
// const Lastname = "Gürkan";
// const department = "yazılım";
// const age = 30;

// value = firstName + " "+ Lastname;
// console.log(value);

// //tepmlşate literals 
// value = `İsim`: ${firstName}
// Soyisim: ${lastname}
// Yaş: ${age}

// let value;

// const langs = [ "python","java"];
// const numbers= [43,22,54,66,32,87];

// value = numbers.length; //elaman syaısı
// value = numbers[0]; //ilk eleeman
// console.log(value);
// //............

//karşılaştırma operatörleri 

// a=10; 
// b=20;
// c="10";
// d=10;

// value= a==c; //eşit mi? 
// value= a===c;// hem tip hem değer eşit mi ?
// console.log(value);

// let a= 10;
// let b= 20;
// if(a>b){
// value= `${a} büyüktür ${b}`;
// }else if (a==b){
//     value =`${a} eşittir ${b}`;
// }else{
//     value = `${a} küçüktür ${b}`;
// }
// console.log(value);

// Döngüler
//For

// for( let i =0; i<10; i++){
//     if (i==3) {
//         continue;
//     }
//     console.log(i);
// }
// const langs = [ "python","java"];
// for (let index = 0; index < langs.length; index++) { 
//     console.log(langs[index]);
// }

//functions

// function merhaba (){
//     console.log("MErhaba");
// }
// merhaba();
// function merhaba (){
//     return "Merhaba";
// }
// console.log (merhaba());

// function user(name= "Bilgi yok"){
//     console.log(`İsim: ${name}`);
// }
// user(`Esma`);

//return function

// function square(x){
//     return x*x;
// }
// const result = square(5);
// console.log(result);

//Arrow function

// const square = x => x*x; //tek satırda yazınca otomatik olarak return eder.
