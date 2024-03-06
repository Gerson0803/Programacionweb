
//Numero 6
//Fizzbuzz
function fizzbuzz(number){
  
    if(number%3===0 && number%5===0){
        return (`fizzbuzz`)
    }
    if(number%3===0){
        return(`fizz`)
    }
    if(number%5===0){
        return(`buzz`)
    }
    return (number)

}

//Numero 7
//Contar numeros
function contarRango(menor, mayor){
    var contador=0;
    for(var i=menor ; i<mayor;i++){
        contador++;
    }
    return contador-1;
}
console.log(contarRango(1,9))
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

//Numero 8
//Sumar numeros
function sumarRango(menor, mayor){
    var contador=0;
    for(var i=menor ; i<=mayor;i++){
        contador+=i;
    }
    if(menor=== mayor){
        return 0;
    }
    return contador;
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0


//Numero 9
//Suma de a
function numeroDeAes(palabra){
    var contador=0;
    for (let i = 0; i < palabra.length; i++) {
        
       var letra="a";
        if (palabra[i] === letra) {
            contador++;
        }
        
    }

}
console.log(numeroDeAes("letra"));

//Numero 10
//Número de caracteres
 function numeroDeCaracteres(cadena, letra){
    var contador = 0;
    for (let i = 0; i < cadena.length; i++) {

         if (cadena[i] === letra) {
             contador++;
         }
         
     }
     return (`${cadena},${contador}`)
 }
 console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4