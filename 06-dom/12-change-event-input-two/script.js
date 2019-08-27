/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var input;

    // your code here
    document.getElementById("pass-one").addEventListener('input', function () {
        input = document.getElementById("pass-one").value;
        var exp = new RegExp(/(\D*\d){2}/);
        var result = exp.test(input);
        console.log(result);
        //result.test;
        if (input.length > 8) {
            if (result > 2) {
                document.getElementById("validity").innerHTML = "Ok";
            }
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }


    });
})();
