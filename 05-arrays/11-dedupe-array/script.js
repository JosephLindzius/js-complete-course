/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    let x = (fruits) => fruits.filter((v,i) => fruits.indexOf(v) === i);
    var y = new Set (fruits);


    var array = [1, 1, 2, 3, 5, 6, 8];
    var noDupes = Array.from(new Set (array));


    document.getElementById("run").addEventListener("click", function (){
        console.log(x(fruits));
        console.log(array);
        console.log(noDupes);
    })
})();
