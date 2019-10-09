'use strict';

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function sayHello(){
  console.log('hello from sayHello');
}

function handleSubmit(event) {
  event.preventDefault();
  // sayHello();
  console.log('event.target.inputElementName.value: ', event.target.inputElementName.value);
  // console.log('event.target.inputElementAge.value: ', event.target.inputElementAge.value);
  var name = event.target.inputElementName.value;
  var age = event.target.inputElementAge.value;

  if(isNaN(age)){
    alert('Please enter a number');
    event.target.inputElementAge.value = null;
  }
  alert(`Your name is ${name} and your age is ${age}`);
  // new CookieShop(minCust, maxCust, avgCookies, locationName);
}
