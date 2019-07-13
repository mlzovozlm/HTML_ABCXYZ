/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*-----------------------------DO NOT MODIFY--------------------------------------*/
var productList = [ {id: "1", name: "item1", quantity: "quantity1", image: "item1"}, 
                    {id: "2", name: "item2", quantity: "quantity2", image:"item2"}];
var cartList = [ {id:"1", orderQuan:"1"}];

var orderList = [];

var staffList = [];


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


//function addtoCookie() {
//    var element = {name: "item3", quantity: "quantity3"};
//    productList.push(element);
//    var all = JSON.stringify(productList);
//    alert(all);
//    setCookie("all", all, 1);
//}
//function iterateJSON() {
//    for (var i = 0; i < productList.length; i++) {
//        var obj = productList[i];
//        console.log(obj.name);
//        console.log(obj.quantity);
//    }
//}
//function retrieve() {
//    var jsonStr = getCookie("all");
//    var retrievedArray = JSON.parse(jsonStr);
//    //iterate
//}
/*-----------------------------DO NOT MODIFY--------------------------------------*/
/*---------------------------ADD CONTENT BELOW THIS-------------------------------*/
