// ejercicio N°1:
// invertir lista
// recibe: "lista_numeros", una lista (array) de numeros
// retorna: una lista de numeros con los mismos elementos pero en orden inverso al que fueron recibidos
// ejemplo:
// invertir_lista ([2, 3, 4]), retorna [4, 3, 2]
function invertir_lista (lista_numeros){
    return lista_numeros.reverse ();
}
console.log ("ejercicio N°1:");
console.log ("invertir lista [8, 9, 10]: ", invertir_lista ([8, 9, 10]));

// ejercicio N°2:
// calcular promedio
// recibe: "lista_numeros": una lista (array) de numeros
// retorna: un numero con el valor calculado de promedio para los numeros en la lista recibida
// ejemplo:
//  calcular_promedio ([2, 3, 4]), retorna 3
function calcular_promedio (){
    var i;
    var suma= 0;
    const array_numeros= [5, 6, 7, 8, 9, 10];

    for (i=0; i < array_numeros.length; i++){
        suma= suma + array_numeros [i];
    }

    const promedio= suma / array_numeros.length;
    return promedio;
}
console.log ("ejercicio N°2:");
console.log ("calcular promedio: ", calcular_promedio ());

// ejercicio N°3:
// crear lista de numeros
// recibe: "inicio": un numero con el valor inicial de la lista
// fin: un numero con el valor final de la lista
// retorna: una lista (array) con valores numericos en secuencia, desde "inicio" hasta "fin"
// ejemplo:
// crear_lista_numeros (1, 5), retorna [1, 2, 3, 4, 5]
function crear_lista_numeros (numero_inicial, numero_final){
    const lista_numeros= [];

    for (i= numero_inicial; i <= numero_final; i++){
        lista_numeros.push (i);
    }

    return lista_numeros;
}
console.log ("ejercicio N°3:");
console.log ("lista de numeros [10-20]: ", crear_lista_numeros (10, 20));

//  ejercicio N°4:
// ordenar de mayor a menor
// recibe: "lista_numeros": na lista (array) de numeros
// retorna: una lista de numeros con los mismos elementos pero en orden decreciente (de mayor a menor)
// ejemplo:
// ordenar_mayor_menor ([2, -1, 4]), retorna [4, 2, -1]
function ordenar_mayor_menor (){
    const array_numeros= [10, -5, 0, -12, 20];

    return array_numeros.sort ();
}
console.log ("ejercicio N°4:");
console.log ("ordenar de mayor a menor [10, -5, 0, -12, 20]: ", ordenar_mayor_menor ());

// ejercicio N°5:
//  encontrar el numero mayor
// recibe: "lista_nummeros": una lista (array) de numeros
// retorna: un numero con el valor del numero mas grande contenido en la lista recibida
// ejemplo:
// encontrar_numero_mayor ([2, 3, 4]), retorna 4
function encontrar_numero_mayor (){
    const array_numeros= [];

    return Math.max (30, 4, 5);
}
console.log ("ejercicio N°5:");
console.log ("encontrar numero mayor [30, 4, 5]: ", encontrar_numero_mayor ());

// ejercicio N°6:
// ordenar palabras por longitud 
// recibe: "lista_palabras": una lista (array) de palabras (string)
// retorna: una lista (array) de palabras (string) con los mismos valores que la lista recibida pero ordenados de manera creciente de acuerdo a su cantidad de caracteres
// ejemplo:
// ordenar_palabra_longitud (['abc', 'a', 'ab]), retorna ['a', 'ab', 'abc]
function ordenar_palabra_longitud (){
    const array_palabras= ['johana', 'hola', 'gt'];

    return array_palabras.sort ();
}
console.log ("ejercicio N°6:");
console.log ("ordenar palabras por longitud []: ", ordenar_palabra_longitud ());

// ejercicio N°7:
// encontrar la palabra mas corta
// recibe: "lista_palabras": una lista (array) de palabras (string)
// retorna: una palabra (string) que dentro del listado que tenga la menor cantidad de caracteres, en caso de que haya varias palabras con la misma longitud, se puede devolver la primera encontrada
// ejemplo:
// encontrar_palabra_corta (['abc', 'a', 'ab', 'c']), retorna 'a'
function encontrar_palabra_corta (){
    const palabra_corta= ["johana", "anda a saber", "avion", "gt"];

    return palabra_corta.filter ((palabra) => {
        return palabra.length < 4;
    });
}
console.log ("ejercicio N°7");
console.log ("palabras cortas: ", encontrar_palabra_corta ());

// ejercicio N°8:
//  filtrar solo los positivos
// recibe: "lista_numeros": una lista (array) de numeros
// retorna: una lista (array) de numeros, conteniendo solo los valores positivos de la lista de numeros recibida
// ejemplo:
// filtrar_positivos ([1, -1, 2]), retorna [1, 2]
function filtrar_positivos (){
    const numeros_positivos= [-2, 10, -4, 20];

    return numeros_positivos.filter (numero => numero >= 0);
}
console.log ("ejercicio N°8:");
console.log ("numeros positivos [-2, 10, -4, 20]: ", filtrar_positivos ());

// ejercicio N°9:
// contar aprobados
// recibe: "lista_notas": una lista (array) de numeros con valores entre 1 y 10
// retorna: un numero con la cantidad de notas que superan el criterio de aprobacion
//  ejemplo:
// contar_aprobados ([10, 2, 9]), retorna 2
function contar_aprobados (){
    const lista_notas= [10, 2, 3, 8, 9, 1, 0, 10, 9, 7, 6];

    return lista_notas.filter (nota => nota >= 7).length;
}
console.log ("ejercicio N°9:");
console.log ("cantidad de aprobados: ", contar_aprobados ());

// ejercicio N°10:
// filtrar solor truthy
// recibe: "lista_valores": de una lista (array) de valores de distintos tipos
// retorna: una lista (array) conteniendo solo los valores que son considerados "truthy" por el lenguaje javascript
// ejemplo:
// filtrar_truthy (["hola", "", 0, 1]), retorna ["hola", 1]
function filtrar_truthy (){
    const lista_valores= ["johana", "", null, "galeano", null, "18"];
    return lista_valores.filter (valor => Boolean (valor));
}
console.log ("ejercicio N°10:");
console.log ("valores filtrados por truthy: ", filtrar_truthy ());

// ejercicio N°11:
// enumerar lista
// recibe: "lista_palabras": una lista (array) de palabras (strings)
// retorna: una oracion (string), donde se enumeran cada una de las palabras recibidas en la lista
// bonus: una oracion correctamente formada deberia empezar en mayuscula, terminar con punto y ademas el ultimo elemento de enumeracion deberia estar separado con "y"
// ejemplo:
// enumerar_lista (["Han", "Leia", "Luke", "Yoda"]), retorna "Han, Leia, Luke y Yoda"
function enumerar_lista(lista_palabras) {
    // si hay solamente una palabra, no pone ",", ni "y"
    if (lista_palabras.length === 1) {
        return lista_palabras [0];
    }

    // si hay solamente dos palabras, usa "y"
    if (lista_palabras.length === 2) {
        return lista_palabras.join (" y ");
    }

    // si hay mas de dos palabras, usa "," y "y"
    return lista_palabras.slice (0, -1).join (", ") + " y " + lista_palabras [lista_palabras.length - 1];
}
console.log ("ejercicio N°11:");
console.log ("lista de palabras: ", enumerar_lista (["Johana", "Marco", "Ailin", "Priscilla", "Sofia"]));