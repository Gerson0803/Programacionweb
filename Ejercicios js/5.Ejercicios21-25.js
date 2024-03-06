//21. Encontrar números pares en un arreglo

let pares=(lista)=>{
    let nuevalista=[]
    lista.filter(elemento=>{
        if(elemento % 2 === 0){
            nuevalista.push(elemento)
        }   

    })
    return nuevalista
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

//22. Encontrar posiciones de números pares
let posiciones=(lista)=>{
    let nuevalista=[]
    for(let i=0;i<=lista.length;i++){
        if(lista[i]%2==0){
            nuevalista.push(i)
        }
    }

    return nuevalista
}
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

//23. Duplicar elementos de un arreglo
let duplicar=(lista)=>{
    let nueva=[]
    return nueva=lista.map(elemento => elemento * 2)
}
// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []


//24. Letras que empiezan por a 
let empiezanConA=(arreglo)=>{
    let nuevo=[]
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i][0]==="a"||arreglo[i][0]==="A"){
            nuevo.push(arreglo[i])
        }
    }
    return nuevo
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));

//25. Encontrar palabras que terminan en "s"
let terminanConS=(arreglo)=>{
    let nuevo=[]
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i][arreglo[i].length-1]==="s"||arreglo[i][arreglo[i].length-1]==="S"){
            nuevo.push(arreglo[i])
        }
    }
    return nuevo
}
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []





