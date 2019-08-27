/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var target = document.getElementById('target');
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '5');
    var tbdy = document.createElement('tbody');
    for (let i = 1; i < 11; i++) {
        var tr = document.createElement('tr');
        for (let j = 1; j < 11; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(i + " * " + j + " = " + i*j));
            tr.appendChild(td);
            tbdy.appendChild(tr);
        }
    }
    tbl.appendChild(tbdy);
    target.appendChild(tbl);
})();
