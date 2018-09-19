function search() {
    let searchText = $('#searchText').val();
    let machedElement =
        $(`#towns li:contains('${searchText}')`);

        $('#towns li').css('font-weight','');

        machedElement.css('font-weight','bold');

        $('#result').text(machedElement.length + ' maches found');
}