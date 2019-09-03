/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var list;
    // your code here
    document.getElementById('run').addEventListener("click", function(){


        async function getPost () {
            const result = await window.lib.getPosts();
            console.log(result);
        }
        getPost();


/*  window.lib.getPosts(async function(error, articles){
            try {
                const result = await articles;
                console.log(result);
            } catch (error) {
                console.log(error);
            }



        });  */





    });
})();
