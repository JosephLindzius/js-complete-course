/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let list, comment, final;
    document.getElementById('run').addEventListener("click", function(){
        async function getPost () {
            const result = await window.lib.getPosts();
            list = result;
            console.log(result);

            async function getComment () {
                const result = await window.lib.getComments();
                comment = result;
                //console.log(result);
            }

            await getComment();
            async function putTogether () {
                const result = await list.forEach(function(article){
                    final = comment[article.id];
                    if (final !== undefined) {
                        article.comment = final;
                        //console.log(result);
                    }
                })
            }
            await putTogether();
        }
        getPost();
    });
})();
