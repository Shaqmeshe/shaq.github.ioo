
var inStock;
var shipping;
inStock = true;
shipping = false;
var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('ship');
elShip.className = shipping;


var colors; 
colors = ['white', 'black', 'custom'];
var el = document.getElementById('my box');
el.textContent = colors[0];