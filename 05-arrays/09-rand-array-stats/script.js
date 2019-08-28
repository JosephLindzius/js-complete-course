/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        var numbers = [];
        var i = 0;
        var sum = 0;
        var max = 0;
        var min = 100;

        while  (i < 10) {
            numbers.push(Math.floor(Math.random() * 100));
            sum = sum + numbers[i];
            document.getElementById("n-" + (i+1)).innerHTML = value;
            i++;
        }

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }

        numbers.forEach(function(value, i) {

        });

        var average = sum / numbers.length;
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("average").innerHTML = average;
        document.getElementById("sum").innerHTML = sum;
    });

    /* for (var i = 1; i <= numbers.length; i++) {
             var id = "n-" + i;
             document.getElementById(id).innerHTML = numbers[i];
     }*/


})();
