/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var span = document.getElementById("source");
    var source = document.getElementById("source").getAttribute("data-image");
    var image = document.createElement("img");
    var imageParent = document.getElementById("target");
    alert(source);
    image.src = source;
    imageParent.appendChild(image);

    span.remove();
    /*
    function removeDummy() {
        var source = document.getElementById('source');
        source.parentNode.removeChild(source);
        return false;
    }
    removeDummy();*/
})();
