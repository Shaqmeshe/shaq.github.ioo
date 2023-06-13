var title; 
var message;

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';

var elNote = document.getElementById('note');
elNote.innerHTML = message;

var elTitle = document.getElementById('title');
elTitle.textContent = title;