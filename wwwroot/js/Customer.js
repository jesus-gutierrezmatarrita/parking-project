

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
function GetCustomerByEmail(emailCustomer) {

    var email = "";
    $.ajax({
        url: "/Customer/GetByEmail",
        type: "GET",
        data: { email: emailCustomer },
        success: function (result) {

            $('#idClient').val(result.id);// se ocupa para actualizar
            $('#nameClient').val(result.name);
            $('#lastNameClient').val(result.lastname);
            $('#emailClient').val(result.email);
            $('#phoneClient').val(result.phone);
        },
        error: function (errorMessage) {
            if (errorMessage === "no connection") {
                
            }
            $('#passwordClient').val('');
        }
    });
}
function Delete(id) {
    var alert = confirm("Are you sure you want to delete this record?");
    if (alert) {
        $.ajax({
            data: JSON.stringify(id), //converte la variable estudiante en tipo json
            url: "/Customer/Delete/" + id,
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                LoadCustomers()
                alert("The student has been successfully eliminated");
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#resultU').text("Error en la conexión.");
                }
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
                html += '<td><a href="#client" data-target="#modalUpdate" data-toggle="modal" onclick="GetCustomerByEmail(\'' + item.email + '\')">Edit</a> | <a href="#client" onclick="Delete(' + item.id + ')">Delete</a></td>';
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
function Update() {

    var customer = {

        id: $('#idClient').val(),
        name: $('#nameClient').val(''),
        lastname: $('#lastNameClient').val(''),
        email: $('#emailClient').val(''),
        password: $('#passwordClient').val(''),
        phone: $('#phoneClient').val('')

    };

    if (customer != null) {

        $.ajax({
            url: "/Customer/Update",
            data: JSON.stringify(customer), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#nameClient').val('');
                $('#lastNameClient').val('');
                $('#emailClient').val('');
                $('#passwordClient').val('');
                $('#phoneClient').val('');
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#resultU').text("Error en la conexión.");
                }
             
                $('#passwordClient').val('');
            }
        });

    }
}



