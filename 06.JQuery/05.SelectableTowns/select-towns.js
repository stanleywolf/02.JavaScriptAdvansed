function attachEvents() {

    let towns = $('ul#items li');
    towns.on('click',selectTown);

    function selectTown() {
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background','');

        }else{
            $(this).attr('data-selected',true);
            $(this).css('background','#DDD');
        }
    }
    $('#showTownsButton').on('click',resultPrint);


    function resultPrint() {
        let values = $('ul#items li[data-selected = true]')
            .toArray()
            .map(li => $(li).text())
            .join(', ');
        $('#selectedTowns').text("Selected towns: " + values);
    }
}
