/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var container = document.getElementById("target");
    container.innerText = "";

    var button1 = document.getElementById("fix-part-one");
    var button2 = document.getElementById("fix-part-two");
    var button3 = document.getElementById("fix-part-three");
    var button4 = document.getElementById("fix-part-four");

    const firstPartMin = document.getElementById("part-one").getAttribute("data-min");
    const firstPartMax = document.getElementById("part-one").getAttribute("data-max");
    const secondPartMin = document.getElementById("part-two").getAttribute("data-min");
    const secondPartMax = document.getElementById("part-two").getAttribute("data-max");
    //data attri were all the same so only used one

    var firstPart = firstPartMin;
    var secondPart = secondPartMin;
    var thirdPart = secondPartMin;
    var fourthPart = secondPartMin;

    var wrap0 = document.createElement("span");
    container.appendChild(wrap0);
    wrap0.innerText = "+32";
    var wrap1 = document.createElement("span");
    container.appendChild(wrap1);
    wrap1.innerText = firstPart;
    var wrap2 = document.createElement("span");
    container.appendChild(wrap2);
    wrap2.innerText = secondPart;
    var wrap3 = document.createElement("span");
    container.appendChild(wrap3);
    wrap3.innerText = thirdPart;
    var wrap4 = document.createElement("span");
    wrap4.innerText = fourthPart;
    container.appendChild(wrap4);

    container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;

    function casinoNumber(max, min) {
        return Math.floor(Math.random() * (max - min));
    }

    button1.addEventListener("click", function() {
        firstPart = casinoNumber(firstPartMax, firstPartMin);
        wrap1.innerText = firstPart + 460;
        container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;

    });

    button2.addEventListener("click", function() {
        secondPart = casinoNumber(secondPartMax, secondPartMin);
        wrap2.innerText = secondPart;
        if (secondPart < 10) {
                wrap2.innerText = "0" + secondPart;
            }
        container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;

    });

    button3.addEventListener("click", function() {
        thirdPart = casinoNumber(secondPartMax, secondPartMin);
        wrap3.innerText = secondPart;
        if (thirdPart < 10) {
            wrap3.innerText = "0" + thirdPart;
        }
        container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;

    });

    button4.addEventListener("click", function() {
        fourthPart = casinoNumber(secondPartMax, secondPartMin);
        wrap4.innerText = fourthPart;
        if (fourthPart < 10) {
            wrap4.innerText = "0" + fourthPart;
        }
        container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;

    });

})();
