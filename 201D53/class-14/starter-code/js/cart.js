/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('classBusMall')) || [];
  cart = new Cart(cartItems.items);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tBody = document.getElementsByTagName('tbody')[0];
  document.getElementById('cart').removeChild(tBody);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var table = document.getElementById('cart');  
  var tBody = document.createElement('tbody');
  // TODO: Iterate over the items in the cart
  for (var item = 0; item < cart.items.length; item++) { // var item in cart.items
    // TODO: Create a TR
    var newTR = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    var deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';
    deleteLink.addEventListener('click', removeItemFromCart);
    var quantityTD = document.createElement('td');
    quantityTD.textContent = cart.items[item].quantity;
    var itemTD = document.createElement('td');
    itemTD.textContent = cart.items[item].product;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    newTR.appendChild(deleteLink);
    newTR.appendChild(quantityTD);
    newTR.appendChild(itemTD);
    tBody.appendChild(newTR);
  }
  table.appendChild(tBody);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var removeItem = event.target.parentElement.lastChild.textContent;
  var removeQty = event.target.nextSibling.textContent;
  cart.removeItem(removeItem, removeQty);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
