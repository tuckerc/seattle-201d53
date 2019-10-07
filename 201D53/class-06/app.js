var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'attempting to contact html.';

var child = document.createElement('h1');
child.textContent = 'salmon cookie shops: ';
parentEl.appendChild(child);

var iceCreamShop = {
  shopHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm', '6pm', '7pm'],

  hourTotals: [12, 32, 24, 56, 37, 26, 38, 16, 38, 26, 13, 25, 36, 24],

  locationName: 'Pike Place Market',

  randomNumberGenerator: function() {

  },

  render: function() {
    for( var i = 0; i < this.shopHours.length; i++ ) {
      var childEl = document.createElement('li');
      // childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEl.appendChild(childEl);
    }
  }
};

iceCreamShop.render();




























