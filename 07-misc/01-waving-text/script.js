/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var container = document.getElementById("target");
    var letters = document.getElementById("target").innerText;
    console.log(letters);
    letters = letters.split("");
    console.log(letters);
    container.innerText = "";
    var fsize = 20;
    var checker = true;
    letters.forEach(function(letter) {
        var wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.fontSize = fsize +"px";
        if (fsize > 50) {
            fsize = 20;
        }
        fsize += 5;

        container.appendChild(wrap);
    });

    // wrap.style.position = "relative";
    // wrap.style.bottom = i+"px";
    // wrap.style.transform = "rotate("+-i+" deg)";
    // your code here
    /* function wave(target) {
        var result = [],
            i;

        for (i = 0; i < string.length; i++) {
            if (string[i] === ' ') continue;
            result.push(Array.from(string, (c, j) => i === j ? c.toUpperCase() : c).join(''));
        }
        return result;
    }
    alert(wave(target));

    console.log(wave("hello"));
    console.log(wave(" h e y "));
    console.log(wave("")); */

    // attempt two
    /* var letterContainer = document.getElementById("target");

    var letters = letterContainer.innerText;

    letters = letters.split("");

    letterContainer.innerText = "";

    var offset = 0;

    letters.forEach(function(letter, i){
        var wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.position = "relative";
        wrap.style.bottom = i+"px";
        wrap.style.transform = "rotate("+-i+"deg)";
        letterContainer.appendChild(wrap);
    }) */

    //attempt 3


})();

