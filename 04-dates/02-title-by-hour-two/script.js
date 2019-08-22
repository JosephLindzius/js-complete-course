/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
   /* var d = Date();
    var time = d.getHours() + d.getMinutes();
    alert(time); */

    var x = new Date().getHours();
    var y = new Date().getMinutes();
    var time = (x +""+ y);
    parseInt(time);
    alert(time);
    if (time < 1730)  {
        document.getElementById('target').innerHTML = "Good Morning";
    } else {
        document.getElementById("target").innerHTML = "Good Evening";
    }

})();
