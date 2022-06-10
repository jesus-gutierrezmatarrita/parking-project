$(document).ready(function () {

    GetCategories()
    //LoadParkings();
    return false;

});

function AddVehicle() {

    var vehicle = {
        licensePlate: $('#licensePlate').val(),
        carBrand: $('#trademark').val(),
        carModel: $('#model').val(),
        color: $('#color').val(),
        categoryId: parseInt($('vehicle-type').val())

    };

    console.log(vehicle)

    var category = {

        id: parseInt($('vehicle-type').val()),
        name: $('vehicle-type').find('option:selected').text()

    };

    vehicle.vehicleCategory = category;

    if (vehicle != null) {

        $.ajax({
            url: "/Vehicle/Insert",
            data: JSON.stringify(vehicle), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                
                //$('#result').text("Added successfully");
                //$('#result').css('color', 'green');
                $('#licensePlate').val('');
                $('#trademark').val('');
                $('#model').val('');
                $('#color').val('');
                $('#vehicle-type').val($("#vehicle-type option:first").val());
                //LoadStudents();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result').text("Error en la conexión.");
                }
                $('#result').text("User not added");
                $('#result').css('color', 'red');
                $('#password').val('');
            }
        });

    }


}

function GetCategories() {

    $.ajax({
        url: "/VehicleCategory/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //llenar el dropdowns (select)
            var html = '';
            $.each(result, function (key, item) {
                html += '<option value="' + item.id + '">' + item.name + '</option>';
            });
            $('#vehicle-type').append(html);

        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });
}

function GetStudentById(id_student) {

    var id = 0;
    $.ajax({
        url: "/Students/GetById",
        type: "GET",
        data: { id: id_student },
        success: function (result) {

            $('#id-u').val(result.id);
            $('#name-u').val(result.name);
            $('#email-u').val(result.email);
            //$('#password').val(result.password);
            $('#major-u').val(result.major.id);
        },
        error: function (errorMessage) {
            if (errorMessage === "no connection") {
                $('#result-u').text("Error en la conexión.");
            }
            $('#result-u').text("User not added");
            $('#result-u').css('color', 'red');
            $('#password-u').val('');
        }
    });
}

function LoadStudents() {

    $.ajax({
        url: "/Students/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            var html = '';
            $.each(result, function (key, item) {

                html += '<tr>';
                html += '<td>' + item.id + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '<td>' + item.major.name + '</td>';
                html += '<td><a href="#update-students" onclick="GetStudentById(\'' + item.id + '\')">Edit</a> | <a href="#students" onclick="Delete(' + item.id + ')">Delete</a></td>';
                html += '</tr>';
            });

            $('#students-tbody').html(html);
            $('#students-table').DataTable();
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });



}

function Update() {

    var student = {
        id: $('#id-u').val(),
        name: $('#name-u').val(),
        email: $('#email-u').val(),
        password: $('#password-u').val(),
        majorId: parseInt($('#major-u').val())

    };

    var major = {

        id: parseInt($('#major-u').val()),
        name: $('#major-u').find('option:selected').text()

    };

    student.major = major;

    if (student != null) {

        $.ajax({
            url: "/Students/Put",
            data: JSON.stringify(student), //converte la variable estudiante en tipo json
            type: "PUT",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#result-u').text("Updated successfully");
                $('#result-u').css('color', 'green');
                $('#name-u').val('');
                $('#email-u').val('');
                $('#password-u').val('');
                $('#major-u').val($("#major-u option:first").val());
                LoadStudents();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-u').text("Error en la conexión.");
                }
                $('#result-u').text("User not added");
                $('#result-u').css('color', 'red');
                $('#password-u').val('');
            }
        });

    }
}

function Delete(id) {
    var alert = confirm("Are you sure you want to delete this record?");
    if (alert) {
        $.ajax({

            data: JSON.stringify(id), //convierte la variable en tipo json
            url: "/Students/Delete/" + id,
            type: "DELETE",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                LoadStudents();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-u').text("Error en la conexión.");
                }
            }
        });

    }
}