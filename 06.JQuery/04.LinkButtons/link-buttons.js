function attachEvents() {

    $('a.button').on('click',changeCSS);

    function changeCSS() {
        $('a.button').removeClass('selected');
        $(this).addClass('selected');
    }
}
