const lista_personas= [
    {
        "apellido": "galeano",
        "nombre": "johana",
        "edad": 18,
        "documento": 12345
    },
    {
        "apellido": "luna",
        "nombre": "camila",
        "edad": 18,
        "documento": 23456
        
    },
    {
        "apellido": "zanella",
        "nombre": "nicolas",
        "edad": 18,
        "documento": 34567
    },
    {
        "apellido": "fernandez",
        "nombre": "dylan",
        "edad": 19,
        "documento": 45678
    },
    {
        "apellido": "lopez",
        "nombre": "cristian",
        "edad": 15,
        "documento": 5678910
    }
]

// ejercicio N°1:
// ordenar por apellido
// recibe: 
// "lista_personas": una lista, array, con objetos de la forma "persona"
// retorna:
// el mismo listado, ordenado alfabeticamente por el apellido de la persona
function ordenar_apellido (){
    lista_personas.sort ((a, b) => {
        const apellido_a= a.apellido.toLowerCase ();
        const apellido_b= b.apellido.toLowerCase ();

        // comparacion de apellidos por orden alfabetico
        if (apellido_a < apellido_b){
            return -1;
        }
        if (apellido_a < apellido_b){
            return 1;
        }
        return 0;
    })

    return lista_personas;
}
console.log ("ejercicio N°1:");
console.log (ordenar_apellido ());

// ejercicio N°2:
// solo nombres
// recibe:
// "lista_personas": una lista, array, con objetos de la forma "persona"
// retorna:
// una lista de strings, con solo los nombres de las personas
function solo_nombres (){
    return lista_personas.map (persona => persona.nombre);
}
console.log ("ejercicio N°2:");
console.log (solo_nombres ());

// ejercicio N°3:
// promedio de edades
// recibe:
// "lista_persona": una lista, array, con objetos de la forma "persona"
// retorna:
// un numero con el calculo del promedio de las edades
function promedio_edades (){
    const suma= lista_personas.reduce ((suma, persona) => suma + persona.edad, 0);
    const promedio= suma / lista_personas.length;

    return promedio;
}
console.log ("ejercicio N°3:");
console.log (promedio_edades  ());

// ejercicio N°4:
// solo mayores de edad
// recibe: 
// "lista_personas": una lista, array, con objetos de la forma "persona"
// retorna:
// una lista, array, contenido solamente las personas con mas de 18 años
function solo_mayores (){
    return lista_personas.filter (persona => persona.edad == 18);
}
console.log ("ejercicio N°4:");
console.log (solo_mayores ());

// ejercicio N°5:
// la persona mayor
// recibe:
// "lista_personas": una lista, array, con objetos de la forma "persona"
// retorna:
// un objeto con la persona de mayor de edad en todo el listado
// en caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado
function persona_mayor (){
    let i;
    const persona= lista_personas [0];

    for (i=1; i < lista_personas.length; i++){
        if (lista_personas [i].edad > persona.edad){
            persona= lista_personas [i];
        }
    }

    return persona;
}
console.log ("ejercicio N°5:");
console.log (persona_mayor ());