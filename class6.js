///// objects and methods

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
        return 2019 - this.age;
    }
}

console.log(spiderMan.location.city);

const me = Object.create(spiderMan);
me.alias = 'superman';///can make an object have a new identity or value while still retaining the original


console.log(me);
console.log(spiderMan);
