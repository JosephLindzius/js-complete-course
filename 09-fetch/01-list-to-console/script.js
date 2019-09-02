/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

        document.getElementById("run").addEventListener("click", function() {
            var list = [];
            fetch("http://localhost:63342/js-complete-course/_shared/api.json")
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    list = data;
                    console.log(list);

                })

        })


})();
