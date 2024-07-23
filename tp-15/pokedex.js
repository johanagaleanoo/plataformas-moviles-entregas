const API_URL= "https://pokeapi.co/api/v2/";
const limite_pokemon= 151;  // Número de pokémon a cargar
let inicio= 0;  // Desplazamiento inicial

document.addEventListener ("DOMContentLoaded", () => {
    cargar_pokemon ();
    document.getElementById ("cargar-mas").addEventListener ("click", cargar_pokemon);
});

async function cargar_pokemon (){
    document.getElementById ("spinner").style.display= "block";
    const response= await fetch (`${ API_URL }pokemon?limit= ${ limite_pokemon }&offset= ${ inicio }`);
    const data= await response.json ();
    lista_pokemon (data.results);
    document.getElementById ("spinner").style.display= "none";
}

async function lista_pokemon (list_pokemon){
    const contenedor= document.getElementById ("pokemon-list");
    for (const pokemon of list_pokemon) {
        const response= await fetch (pokemon.url);
        const data= await response.json ();
        const tipos= data.types.map (tipo_informacion => tipo_informacion.type.name).join (", ");

        const card= document.createElement('div');
        card.classList.add ("col-md-4");

        card.innerHTML = `
            <div class="card card-pokemon">
                <img src="${ data.sprites.front_default }" class="card-img-top" alt="${ data.name }">
                <div class="card-body">
                    <h5 class="card-title"> ${ data.name } </h5>
                    <p class="card-text"><strong> tipo= </strong> ${ tipos } </p>
                    <button class="btn btn-outline-secondary" onclick="mostrar_mas (${ data.id })"> mostrar más </button>
                </div>
            </div>
        `;
        contenedor.appendChild (card);
    }
}

async function mostrar_mas (id){
    const response= await fetch (`${ API_URL }pokemon/${ id }`);
    const data= await response.json ();
    const tipos= data.types.map (tipo_informacion => tipo_informacion.type.name).join (", ");
    const habilidades= data.abilities.map (habilidad_informacion => habilidad_informacion.ability.name).join (", ");
    const movimientos= data.moves.slice (0, 4).map (move_informacion => move_informacion.move.name).join (", ");

    alert (`
        nombre= ${ data.name };
        tipos= ${ tipos };
        habilidades= ${ habilidades };
        movimientos= ${ movimientos };
    `);
}
