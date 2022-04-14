$(function() {

    $('#enviarcorreo').click(function() {
        alert("El correo fue enviado correctamente...");
    });


    $('h3').on('dblclick', '.cambio-color', function() {
        $(this).css("color", "red");
    })

    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })


});