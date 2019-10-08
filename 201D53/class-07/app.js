//location name
//hours array 
//minimum customers
//maximum customers
//total sales
//average cookiesPerHour[]
//average cookiesPerCustomer[]
//multiply customers by cookies
//randomGenerator function

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var ulFirstAndPike = document.getElementById('firstAndPike');

var firstAndPike = {
  minimumCustomersEachHour: 23,
  maximumCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0
}

//helper function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}