$(document).ready(function () {

    LoadParkings();
    LoadParkingSlots();
    LoadParkingsToDropdown();
    LoadVehiclesTypeDropDown();
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
                LoadParkings();

            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-p').text("Error en la conexión.");
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
                /*html += '<td><a href="#parking" data-target="#modalEditParking" data-toggle="modal" onclick="GetParkingById(\'' + item.id + '\')">Edit</a> | <a href="#parking" onclick="DeleteParking(' + item.id + ')">Delete</a></td>';*/
                html += '<td><a href="#parking" role="button" class="button" data-target="#modalEditParking" data-toggle="modal" onclick="GetParkingById(\'' + item.id + '\')"><img src="/images/editar.png"></a> | <a role="button" class="button" data-target="#modalDELETEParking" data-toggle="modal"><img src="/images/borrar.png"></a></td>';
                html += '</tr>';
            });

            $('#parking-tbody').html(html);
            $('#parking-table').DataTable();
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });

}

function DeleteParking(id) {
    var alert = confirm("Are you sure you want to delete this record?");
    if (alert) {
        $.ajax({

            data: JSON.stringify(id), //convierte la variable en tipo json
            url: "/Parking/Delete/" + id,
            type: "DELETE",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                LoadParkings();
            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-p').text("Error en la conexión.");
                }
            }
        });
    }
}

function GetParkingById(idParking) {

    var id = 0;
    $.ajax({
        url: "/Parking/GetById",
        type: "GET",
        data: { id: idParking },
        success: function (result) {

            $('#id-p-u').val(result.id);
            $('#nameParking-u').val(result.name);
            $('#location-u').val(result.location);
            $('#capacity-u').val(result.capacity);
        },
        error: function (errorMessage) {
            if (errorMessage === "no connection") {
                $('#result-p-u').text("Error en la conexión.");
            }
            $('#result-p-u').text("Error");
            $('#result-p-u').css('color', 'red');
        }
    });
}

function UpdateParking() {

    var parking = {
        id: $('#id-p-u').val(),
        name: $('#nameParking-u').val(),
        location: $('#location-u').val(),
        capacity: $('#capacity-u').val(),
    };

    if (parking != null) {

        $.ajax({
            url: "/Parking/Update",
            data: JSON.stringify(parking), //converte la variable estudiante en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                $('#result-p-u').text("Edited successfully");
                $('#result-p-u').css('color', 'green');
                $('#nameParking-u').val('');
                $('#location-u').val('');
                $('#capacity-u').val('');
                LoadParkings();

            },
            error: function (errorMessage) {
                if (errorMessage === "no connection") {
                    $('#result-p-u').text("Error en la conexión.");
                }
                $('#nameParking-u').val('');
                $('#location-u').val('');
                $('#capacity-u').val('');
            }
        });

    }


}

function LoadVehiclesTypeDropdown() {

}

function LoadParkingsToDropdown() {
    $.ajax({
        type: "GET",
        url: "Parking/Get",
        data: "{}",
        success: function (data) {
            let dropdownHTML = '<option value="-1">Please choose a parking</option>';
            for (let i = 0; i < data.length; i++) {
                dropdownHTML += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
            }
            $('#parkingDropdown').html(dropdownHTML);
        }
    });
}

function LoadParkingSlots() {

    $.ajax({
        url: "Parking/GetParkingSlots",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';
            $.each(result, function (key, item) {

                html += '<tr>';
                html += '<td>' + item.slotId + '</td>';
                html += '<td>' + item.state + '</td>';
                html += '<td>' + item.type + '</td>';
                html += '<td>' + item.price + '</td>';
                html += '<td>' + item.parking.name + '</td>';
                /*html += '<td><a href="#parking" data-target="#modalEditParking" data-toggle="modal" onclick="GetParkingById(\'' + item.id + '\')">Edit</a> | <a href="#parking" onclick="DeleteParking(' + item.id + ')">Delete</a></td>';*/
                html += '<td><a href="#parking" role="button" class="button" data-target="#modalEditParkingSlot" data-toggle="modal" onclick="GetParkingSlotById(\'' + item.id + '\')"><img src="/images/editar.png"></a> | <a role="button" class="button" data-target="#modalDELETEParkingSlot" data-toggle="modal"><img src="/images/borrar.png"></a></td>';
                html += '</tr>';
            });

            $('#parkingSlots-tbody').html(html);
            $('#parkingSlots-table').DataTable();
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });

}

function AddParkingSlot() {

    var parkingSlot = {
        type: $('#slotType').val(),
        price: $('#slotPrice').val(),
        parking: $('#parking').val(),
    };

    if (parkingSlot != null) {

        $.ajax({
            url: "/Parking/InsertSlot",
            data: JSON.stringify(parkingSlot), //convierte la variable espacio de parqueo en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                $('#result-p').text("Added successfully");
                $('#result-p').css('color', 'green');
                LoadParkingSlots();
            },
            error: function (errorMessage) {
                alert("Failure!")
            }
        });

    }

}

function UpdateParkingSlot() {
    let parkingSlot = {
        slotId: prompt("Type an ID"),
        state: prompt("Type a state"),
        type: prompt("Type a type"),
        parkingId: prompt("Type a parkingId"),
        price: prompt("Type a price")
    };

    if (parkingSlot != null) {

        $.ajax({
            url: "/Parking/UpdateSlot",
            data: JSON.stringify(parkingSlot), //converte la variable espacio de parqueo en tipo json
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                alert("Success!")
            },
            error: function (errorMessage) {
                alert("Failure!")
            }
        });

    }

}

function DeleteParkingSlot(id) {
    let alert = confirm("Are you sure you want to delete the parking slot with number: " + id + "?");
    if (alert) {
        $.ajax({

            data: JSON.stringify(id), //convierte la variable en tipo json
            url: "/Parking/DeleteSlot/" + id,
            type: "DELETE",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                GetParkingSlot();
            },
            error: function (errorMessage) {
                /*
                if (errorMessage === "no connection") {
                    $('#result-p').text("Error en la conexión.");
                }*/
            }
        });

    }
}

function ClearResultLabel() {
    $('#result-p').text("");
    $('#result-p-u').text("");
}


