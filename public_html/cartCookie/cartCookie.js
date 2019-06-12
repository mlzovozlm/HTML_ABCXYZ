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

            function checkCookie(item) {
                var buyQuantity = Number(getCookie(item));
                if (buyQuantity !== 0) {
                    addRow(item, buyQuantity);
                } else {
                }
            }
            function delCookie(cname) {
                document.cookie = cname + "=" + "" + ";" + "expires=Thu, 01 Jan 1970 00:00:01 GMT";
//                        + ";path=/";
            }

            function addRow(item, buyQuantity) {
                var list = document.getElementById("order");
                var row = list.insertRow();
                row.id = "order" + item;
                var cell0 = row.insertCell(0);
                cell0.innerHTML = item;
                var cell1 = row.insertCell(1);
                cell1.innerHTML = buyQuantity;
                var cell2 = row.insertCell(2);
                cell2.innerHTML = (buyQuantity * 5000) + "<u>đ</u>";
                var cell3 = row.insertCell(3);
                cell3.class = "remove-td";
                cell3.innerHTML =
                        "<input type=\"button\" \n\
        value=\"Remove\" onclick=\"removeItem(\'" + row.id + "\',\'" + item + "\')\">";
            }
            function removeItem(Rid, item) {
                delCookie(item);
                var row = document.getElementById(Rid);
                row.parentNode.removeChild(row);
                location.reload(true);
            }

            function addItem(item, inputQuantity) {
                var buyQuantity = Number(document.getElementById(inputQuantity).value);
                if (buyQuantity > 0 && buyQuantity <= 100) {
                    var quantity = Number(getCookie(item));
                    if (quantity !== 0)
                        setCookie(item, (buyQuantity + quantity), 1);
                    else {
                        setCookie(item, buyQuantity, 1);
                        addRow(item, buyQuantity);
                    }
                    location.reload(true);
                } else {
//                    var v = "&amp; abc";
//                    v = v.replace("&amp;", "&");
                    alert("Re-Enter Quantity! 0 < Quantity <= 100!");
                }
            }
            function load() {
                checkCookie('Coca');
                //delCookie('Coca');
                //removeItem('orderCoca', 'Coca');
                checkCookie('Pepsi');
                //delCookie('Pepsi');
                //removeItem('orderPepsi', 'Pepsi');
                checkCookie('Fanta');
                //delCookie('Fanta');
                //removeItem('orderFanta', 'Fanta');
                checkCookie('7Up');
                //delCookie('7Up');
                //removeItem('order7Up', '7Up');
            }


