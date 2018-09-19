'use strict';
function addItem() {

    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let element = document.createElement('option');
    element.textContent = text.value + '' + value.value;

    let menu = document.getElementById('menu');
    menu.appendChild(element);

    text.value = '';
    value.value = '';
}
