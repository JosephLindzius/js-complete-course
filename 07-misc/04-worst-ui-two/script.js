/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var button1 = document.getElementById("part-one");
    var button2 = document.getElementById("part-two");
    var button3 = document.getElementById("part-three");
    var button4 = document.getElementById("part-four");

    var container = document.getElementById("target");
    container.innerText = "";

    const firstPartMin = document.getElementById("part-one").getAttribute("data-min");
    const firstPartMax = document.getElementById("part-one").getAttribute("data-max");
    const secondPartMin = document.getElementById("part-two").getAttribute("data-min");
    const secondPartMax = document.getElementById("part-two").getAttribute("data-max");

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

    function displayUpdatedNumber () {
        container.innerText = wrap0.innerText + wrap1.innerText + wrap2.innerText + wrap3.innerText + wrap4.innerText;
    }


    button1.addEventListener("click", function() {
        if (firstPart < firstPartMax) {
            if (firstPart < 10) {
            firstPart++;
            wrap1.innerText = "0" + firstPart;
            } else {
                firstPart++;
                wrap1.innerText = firstPart;
            }
        } else {
            firstPart = firstPartMax;
        }
        displayUpdatedNumber();
        button1.innerText = wrap1.innerText
    });
    button2.addEventListener("click", function() {
        if (secondPart < secondPartMax) {
            if (secondPart < 10) {
                secondPart++;
                wrap2.innerText = "0" + secondPart;
            } else {
                secondPart++;
                wrap2.innerText = secondPart;
            }
        } else {
            secondPart = secondPartMax;
        }
        displayUpdatedNumber();
        button2.innerText = wrap2.innerText
    });

    button3.addEventListener("click", function() {
        if (thirdPart < secondPartMax) {
            if (thirdPart < 10) {
                thirdPart++;
                wrap3.innerText = "0" + thirdPart;
            } else {
                thirdPart++;
                wrap3.innerText = thirdPart;
            }
        } else {
            thirdPart = secondPartMax;
        }
        displayUpdatedNumber();
        button3.innerText = wrap3.innerText
    });
    button4.addEventListener("click", function() {
        if (fourthPart < secondPartMax) {
            if (fourthPart < 10) {
                fourthPart++;
                wrap4.innerText = "0" + fourthPart;
            } else {
                fourthPart++;
                wrap4.innerText = fourthPart;
            }
        } else {
            fourthPart = secondPartMax;
        }
        displayUpdatedNumber();
        button4.innerText = wrap4.innerText
    });

})();
