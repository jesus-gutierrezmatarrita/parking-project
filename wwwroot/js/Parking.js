$(document).ready(function () {

    LoadParkings();
    return false;
});

function AddParking() {

    var parking = {
        name: $('#nameParking').val(),
        location: $('#location').val(),
        capacity: $('#capacity').val(),
    };




    if (parking != null) {

        $.ajax({
            url: "/Parking/Insert",
            data: JSON.stringify(parking), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#result-p').text("Added successfully");
                $('#result-p').css('color', 'green');
                $('#nameParking').val('');
                $('#location').val('');
                $('#capacity').val('');

            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result').text("Error en la conexión.");
                }
                $('#nameParking').val('');
                $('#location').val('');
                $('#capacity').val('');
            }
        });

    }


}

function LoadParkings() {

    $.ajax({
        url: "/Parking/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';
            $.each(result, function (key, item) {

                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.location + '</td>';
                html += '<td>' + item.capacity + '</td>';
                html += '</tr>';
            });

            $('#parking-tbody').html(html);
            $(document).ready(function () {
                $('parking-table');
            });
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });

}