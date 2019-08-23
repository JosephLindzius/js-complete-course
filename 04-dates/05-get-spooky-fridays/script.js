/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click",function () {

      /*  var d = new Date();
        var year = d.getYear();
        var mondays = [];

        d.setDate(1);

// Get the first Monday in the month
        while (d.getDay() !== 1) {
            d.setDate(d.getDate() + 1);
        }

// Get all the other Mondays in the month
        while (d.getYear() === year) {
            var pushDate = new Date(d.getTime());
            mondays.push(pushDate.getDate() + '-' + (pushDate.getMonth()+1) + '-' + pushDate.getFullYear());
            d.setDate(d.getDate() + 7);
        }
        alert(mondays); */

       var year = document.getElementById("year").value;
        var d = new Date();
       d.setFullYear(year, 0, 13);
        var wordMonth = "";
        let month = 0;
        while (month < 12) {
            d.setMonth(month);
            if (d.getDay() === 5) {
                const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var wordMonth = wordMonth + " " +months[d.getMonth()];
            }
            month++;
        }
        alert(wordMonth);
    } );
})();
