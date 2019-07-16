/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//cart -> [{id: id},...]
function initCartPage() {
    updateCartLabel();
    updateCartTable();
//    hideShowBtn();
}
function getCart() {
//    var buyQuantity = Number(getCookie(item)); //old version without JSON
    var cartList = getCookie("cartList");
    var cart = [];
    if (cartList === "" || cartList === null) {
        cartList = JSON.stringify(cart);
        setCookie("cartList", cartList, 1);
    } else {
        cart = JSON.parse(cartList);
    }
    return cart;
}
function getCartSize() {
    return getCart().length;
}
function addToCart(itemId) {
    var cart = getCart();
    var item = {id: itemId};
    for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        if (obj.id === item.id)
            return;
    }
    cart.push(item);
    cartList = JSON.stringify(cart);
    setCookie("cartList", cartList, 1);
    updateCartLabel();
}
function removeFromCart(itemId) {
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        if (obj.id === itemId) {
            cart.splice(i, 1);
            cartList = JSON.stringify(cart);
            setCookie("cartList", cartList, 1);
        }
    }
    location.reload();
}
function updateCartLabel() {
    var count = document.getElementById("lblCartCount");
    count.innerHTML = getCartSize();
}
function updateCartTable() {
    var table = document.getElementById("cart-table");
    var cart = getCart();
    for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        var row = table.insertRow();
        row.id = "item" + obj.id;

        var cell0 = row.insertCell(0);
        cell0.innerHTML = obj.id;

        var cell1 = row.insertCell(1);
        cell1.innerHTML = "<input type=\"number\" class=\"quantityInput\" id=\"quan" + obj.id + "\"\n\
        value=\"0\" placeholder=\"Enter quantity\" \n\
        min=\"1\" max=\"100\" onchange=\"updateTotalCost(\'" + obj.id + "\')\">";

        var cell2 = row.insertCell(2);
        cell2.id = "price" + obj.id;
        cell2.innerHTML = 300000;

        var cell3 = row.insertCell(3);
        cell3.id = "total" + obj.id;
        cell3.innerHTML = 0;

        var cell4 = row.insertCell(4);
        cell4.class = "remove-td";
        cell4.innerHTML =
                "<input type=\"button\" \n\
        value=\"Remove\" onclick=\"removeFromCart(\'" + obj.id + "\')\">";
    }
}
function updateTotalCost(itemId) {
    var inputId = "quan" + itemId;
    var priceId = "price" + itemId;
    var totalId = "total" + itemId;
    var quantity = Number(document.getElementById(inputId).value);
    var price = Number(document.getElementById(priceId).innerHTML);
    var total = document.getElementById(totalId);
    if (quantity % 1 !== 0 || quantity <= 0) {
        return;
    }
    total.innerHTML = (quantity * price).toLocaleString();
}
function hideShowBtn() {
    var count = getCart().length;
    var btnCheckOut = document.getElementById("checkOut");
    if (count === 0) {
        btnCheckOut.style.visibility = "hidden";
    } else {
        btnCheckOut.style.visibility = "visible";
    }
}
function checkOut() {
    var valid = true;
    var cart = getCart();
    if(cart.length === 0){
        return;
    }
    for (var i = 0; i < cart.length; i++) {
        var inputId = "quan" + cart[i].id;
        var quantity = Number(document.getElementById(inputId).value);
        if (quantity % 1 !== 0 || quantity <= 0 || quantity > 100) {
            valid = false;
            break;
        }
    }
    if (valid) {
        delCookie("cartList");
        location.reload();
    } else {
        alert("Check quantity input!\nQuantity must be integer from 1 to 100");
    }
}
