/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var i = 0;
    var text = document.getElementById("target").innerText;
    var container = document.getElementById("target");
    container.innerText = "";
    var speed = 50;

    function typeText() {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText, speed);
        }
    }
    typeText();
})();
