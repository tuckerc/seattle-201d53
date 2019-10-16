'use strict';
//store dogs in terrels basement
var terrelsBasement = [];

//build a dog constructor function
function Dog(name, age) {
  this.name = name;
  this.age = age;
  terrelsBasement.push(this);
}

//instantiate dogs
new Dog('fluffy', 13);
new Dog('spike', 4);
new Dog('tippy', 3);
new Dog('peeve', 13);
new Dog('fundito', 5);
new Dog('mangosteen', 83);
new Dog('Larry', 13);

//stringifiy the data
var terrelsBasementStringified = JSON.stringify(terrelsBasement);
//storing 'data' into local storage
localStorage.setItem('data', terrelsBasementStringified);
//getting 'data' from local storage
var storageTerrelsBasement = localStorage.getItem('data');
//parsing storageTerrelsBasement

var parsedTerrelsBasement = JSON.parse(storageTerrelsBasement);

for( var i = 0; i < parsedTerrelsBasement.length; i++) {
  new Dog(parsedTerrelsBasement[i].name, parsedTerrelsBasement[i].age);
};

if(there is local storage) {
  -retrieve data from local storage
  -assign data to where it will be used
} else {
  create instances
}
render to page