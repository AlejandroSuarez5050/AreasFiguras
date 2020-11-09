var circulo = function () {
    var radio = document.getElementById("radio").value;
    var pi = 3.1416;
    var area = (radio*radio)*pi;
    if (radio ==""){
        window.alert("Tienes que agregar un Radio");
        document.getElementById("radio").focus();
    }else {
        window.alert("El area es: "+area);
    }
}
var cuadrado = function () {
    var lado = document.getElementById("lado").value;
    var area = lado*lado;
    if (lado ==""){
        window.alert("Tienes que agregar un lado");
        document.getElementById("lado").focus();
    }else {
        window.alert("El area es: "+area);
    }
}
var rectangulo = function () {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = base*altura;
    if (base ==""){
        window.alert("Tienes que agregar una base");
        document.getElementById("base").focus();
    }else {
        if (altura==""){
            window.alert("Tienes que agregar una altura");
            document.getElementById("altura").focus();
        }
        else{
            window.alert("El area es: "+area);
        }
    }
}
var triangulo = function () {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (base*altura)/2;
    if (base ==""){
        window.alert("Tienes que agregar una base");
        document.getElementById("base").focus();
    }else {
        if (altura==""){
            window.alert("Tienes que agregar una altura");
            document.getElementById("altura").focus();
        }
        else{
            window.alert("El area es: "+area);
        }
    }
}