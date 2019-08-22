/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("red").addEventListener("click", function() {
        //document.body.style.backgroundColor = "red";
       // document.body.style.backgroundImage = "url('/home/Joseph/Desktop/becode_projects/atw-lamarr-2-13/2.The-Hills/js-complete-course/_shared/img/becode-seal.png')";
        document.body.style.background = "red url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        document.body.style.backgroundSize = "auto 25vh";
        //document.getElementById("bg").style.setProperty('main-blue', 'red');
    });
    document.getElementById("green").addEventListener("click", function() {
        document.body.style.background = "green url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        document.body.style.backgroundSize = "auto 25vh";
    });
    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.background = "yellow url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        document.body.style.backgroundSize = "auto 25vh";
    });
    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.background = "blue url(../../_shared/img/becode-seal.png) top .5rem center no-repeat";
        document.body.style.backgroundSize = "auto 25vh";
    });

})();
