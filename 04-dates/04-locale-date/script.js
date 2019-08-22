/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    function updateTime () {
        var d = new Date();
        var year = d.getFullYear();
        var date = d.getDate();
        var month = d.getMonth();
        var day = d.getDay();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var wordDay = "";
        var wordMonth = "";

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function convertNumToWord() {
            wordDay = days[day];
            wordMonth = months[month];
        }

        convertNumToWord();

        document.getElementById("target").innerHTML = wordDay + " " + date + " " + wordMonth + " " + year + ", " + hour + "h" + minute;
        setTimeout(updateTime, 600);

    }
    updateTime();

})();
