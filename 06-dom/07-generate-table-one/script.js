/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
        for (let i = 0; i < 10; i++) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.appendChild(document.createTextNode("Create ME"));
            tr.appendChild(td);

            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        target.appendChild(tbl);





})();
