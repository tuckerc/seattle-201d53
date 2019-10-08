
//total sales
//render function
//populating the DOM

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var ulFirstAndPike = document.getElementById('firstAndPike');

var firstAndPike = {
  minimumCustomersEachHour: 23,
  maximumCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  generateCustomersEachHour: function() {
    //generate a random number
    //store it in it's array
    for( var i = 0; i < hours.length; i++ ) {

      //creating a random number for each hour
      var customers = randomNumber(this.minimumCustomersEachHour, this.maximumCustomersEachHour);
      //push the random customers into the customersEachHour array
      this.customersEachHour.push(customers);
    }
  },

  generateCookiesEachHour: function() {
    this.generateCustomersEachHour();
    for( var i = 0; i < hours.length; i++ ) {
      var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesForOneHour);
      this.totalCookiesForTheDay += cookiesForOneHour;
    }
  },

  render: function() {
    for( var i = 0; i < hours.length; i++ ) {
      //1. create an element
      var liEl = document.createElement('li');
      //2. add content
      liEl.textContent = `${hours[i]} Cookies: ${this.cookiesEachHour[i]}`;
      //append to the DOM; generateCookiesEachHour
      ulFirstAndPike.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `Daily Total: ${this.totalCookiesForTheDay}`;
    ulFirstAndPike.appendChild(liEl);
  }
};
firstAndPike.generateCustomersEachHour();
firstAndPike.generateCookiesEachHour();
firstAndPike.render();

//helper function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
