/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code herenames
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

                list.heroes.forEach(function (element, i) {
                    target.append(template.content.cloneNode(true));
                    document.querySelectorAll(".name")[i].innerHTML = element.name;
                    document.querySelectorAll(".alter-ego")[i].innerHTML = element.alterEgo;
                    document.querySelectorAll(".powers")[i].innerHTML = element.abilities;

                });


            });

    });
})();

/* <template id="tpl-hero">
    <li class="hero">
    <h4 class="title">
    <strong class="name"></strong>
    <em class="alter-ego"></em>
    </h4>
    <p class="powers"></p>
    </li>
    </template>  */