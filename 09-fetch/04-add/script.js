/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // your code here
    function appendNewHero (_json, _heroName, _heroAlterEgo, _heroPowers) {
        _json.heroes.appendData({
            id: _json.heroes.length + 1,
            name: _heroName,
            alterEgo: _heroAlterEgo,
            abilities: _heroPowers
        })


    }

    document.getElementById("run").addEventListener("click", function () {
        var heroName = document.getElementById("hero-name").value;
        var alterEgo = document.getElementById("hero-alter-ego").value;
        var powers = document.getElementById("hero-powers").value; //must be form of a table later

        console.log(heroName);
        console.log(alterEgo);
        console.log(powers);

        var list = [];

        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                list = json;
                console.log(json);
                var Object = {
                    id: list.heroes.length + 1,
                    name: heroName,
                    alterEgo: alterEgo,
                    abilities: Array.from(powers.split(","))
                };
                list.heroes.push(Object);
                console.log(list.heroes);

            });
    })

})();
