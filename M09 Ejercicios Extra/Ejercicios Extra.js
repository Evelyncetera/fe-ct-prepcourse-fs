/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array1 = [];
   for(let i in objeto){
      let array2 = [];
      array2.push(i);
      array2.push(objeto[i]);

      array1.push(array2)
   }
   return array1
};

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const sorted = string.split("").sort().join("")


   var objetoIncial = { }
   for (let index = 0; index < sorted.length; index ++) {
      var letra = sorted[index]
      if(letra in objetoIncial) {
         objetoIncial[letra]++
      } else {
         objetoIncial[letra] = 1
      }
   }
   return objetoIncial
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = "";
   var minusc = "";
   for (var i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
         mayus +=string[i]
      }else {
         minusc += string[i]
      }
   }
   return mayus + minusc;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var res = "";
   var str = frase.split(" ");
   for(var i = 0; i < str.length; i++) {
      res += str[i].split("").reverse().join("");
      if(i !== str.length - 1) {
         res += " ";
      }
   }
      return res;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var res = "Es capicua";
   var str = numero.toString()
   for( var i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length -1 - i]) {
         res = "No es capicua";
      }
   }
      return res;
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let nuevoString = '';

   for (let i = 0; i < string.length; i++) {
      if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
         nuevoString += string[i];
      }
   }
   return nuevoString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings = arrayOfStrings.sort((a, b) => a.length - b.length)
   return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let same = [];

   for(let i = 0; i < array1.length; i++) {
      if(array2.includes(array1[i]) && !same.includes(array1[i])) {
         same.push(array1[i]);
      }
   }
   return same; 

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
