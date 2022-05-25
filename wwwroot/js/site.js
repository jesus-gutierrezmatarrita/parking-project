<<<<<<< HEAD
﻿$(document).ready(function () {
    $('#username').focus();

    $('#signinBtn').on('click', function () {
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
=======
﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
>>>>>>> bfd3be86c6e2bcaa83fa27d7704316fc62e35e8a
