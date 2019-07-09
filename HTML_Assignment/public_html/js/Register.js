/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function initPage() {
    var cities = document.getElementById("regCity");
    var list = ["Ha Noi", "Da Nang"];
    for (var i = 0; i < list.length; i++) {
        var option = document.createElement("option");
        option.text = list[i];
        option.id = "city" + i;
        option.value = list[i];
        cities.add(option);
    }
    
}

function submitReg() {
    //to-do
    return false;
}

function addDistrict() {
    //to-do
    var districtList = {
        "HaNoi": ["Ba Dinh", "Tay Ho", "Long Bien"],
        "DaNang": ["District 1", "District 2", "District 3"]
    };

    var cities = document.getElementById("regCity");
    var districts = document.getElementById("regDistrict");
    districts.selectedIndex = 0;

    var selectedCity = cities.options[cities.selectedIndex].text;
    for (var i = districts.length - 1; i > 0; i--) {
        districts.remove(i);
    }
    switch (selectedCity) {
        case "Ha Noi":
            for (var i = 0; i < districtList.HaNoi.length; i++) {
                var option = document.createElement("option");
                option.text = districtList.HaNoi[i];
                option.id = "district" + i;
                option.value = districtList.HaNoi[i];
                districts.add(option);
            }
            break;
        case "Da Nang":
            for (var i = 0; i < districtList.DaNang.length; i++) {
                var option = document.createElement("option");
                option.text = districtList.DaNang[i];
                option.id = "district" + i;
                option.value = districtList.DaNang[i];
                districts.add(option);
            }
            break;
    }
}
