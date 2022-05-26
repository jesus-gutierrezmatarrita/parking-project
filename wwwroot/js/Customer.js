<<<<<<< HEAD
﻿$(document).ready(function () {
     


     $(document).on('submit', '#formSignUp', function () {

       

             Add();
         
         return false;
     });
     

    
    });



     function Add() {

         var customer = {
             name: $('#nameClient').val(),
             lastName: $('#lastNameClient').val(),
             password: $('#passwordClient').val(),
             email: $('#emailClient').val(),
             phone: parseInt($('#phoneClient').val()),
         };

       


         if (customer != null) {

             $.ajax({
                 url: "/Customers/Post",
                 data: JSON.stringify(customer), //converte la variable estudiante en tipo json
                 type: "POST",
                 contentType: "application/json;charset=utf-8",
                 dataType: "json",
                 success: function (result) {
                     $('#nameClient').val('');
                     $('#lastNameClient').val('');
                     $('#email').val('');
                     $('#passwordClient').val('');
                     $('#phoneClient').val('');
                     
                 },
                 error: function (errorMessage) {
                     if (errorMessage === "no connection") {
                         $('#result').text("Error en la conexión.");
                     }
                     
                     $('#passwordClient').val('');
                 }
             });

         }


     }

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
