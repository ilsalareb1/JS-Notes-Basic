//  LOOPS & ITERATIONS 

 const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
/* for ( i = 0; i <= cars.length;) {
    console.log(cars[i]);
   
} */

/*cars.forEach(function(car){
    console.log(`${car}`);
})
 */

 //sCOPE
/*  function test1(){
     console.log('test1');
     function test2(){
         console.log('test2');
         function test3(){
             console.log('test3');
             //if you added "test1();" here it would be an infinite loop
         }
         test3();
     }
     test2();
 }

 test1(); */

 //its like unwrapping lettuce, the outer layers log first then it keeps going 

 ///HOISTING 
/* 
 test1();
 notHoisted();///this call doesn't work because the const or any other var has to be defined first

 function test1(){
     console.log('this is hoisted?');
 }

 const notHoisted = function(){
     console.log('I am not hoisted');
 }
 */

 ///this keyboard

 /* function test1(){
     console.log(this);
 }
 test1();
  */

 const spiderMan = {
    alias: 'Spider-man',
    firstName: 'Peter',
    lastName: 'Parker',
    age: 16,
    goodGuy: true,
    location: {
        state: 'NY',
        city: 'NYC',

    },
    getBrithYear: function(){
        /* return 2019 - this.age; */
        console.log(this);
    }
}

spiderMan.getBrithYear();

function Hero(alias, powers, age){
    this.alias = alias;
    this.powers = powers;
    this.age = age;
}

const batman = new Hero('Batman', 'Wealthy', 44);
console.log(batman);