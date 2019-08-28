/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var target = document.getElementById("target");
    var n = localStorage.getItem('counter');

    if (n === null) {
        n = 0;
    }  //this is used if n is not yet defined.

    localStorage.setItem("counter", n);
    target.innerHTML = n;

    document.getElementById("increment").addEventListener("click", function(){
        n++;
        localStorage.setItem("counter", n);
        target.innerHTML = n;

    });

})();
