/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
//                        + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var demoArrayJSON = [{name: "item1", quantity: "quantity1"}, {name: "item2", quantity: "quantity2"}];
function addtoCookie() {
    var all = JSON.stringify(demoArrayJSON);
    alert(all);
    setCookie("all", all, 1);
}
function iterateJSON() {
    for (var i = 0; i < demoArrayJSON.length; i++) {
        var obj = demoArrayJSON[i];
        console.log(obj.name);
        console.log(obj.quantity);
    }
}
function retrieve() {
    var jsonStr = getCookie("all");
    var retrievedArray = JSON.parse(jsonStr);
    //iterate
}



