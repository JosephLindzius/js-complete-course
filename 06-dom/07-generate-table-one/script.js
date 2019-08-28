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
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');
        for (let i = 0; i < 10; i++) {
            var cell = document.createElement('td');
            var row = document.createElement('tr');
            cell.appendChild(document.createTextNode("Create ME"));
            row.appendChild(cell);
            tableBody.appendChild(row);
        }
        table.appendChild(tableBody);
        target.appendChild(table);





})();
