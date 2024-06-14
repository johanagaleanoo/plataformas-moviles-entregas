const persona= {
    nombre: "johana",
    apellido: "galeano",
    edad: 18,
    documento: 123456,
}

// ejercicio N°1:
// crear personas
// recibe:
// "nombre": string, con el nombre
// "apellido": string, con el apellido
// "edad": numero entero, con la edad de la persona
// "documento": numero entero, con el documento de la persona 
// retorna:
// un objeto, representando una persona con los campos recibidos
function crear_persona (){
    return persona;
};
console.log ("ejercicio N°1:");
console.log (crear_persona ());

// ejercicio N°2:
// agregar apodo
// recibe:
// "persona": objeto de la forma persona
// retorna:
// un objeto, representando a la misma persona recibida, pero con un nuevo campo "apodo"
function agregar_apodo (){
    persona.apodo= "algun apodo";

    return persona;
};
console.log ("ejercicio N°2:");
console.log (agregar_apodo ());

// ejercicio N°3:
// sin documento
// recibe:
// "persona": objeto de la forma persona
// retorna:
// un objeto, representando a la misma persona recibida, pero sin el campo documento
function sin_documento (){
    const persona_sin_doc= Object.assign ({}, persona);

    delete persona_sin_doc.documento;

    return persona_sin_doc;
}
console.log ("ejercicio N°3:");
console.log (sin_documento ());

// ejercicio N°4:
// nombre completo de la persona
// recibe:
// "persona": objeto de la forma persona
// retorna:
// un string, con el nombre completo de una persona
// asimismos que nombre completo tiene el formato "apellido", "nombre"
// por ejemplo: para una persona con nombre "juan" y apellido "perez", el nombre completo seria, "perez", "juan"
function nombre_completo (){
    return persona.nombre + " " + persona.apellido;
};
console.log ("ejercicio N°4:");
console.log (nombre_completo ());

// ejercicio N°5:
// feliz cumpleaños
// retorna:
// "persona": objeto de la forma persona
// retorna:
// un objeto, representando a la misma persona recibida, pero con un año mas
function cumpleaños (){
    const cumpleaños= Object.assign ({}, persona, {
        edad: persona.edad + 1
    })

    return cumpleaños;
}
console.log ("ejercicio N°5:");
console.log (cumpleaños ());

// ejercicio N°6:
// son la misma persona 
// recibe:
// "persona1": un objeto de la forma persona
// "persona2": otro objeto de la forma persona
// retorna:
// un valor boolean ("true" o "false"), indicando si persona1 y persona2 son la misma persona
function misma_persona (){
    const persona1= {
        nombre: "gonzalo", 
        apellido: "torrez",
        document: 1234567
    }
    const persona2= {
        nombre: "gonzalo",
        apellido: "torrez",
        documento: 1234567
    }

    return persona1.nombre === persona2.nombre && persona1.apellido === persona2.apellido;
}
console.log ("ejercicio N°6:");
console.log (misma_persona ());