

﻿$(document).ready(function () {
     


    
     LoadCustomers();
         
         return false;
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

function LoadCustomers() {

    $.ajax({
        url: "/Customer/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';
            $.each(result, function (key, item) {

                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.lastname + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '<td>' + item.phone + '</td>';
                html += '</tr>';
            });

            $('#client-tbody').html(html);
            $(document).ready(function () {
                $('#client-table');
            });
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });

}

