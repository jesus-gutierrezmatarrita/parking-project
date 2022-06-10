

﻿$(document).ready(function () {
     


    
     LoadCustomers();
         
         return false;
     });


function AddCustomer() {
    +


         var customer = {
             name: $('#nameUSer').val(),
             lastName: $('#lastNameUser').val(),
             password: $('#passwordUser').val(),
             email: $('#emailUser').val(),
             phone: parseInt($('#phoneUser').val()),
         };

      

         if (customer != null) {

             $.ajax({
                 url: "/Customer/Insert",
                 data: JSON.stringify(customer), //converte la variable estudiante en tipo json
                 type: "POST",
                 contentType: "application/json;charset=utf-8",
                 dataType: "json",
                 success: function (result) {
                     $('#nameUSer').val('');
                     $('#lastNameUser').val('');
                     $('#emailUser').val('');
                     $('#passwordUser').val('');
                     $('#phoneUser').val('');
                     
                 },
                 error: function (errorMessage) {
                     if (errorMessage === "no connection") {
                         $('#result-c').text("Error en la conexión.");
                     }
                     
                     $('#passwordUser').val('');
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

            $('#idClientU').val(result.id);// se ocupa para actualizar
            $('#nameClientU').val(result.name);
            $('#lastNameClientU').val(result.lastname);
            $('#emailClientU').val(result.email);
            $('#phoneClientU').val(result.phone);
        },
        error: function (errorMessage) {
            if (errorMessage === "no connection") {
                
            }
            $('#passwordClient').val('');
        }
    });
}
function DeleteCustomer(id) {
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
                /*html += '<td><a href="#client" data-target="#modalUpdate" data-toggle="modal" onclick="GetCustomerByEmail(\'' + item.email + '\')">Edit</a> | <a href="#client" onclick="DeleteCustomer(' + item.id + ')">Delete</a></td>';*/
                html += '<td><a href="#client" role="button" class="button" data-target="#modalUpdate" data-toggle="modal"><img src="/images/editar.png" onclick="GetCustomerByEmail(\'' + item.email + '\')"></a> | <a role="button" class="button" data-target="#modalDELETECustomer" data-toggle="modal"><img src="/images/borrar.png"></a></td>';
                html += '</tr>';
            });

            $('#client-tbody').html(html);
            $('#client-table').DataTable();
           
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });

}
function UpdateCustomer() {

    var customer = {

        id: $('#idClientU').val(),
        name: $('#nameClientU').val(),
        lastname: $('#lastNameClientU').val(),
        email: $('#emailClientU').val(),
        password: $('#passwordClientU').val(),
        phone: $('#phoneClientU').val()

    };

    if (customer != null) {

        $.ajax({
            url: "/Customer/Update",
            data: JSON.stringify(customer), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",

            success: function (result) {
                $('#nameClientU').val('');
                $('#lastNameClientU').val('');
                $('#emailClientU').val('');
                $('#passwordClientU').val('');
                $('#phoneClientU').val('');
                LoadCustomers()
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                   
                }
             
                $('#passwordClientU').val('');
            }
        });

    }
}



