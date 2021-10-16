$(function () {
    $("#studiesAdd").click(function () {
        console.log('hola')
        $('#popup-studies').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close').on('click', function () {
        $('#popup-studies').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });


})
