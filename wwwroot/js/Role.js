$(document).ready(function () {

    LoadRoles();
    return false;

});

function AddRole() {

    var role = {
        name: $('#nameRole').val(),
    };

    if (role != null) {

        $.ajax({
            url: "/Role/Insert",
            data: JSON.stringify(role), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#result-r').text("Added successfully");
                $('#result-r').css('color', 'green');
                $('#nameRole').val('');
                LoadRoles();

            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-r').text("Error en la conexión.");
                }
                $('#nameRole').val('');
              
            }
        });

    }


}

function LoadRoles() {

    $.ajax({
        url: "/Role/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';
            $.each(result, function (key, item) {

                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.name + '</td>';
                /*html += '<td><a href="#role" data-target="#modalRole" data-toggle="modal" onclick="GetRoleById(\'' + item.id + '\')">Edit</a> | <a href="#role" onclick="DeleteRole(' + item.id + ')">Delete</a></td>';*/
                html += '<td><a href="#role" class="button" data-target="#modalUpdateRole" data-toggle="modal" onclick="GetRoleById(\'' + item.id + '\')"><img src="/images/editar.png"></a> | <a role="button" class="button" onclick="DeleteRole(' + item.id + ')"><img src="/images/borrar.png"></a></td>';
                html += '</tr>';
            });

            $('#role-tbody').html(html);
            $('#role-table').DataTable();
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });

}

function DeleteRole(id) {
    var alert = confirm("Are you sure you want to delete this record?");
    
    /*var btnModal = $('#btn-delete-role');
    $('#modalDELETERole').show();
    btnModal.click(function (event) {
        if (event.target == modal) {

        }
    })*/
    if (alert) {
        $.ajax({

            data: JSON.stringify(id), //convierte la variable en tipo json
            url: "/Role/Delete/" + id,
            type: "DELETE",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                LoadRoles();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-r').text("Error en la conexión.");
                }
            }
        });

    }
}

function GetRoleById(idRole) {

    var id = 0;
    $.ajax({
        url: "/Role/GetById",
        type: "GET",
        data: { id: idRole },
        success: function (result) {

            $('#id-r-u').val(result.id);
            $('#nameRole-u').val(result.name);
        },
        error: function (errorMessage) {
            if (errorMessage === "no connection") {
                $('#result-r-u').text("Error en la conexión.");
            }
            $('#result-r-u').text("Error");
            $('#result-r-u').css('color', 'red');
        }
    });
}

function UpdateRole() {

    var role = {
        id: $('#id-r-u').val(),
        name: $('#nameRole-u').val(),
    };

    if (role != null) {

        $.ajax({
            url: "/Role/Update",
            data: JSON.stringify(role), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#result-p-u').text("Edited successfully");
                $('#result-p-u').css('color', 'green');
                $('#nameRole-u').val('');
                LoadRoles();

            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-p-u').text("Error en la conexión.");
                }
                $('#namerole-u').val('');
            }
        });

    }


}