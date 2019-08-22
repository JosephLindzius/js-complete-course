/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let age = 0;

    function getBirthday () {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let today = new Date();
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth();
        let currentDay = today.getDate();

        if (currentMonth >= month) {
            if (currentDay >= day) {
                age = currentYear - year;
            } else {
                age = currentYear - year - 1;
            }
        } else {
            age = currentYear - year - 1;
        }
        alert("Your age is: "+ age);
    }
    document.getElementById("run").addEventListener("click",function () {
        getBirthday();
    } );


    /* function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    console.log(calculate_age(new Date(1982, 11, 4)));

    console.log(calculate_age(new Date(1962, 1, 1))); */

})();
