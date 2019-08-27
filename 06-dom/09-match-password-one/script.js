/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function validateForm() {
        let input1 = document.getElementById("pass-one").value;
        let input2 = document.getElementById("pass-two").value;
        if (input1 === input2) {
            alert("Password matches");
        } else {
            alert("Passwords do not match");
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-one").style.borderColor = "red";

        }
    }

    document.getElementById("run").addEventListener("click", function() {
        validateForm();
    })

})();
