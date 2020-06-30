function adicao(){
    var firstInput = document.querySelector('input#soma-a');
    var secondInput = document.querySelector('input#soma-b');

    var resul = (parseInt(firstInput.value) + parseInt(secondInput.value));

    return document.querySelector('span#soma').innerHTML = resul;
}
function sub(){
    var firstInput = document.querySelector('input#sub-a');
    var secondInput = document.querySelector('input#sub-b');
    
    var resul = (parseInt(firstInput.value) - parseInt(secondInput.value));

    return document.querySelector('span#sub').innerHTML = resul;
}
function multi(){
    var firstInput = document.querySelector('input#multi-a');
    var secondInput = document.querySelector('input#multi-b');

    var resul = (parseInt(firstInput.value) * parseInt(secondInput.value));

    return document.querySelector('span#multi').innerHTML = resul;
}
function divi(){
    var firstInput = document.querySelector('input#divi-a');
    var secondInput = document.querySelector('input#divi-b');

    var resul = (parseInt(firstInput.value) / parseInt(secondInput.value));

    return document.querySelector('span#divi').innerHTML = resul;
}