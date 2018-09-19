'use strict';

function domSearch(selector,isCaseSensitive) {
    
    let container = $(selector);
    let fragment = document.createDocumentFragment();

    if(isCaseSensitive = false){

    }

    let addDiv = $('<div>');
    let searchDiv = $('<div>');
    let resultDiv = $('<div>');
    let label = $('<label>');
    let labelSearch = $('<label>');
    let input = $('<input>');
    let inputSearch = $('<input>');
    let anchor = $('<a>Add</a>');
    let listResult = $('<ul class="items-list">');

    //let items = ['Element 1','Element 2','Another element','Item 1','Item 2','List Item'];

    
    addDiv.addClass('add-controls');
    searchDiv.addClass('search-controls');
    resultDiv.addClass('result-controls');

    //append to addDiv
    anchor.css('display','inline-block');
    label.text('Enter text:');
    label.appendTo(addDiv);
    input.appendTo(label);
    anchor.addClass('button');
    anchor.on('click',function () {
        let text = input.val().trim();
         if(text === '' || text.length === 0){
            return;
         }
         listResult.append($('<li>')
            .addClass('list-item')
            .append($('<a>') // Delete Button
                  .addClass('button')
                  .text('X')
                  .on('click', function () {
            $(this).parent().remove()
        }))
    .append($('<strong>') // Item Text
        .text(text)));
    })
    anchor.appendTo(addDiv);

    //append to searchDiv
    labelSearch.text('Search:');
    labelSearch.appendTo(searchDiv);
    inputSearch.appendTo(searchDiv);

    
    
    //append to lisResult
    


    //append to resultDiv
    listResult.appendTo(resultDiv);


    addDiv.appendTo(fragment);
    searchDiv.appendTo(fragment);
    resultDiv.appendTo(fragment);
    

    container.append(fragment)


}