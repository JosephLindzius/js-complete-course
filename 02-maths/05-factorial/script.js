/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        function factorF(){

            var factorial = 1;
            var startNumber = Number(document.getElementById("number").value);
            for (let i = 1; i <= startNumber; i++) {
                factorial*=i;
            }
            alert(factorial);
        }

        factorF();






     /*   var fact = document.getElementById("number").value;
        parseFloat(fact);
        // your code here
        function factorial(number) {
            var end = number;
            if (number === 0 || number === 1)
                return 1;
            while (number > 1) {
                number--;
                end *= number;
            }
            return end;
        }
         alert(factorial(fact));
*/

       /* var number = document.getElementById("number").value;
        function factorial(x) {
            return x * factorial(x - 1);
        }

        alert("Starting factorial processing of: " + number);
        alert(factorial);

        if (number === "0") {
            alert("1");
        } else {
            alert(factorial(+number));
            }  */



    });

})();
