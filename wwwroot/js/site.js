$(document).ready(function () {
    $('').focus();

    $('').on('click', function () {
        if ($('#username').val() != "" & $('#passwrd').val() != "" {
            Validate($('#username').val(), $('#passwrd').val());
        } else {
            Swal.fire(
                'Error',
                'Por favor ingrese usuario y contraseña',
                'error'
            );
        }
    });

    function Validate(user, pass) {
        var record = {
            userName: user,
            password: pass
        };

        $.ajax({
            url: '/Users/GetUsers',
            async: false,
            type: 'POST',
            data: record,
            beforeSend: function (xhr, opts) {
            },
            complete: function () {
            },
            success: function (data) {
                if (data.status == true) {
                    window.location.href = "/Home/Index";
                } else if (data.status == false) {
                    Swal.fire(
                        'Error',
                        data.message,
                        'error'
                    );
                }
            },
            error: function (data) {
                Swal.fire(
                    'Error',
                    data.message,
                    'error'
                );
            }
        });
    }
});