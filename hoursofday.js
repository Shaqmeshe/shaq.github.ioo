var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

// Create three variables to store the information needed.
var price =5;
var quantity=14;
var total = price * quantity;
var el = document.getElementById("cost").innerHeight=total
document.write(total);
el.textContent = '$' + today;


// Get the element with an id of cost.



username = 'Meshech';
message = 'i can see you hidding';


var elName = document.getElementById('name') .innerHTML;
document.write(username);
elName.textContent = username;


var elNote = document.getElementById('note');

elNote.textContent = message;

