<<<<<<< HEAD

﻿$(document).ready(function () {
     


    

             Add();
         
         return false;
     });
     
function Add() {
=======
>>>>>>> parent of 1627a7d (Fixed some bugs within the controller)

﻿$(document).ready(function () {
     


    

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
<<<<<<< HEAD
            url: "/Customer/Insert",
            data: JSON.stringify(customer), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                // alert("resultado: "+result);
                $('#nameClient').val('');
                $('#lastNameClient').val('');
                $('#email').val('');
                $('#passwordClient').val('');
                $('#phoneClient').val('');
=======
            url: '/Users/GetUsers',
            async: false,
            type: 'POST',
            data: record,
            beforeSend: function (xhr, opts) {
>>>>>>> parent of 1627a7d (Fixed some bugs within the controller)
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
<<<<<<< HEAD
                $('#nameClient').val('');
                $('#lastNameClient').val('');
                $('#email').val('');
                $('#passwordClient').val('');
                $('#phoneClient').val('');
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
=======
>>>>>>> parent of 1627a7d (Fixed some bugs within the controller)
            },
            error: function (data) {
                Swal.fire(
                    'Error',
                    data.message,
                    'error'
                );
            }
        });
<<<<<<< HEAD
    }
=======
    }

>>>>>>> parent of 1627a7d (Fixed some bugs within the controller)
