// 16. ) Capitalizar
let capitalizar=(cadena)=>{
    return cadena.charAt(0).toUpperCase()+ cadena.slice(1);
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // "


//17. )Capitalizar cada palabra
let capitalizarPalabra=(texto)=>{
    if(texto.length===0){
        return []
    }else{
    let palabras=texto.split(" ")
    for(let i=0;i<palabras.length;i++){
       palabras[i]=palabras[i][0].toUpperCase() + palabras[i].slice(1)
       
    }
    return palabras
    
    }

  
}
// código de prueba
console.log("17")
console.log(capitalizarPalabra("hola mundo")) // "Hola Mundo"
console.log(capitalizarPalabra("make it real")) // "Make It Real"
console.log(capitalizarPalabra("")) // ""

//18. Encontrar el número máximo
let max=(lista)=>{
    let mayor=0;
    for(i=0;i<lista.length;i++){
        if(lista[i]>mayor){
            mayor=lista[i]
        }
    }
    return mayor;
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

//19. Encontrar el número mínimo
let min=(lista)=>{
    let menor=Math.min(...lista);
    for(i=0;i<lista.length;i++){
        if(lista[i]<menor){
            menor=lista[i]
        }
    }
    return menor;
}
// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

//20. Generar contraseña

let password=(contraseña)=>{
    const diccionario = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
    };
    return contraseña.split('').map(letra=>diccionario[letra]|| letra).join('');
}
    console.log(password("hola")) // "h0l4"
    console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
    console.log(password("")) // ""

