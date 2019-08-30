/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var attempt = 1;
    var winningNumber = (Math.floor(Math.random() * 100) + 1);
    var guess = 0;
    alert(winningNumber);

     do {
         guess = prompt("Give guess");
         guess = parseInt(guess);
        if (guess > winningNumber) {
            alert("too high");
        } else if (guess < winningNumber){
            alert("too low");
        } else if (guess === winningNumber) {
            alert("Congratulations, you have selected the correct number");
        } else {
            alert("error");
        }
       alert("attempt:" + attempt);
        attempt++;
    }  while ((guess < winningNumber || guess > winningNumber) && guess !== winningNumber);



})();
