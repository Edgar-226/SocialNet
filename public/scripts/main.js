$(function () {
    $("#studiesAdd").click(function () {
        console.log('hola')
        $('#popup-studies').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    $("#languagesAdd").click(function () {
        console.log('hola')
        $('#popup-languages').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });

    $('#close-study').on('click', function () {
        console.log('adios')
        $('#popup-studies').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    $('#close-language').on('click', function () {
        console.log('adios')
        $('#popup-languages').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });


})
