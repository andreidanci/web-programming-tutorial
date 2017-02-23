console.info("shopping-lsit init");

function getRow(produs, cantitate) {

    return '<tr>' +
        '<td>' + produs + '</td>' +
        '<td>' + cantitate + '</td>' +
        '</tr>';


}

// document.getElementsByTagName('tbody')[0].innerHTML = getRow("Paine", 1) + getRow("Suc", 3);

var shoppingList = [
    {nume: 'Paine', cantitate: 1},
    {nume: 'Suc', cantitate: 3}
];
var lista = ' ';
for (var i = 0; i < shoppingList.length; i++) {
    var produs = shoppingList[i];
    lista += getRow(produs.nume, produs.cantitate);

}

document.getElementsByTagName('tbody')[0].innerHTML = lista;

