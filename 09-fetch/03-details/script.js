/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var x = false;
(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () {

        var list = [];

        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                list = json;


                var target = document.getElementById("target");
                var template = document.getElementById("tpl-hero");
                var i = document.getElementById("hero-id").value;
                var id = i - 1;
                console.log(list.heroes[id].name);

                function deleteChild() {
                        var e = document.querySelectorAll("#target")[0];
                        e.innerHTML = "";

                }

                function showHero (ident) {
                    if (x === true ) {
                        deleteChild();
                    }
                        target.append(template.content.cloneNode(true));
                        document.querySelectorAll(".name")[0].innerHTML = list.heroes[ident].name;
                        document.querySelectorAll(".alter-ego")[0].innerHTML = list.heroes[ident].alterEgo;
                        document.querySelectorAll(".powers")[0].innerHTML = list.heroes[ident].abilities;
                        x = true;
                }

                showHero(id);

            });

    });
})();
