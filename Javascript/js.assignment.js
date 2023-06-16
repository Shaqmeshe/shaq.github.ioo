var scores = [{"name":"jay","score":"24"}, {"name":"mike","score":"32"}, {"name":"maria","score":"17"}]; // Array of scores
​
var arrayLength = scores.length;// Items in array
var msg = '';                   // Message
​
// Loop through the items in the array
for (var i = 0; i < arrayLength; i++) {
​
    // Get the name from the scores array
    msg += scores[i].name + " --- " ;
  
    // Get the score from the scores array
    msg += scores[i].score + '<br />';
}
​
document.getElementById('class_scores').innerHTML = msg;