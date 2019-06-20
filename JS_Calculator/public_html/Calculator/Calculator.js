/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num1 = 0;
var process = false;
var operator = -1;

function showHideDebug() {
    var debugDiv = document.getElementById("Debug");
    if (debugDiv.style.visibility === "visible") {
        debugDiv.style.visibility = "hidden";
    } else {
        debugDiv.style.visibility = "visible";
    }
}

function innerReset() { //done
    var num1Debug = document.getElementById("num1Debug");
    var processDebug = document.getElementById("processDebug");
    var operatorDebug = document.getElementById("operatorDebug");
    num1 = 0;
    num1Debug.innerHTML = num1;
    process = false;
    processDebug.innerHTML = process;
    operator = -1;
    operatorDebug.innerHTML = operator;
}

function clickPct() {
    var screen = document.getElementById("screen");
    if (process === true) {
        var num = screen.innerHTML / 100;
        screen.innerHTML = num.toFixed(5);
    }
}

function clickAC() { //done
    var screen = document.getElementById("screen");
    innerReset();
    screen.innerHTML = num1;
}

function clickNum(num) { //done
    var processDebug = document.getElementById("processDebug");
    var screen = document.getElementById("screen");
    var string = screen.innerHTML;
    if (process === true) {
        if (string === '0') {
            screen.innerHTML = num;
        } else {
            screen.innerHTML = string + num;
        }
    } else {
        screen.innerHTML = num;
        process = true;
        processDebug.innerHTML = true;
    }
}

function clickReverse() { //done
    var screen = document.getElementById("screen");
    var string = screen.innerHTML;
    if (process === true) {
        if (string.startsWith("-")) {
            screen.innerHTML = string.substring(1);
        } else {
            screen.innerHTML = "-" + string;
        }
    } else {
    }
}
function clickDot() { //done
    var processDebug = document.getElementById("processDebug");
    var screen = document.getElementById("screen");
    var string = screen.innerHTML;
    if (process === true) {
        if (string.includes('.')) {
            return;
        } else {
            screen.innerHTML = string + ".";
        }
    } else {
        screen.innerHTML = "0.";
        process = true;
        processDebug.innerHTML = true;
    }
}
function clickOperator(operate) { //done
    var num1Debug = document.getElementById("num1Debug");
    var processDebug = document.getElementById("processDebug");
    var operatorDebug = document.getElementById("operatorDebug");
    var screen = document.getElementById("screen");
    if (screen.innerHTML === "ERROR") {
        return;
    }
    if (process === true && operator === -1) {
        operator = operate;
        operatorDebug.innerHTML = operate;
        process = false;
        processDebug.innerHTML = false;
        num1 = screen.innerHTML;
        num1Debug.innerHTML = screen.innerHTML;
    } else {
        operator = operate;
        operatorDebug.innerHTML = operate;
    }
}
function clickEqual() { //done
    var num1Debug = document.getElementById("num1Debug");
    var processDebug = document.getElementById("processDebug");
    var operatorDebug = document.getElementById("operatorDebug");
    var screen = document.getElementById("screen");
    var num2 = Number(screen.innerHTML);
    if (process === true) {
        if (operator === -1) {
            num1 = num2;
            num1Debug.innerHTML = num1;
            process = false;
            processDebug.innerHTML = false;
            return;
        }
        switch (operator) {
            case 1:
                num1 = eval(num1 + num2);
                screen.innerHTML = num1.toFixed(5);
                num1Debug.innerHTML = num1.toFixed(5);
                break;
            case 2:
                num1 = eval(num1 - num2);
                screen.innerHTML = num1.toFixed(5);
                num1Debug.innerHTML = num1.toFixed(5);
                break;
            case 3:
                num1 *= num2;
                screen.innerHTML = num1.toFixed(5);
                num1Debug.innerHTML = num1.toFixed(5);
                break;
            case 4:
                if (num2 === 0) {
                    screen.innerHTML = "ERROR";
                    innerReset();
                } else {
                    num1 /= num2;
                    screen.innerHTML = num1.toFixed(5);
                    num1Debug.innerHTML = num1.toFixed(5);
                }
                break;
        }
        process = false;
        operator = -1;
        processDebug.innerHTML = false;
        operatorDebug.innerHTML = -1;
    } else {
    }
}
