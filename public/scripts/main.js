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
    $("#hobbiesAdd").click(function () {
        console.log('hola')
        $('#popup-hobbies').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    $("#addPicture").click(function () {
        console.log('hola')
        $('#popup-picture').fadeIn('slow');
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
    $('#close-hobby').on('click', function () {
        console.log('adios')
        $('#popup-hobbies').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    $('#close-picture').on('click', function () {
        console.log('adios')
        $('#popup-picture').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });


})
