
/*Ejercicio 11
Suma de arreglo*/ 
function sumarArreglo(lista){
    let suma=0;
    for(let i=0;i<lista.length;i++){
        suma+=lista[i];
    }
    return suma;
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

function sumarArreglo2(lista) {
    // Utilizamos reduce para sumar los elementos del arreglo
    // El valor inicial de acumulador es 0
    // El valor actual es cada elemento del arreglo
    return lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

/*Ejercicio 12
Multiplicacion de arreglo*/
function multiplicarArreglo(lista){
    let multiplicacion=1;
    for(let i=0;i<lista.length;i++){
        multiplicacion*=lista[i];
    }
    return multiplicacion;
}
// código de prueba
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

function multiplicarArreglo2(lista) {
    // Utilizamos reduce para multiplicar los elementos del arreglo
    // El valor inicial del acumulador es 1, ya que queremos multiplicar
    return lista.reduce((acumulador, elemento) => acumulador * elemento, 1);
}

// Ejemplos de uso
console.log(multiplicarArreglo2([3, 2, 4])); // Resultado: 24
console.log(multiplicarArreglo2([1, 2, 3, 4, 5])); // Resultado: 120
console.log(multiplicarArreglo2([])); // Resultado: 1 (ya que no hay elementos para multiplicar)

/*Sintaxis:


javascript
Copy code
arreglo.reduce(funcionReduccion[, valorInicial]);
Parámetros:

funcionReduccion: Una función que se aplica a cada elemento del arreglo. Esta función toma cuatro argumentos:
acumulador: El valor acumulado de las reducciones anteriores. También se conoce como el "valor parcial".
elementoActual: El elemento actual que se está procesando en el arreglo.
indice: El índice del elementoActual en el arreglo.
arreglo: El arreglo sobre el cual se llama reduce.
valorInicial (opcional): Un valor inicial para el acumulador. Si se proporciona, reduce comenzará con este valor; de lo contrario, utilizará el primer elemento del arreglo como valor inicial y comenzará la reducción desde el segundo elemento.
Valor devuelto:

El valor devuelto por reduce es el valor final del acumulador después de que se ha aplicado la función de reducción a todos los elementos del arreglo.
Ejemplo:

javascript
Copy code
const arreglo = [1, 2, 3, 4, 5];
const sumaTotal = arreglo.reduce((acumulador, elementoActual) => acumulador + elementoActual, 0);
console.log(sumaTotal); // Resultado: 15 (1 + 2 + 3 + 4 + 5)*/ 

//13: remover 0
function removerCeros(lista){
    lista.forEach(element => {
        if(element===0){
            lista = lista.filter(elemento => elemento !== 0)}
    });
    return lista;
}
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []


//14
function sumarArregloRango(arreglo,inicio,final){
    let suma=0;
    for(let i=inicio;i<=final;i++){
        suma+=arreglo[i];
    }
    return suma;
}
console.log(sumarArregloRango([1, 2, 3], 1, 2)) // 5
console.log(sumarArregloRango([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArregloRango([7, 8, 9], 0, 0)) // 0


//15 adn-arn
let transcribir=(cadena)=>{
    
    const diccionarioComplementario = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    let nueva="";
    cadena.forEach(elemento => {
        if(diccionarioComplementario.hasOwnProperty(elemento)){
            nueva+=diccionarioComplementario[elemento]
        }else{
            nueva+=elemento;           
        }
        
    });   
    return nueva 
}
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"