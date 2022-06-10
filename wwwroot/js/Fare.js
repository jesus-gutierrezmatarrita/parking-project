

﻿$(document).ready(function () {
     


    
      LoadCategorys(); 
     /* LoadParkings();*/
     /* LoadUnitTime();*/
         
         return false;
     });
function LoadCategorys() {

    $.ajax({
        url: "/Category/Get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //llenar el dropdowns (select)
            var html = '';
            $.each(result, function (key, item) {
                html += '<option value="' + item.id+ '">' + item.name + '</option>';
            });
            $('#dropdownFARECategory').append(html);
        
        },
        error: function (errorMessage) {
            // alert("Error");
            alert(errorMessage.responseText);
        }
    });
}


   

 