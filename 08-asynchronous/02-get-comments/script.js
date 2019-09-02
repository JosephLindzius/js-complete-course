/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function(){

       /* window.lib.getPosts(function(error, randomNumber) {
            console.log(randomNumber);
        });  */

        window.lib.getComments(null, function(_, response) {
            console.log(response);
            return response


                  //.then(function(error, tblContents) {

                 //   console.log(tblContents);
              //  })
        });

    });
})();
