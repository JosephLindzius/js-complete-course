/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    do {
        var age = prompt('Please enter your age.');
        var gender = prompt('Please enter your gender.');
        var town = prompt('Please enter your current city or town of residence.');
    }
    while (false === confirm("Age: "+ age + "\nGender: "+ gender + "\nCity/Town: " + town))



})();
