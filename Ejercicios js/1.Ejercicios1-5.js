
//Ejercicio 1
//COntraseña valida
function contraseñavalida(input){
    return input =="2Fj(jjbFsuj" || input =="eoZiugBf&g9"? true:false
}
console.log(contraseñavalida(""));

//Ejercicio 2 
//

function calcularimpuesto(edad,ingreso){
    return edad>=18 && ingreso>=1000? ingreso*0.4:0 

}
console.log(calcularimpuesto(17,5000));


//Ejercicio 3
var diccionario = {
    "clave1": "Bajo de peso",
    "clave2": "Normal",
    "clave3": "Sobrepeso",
    "clave4": "Obeso"
};

function imc(peso,altura){
    var calculo=(peso )/ (altura^2);
    if (calculo<18.5){
        return diccionario["clave1"];
    }
    if(calculo>=18.5 && calculo<=24.9){
        return diccionario["clave2"];
    }
    if(calculo>=25 && calculo<=29.9){
        return diccionario["clave3"]
    }
    if(calculo>30){
        return diccionario["clave4"]
    }
}

//Ejercicio 4

function imprimirarreglo(arreglo){
    for (const elemento of arreglo){
        console.log("//", elemento)
    }
}
imprimirarreglo([1, "Hola", 2, "Mundo"]);

//Ejercicio 5
function numerolikes(likes){
    if (likes >= 1000000) {
        return Math.floor(likes / 1000000) + "M";
    } else if (likes >= 1000) {
        return Math.floor(likes / 1000) + "K";
    } 
    if(likes<1000){
        return likes.toString();
    }
}
console.log(numerolikes(12340));
