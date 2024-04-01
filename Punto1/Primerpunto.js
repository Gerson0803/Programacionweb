/* Funcion realizada solo con una funcion de JS (.toStriing())*/
function sumarCuadros(array) {
  let suma = 0;
  let dashesFinal = "";
  for (let i = 0; i < array.length; i++) {
    let dashes = ""; 
    for (let j = 0; j < array[i].toString().length; j++) { 
      dashes += "-";
    }
    console.log("+" + dashes + "+\n" + "|" + array[i] + "|\n" + "+" + dashes + "+");
    suma += array[i];
   
  }
  for (let j = 0; j < suma.toString().length; j++) { 
    dashesFinal += "="; 
  }
  
  console.log("+" + dashesFinal + "+\n" + "|" + suma + "|\n" + "+" + dashesFinal + "+");
}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);

const arrayNumeros1 = [1, 2, 3, 4, 5];
sumarCuadros(arrayNumeros1);
