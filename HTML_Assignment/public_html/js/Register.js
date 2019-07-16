/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*-----------------------------DO NOT MODIFY--------------------------------------*/
var cityList = ["Ha Noi", "Da Nang"];
var districtList = {
    HaNoi: ["Ba Dinh", "Tay Ho", "Long Bien"],
    DaNang: ["District 1", "District 2", "District 3"]
};

function initRegPage() {
    updateCartLabel();
    var cities = document.getElementById("regCity");
    var PINImg = document.getElementById("PINImg");
    for (var i = 0; i < cityList.length; i++) {
        var option = document.createElement("option");
        option.text = cityList[i];
        option.id = "city" + i;
        option.value = cityList[i];
        cities.add(option);
    }
    var i = 0;
    PINImg.alt = "";
    while (i < 6) {
        PINImg.alt += "" + Math.floor(Math.random() * 10);
        i++;
    }
}
function otherPIN() {
    var PINImg = document.getElementById("PINImg");
    PINImg.alt = "";
    var i = 0;
    while (i < 6) {
        PINImg.alt += "" + Math.floor(Math.random() * 10);
        i++;
    }
}

function submitReg() {
    var user = document.getElementById("regUser").value;
    var pass = document.getElementById("regPass").value;
    var repass = document.getElementById("regRePass").value;
    var pin = document.getElementById("regPIN").value;
    var cities = document.getElementById("regCity");
    var districts = document.getElementById("regDistrict");
    var PINImg = document.getElementById("PINImg");

    var userFormat = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
    var passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var valid = true;
    var message = "";
    if (!userFormat.test(user)) {
        message += "Username must contains only alphanumeric characters and \"_\"\n"
                + "Username must be 6 characters or longer\n";
    }
    if (!passFormat.test(pass)) {
        message += "Password must contain:\n"
                + "at least 1 lowercase alphabetical character\n"
                + "at least 1 uppercase alphabetical character"
                + "at least 1 numeric character\n"
                + "at least one special character(! @ # $ % ^ & *)\n"
                + "Password must be 8 characters or longer\n";
        valid = false;
    }

    if (cities.selectedIndex === 0 || districts.selectedIndex === 0) {
        message += "Select City & District\n";
        valid = false;
    }

    if (pin !== PINImg.alt) {
        message += "Wrong PIN\n";
        valid = false;
    }
    alert(message);
    return valid;
}

function addDistrict() {
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
/*-----------------------------DO NOT MODIFY--------------------------------------*/
/*---------------------------ADD CONTENT BELOW THIS-------------------------------*/
