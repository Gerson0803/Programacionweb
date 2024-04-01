//26. Imprimir una matriz


let imprimirMatriz=(matriz)=>{
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
              console.log(matriz[i][j])
        }
    }
}


(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))


//27. Traducir números a palabras
const numerosAPalabras = (numeros) => {
    const diccionario = {
        0: "cero",
        1: "uno",
        2: "dos",
        3: "tres",
        4: "cuatro",
        5: "cinco",
        6: "seis",
        7: "siete",
        8: "ocho",
        9: "nueve"
    };

   return numeros.map(num => diccionario[num])
};
// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

//28. Traducir palabras a números
const palabrasANumeros = (numeros) => {
    const diccionario = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

   return numeros.map(num => diccionario[num]!== undefined?diccionario[num]:-1 )
};
// código de prueba
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

//29. Número de asteriscos en un arreglo
let numAsteriscos=(arreglo)=>{
    let contador=0;
    arreglo.map(elemento => elemento!=="*"?contador=contador:contador++)
    return contador
}

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

//30. Número de asteriscos en una matriz

const numAsteriscosMatriz=(matriz)=>{ 
    let contador=0
    for(let i=0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length;j++){
             if(matriz[i][j]==="*"){
                contador++;
             }
        }
    }
    return contador

}
// código de prueba
console.log(numAsteriscosMatriz([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5

//31. Distancia entre dos strings
let distancia=(uno,dos)=>{
    let contador=0;
    if(uno.length>dos.length ||dos.length>uno.length){
        contador+=Math.abs(uno.length-dos.length)
    }
    for(let i=0;i<uno.length;i++){
        if(uno[i]!==dos[i]){
            contador++
        }
    }
    return contador
}
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3}

