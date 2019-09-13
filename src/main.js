//Data global de data y aquí creamos la variable 
//que almacenará a sus personajes respectivamente
const randm = RICKANDMORTY.result;

function show(randm){
  for(let i=0; i<randm.length;i++){
    console.log(randm[i].name)
}

show(randm);


  //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
  let columnList = document.createElement("div");
  columnList.className = "list";
 
  

  //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
  let chip = document.createElement("div");
  //id creado <div id="chip"></div>
  chip.id = "chip";

let characterName = document.createElement("h4");
  //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "name"=""
  characterName.textContent = randm[i].name;

//Creamos el elemento img que conteneŕa la imagen de cada pokemon
let characterPhoto = document.createElement("img");
//Le decimos que en este elemento HTML su source(src="") será lo que contiene
//el elemento img:'' dentro de la data, según sea el índice.
//En rickandmorty.js "img"=""
characterPhoto.src = randm[i].img;

let characterSpecies = document.createElement("h3");
//Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "species"=""
characterSpecies.textContent = randm[i].species;

let characterStatus = document.createElement("h5");
//Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "status"=""
characterStatus.textContent = randm[i].status;

let fileType = document.createElement("div");
  fileType.className = "file";
  fileType.id = "fileType";


let listType = document.createElement("div");
  listType.className = "list";
  listType.id = "listType";
  let columnType = document.createElement("div");
  columnType.className = "column";

  //Tiene un tipo
  //Ideal sería hacer un if, que si tiene un tipo entonces cree un label y de acuerdo
  //sea el tipo, será la clase que tomará (para que sean de colores distintos) y si son
  //dos tipos entones que cree dos label.
  let rickandmortyType = document.createElement("h1");
  rickandmortyType.textContent = randm[i].type;
 
    
    columnType.appendChild(ricjandmortyType);
    fileType.appendChild(columnType);
    chip.appendChild(characterName);
    chip.appendChild(characterPhoto);
    chip.appendChild(characterStatus);
    chip.appendChild(filterType);


    columnList.appendChild(chip);

    //Mostrar en el contenedor especificado
    
    document.getElementById("root1").appendChild(columnList).innerHTML; 
  }


//Le entregamos a la variable selectorType el id del selector del cual obtendremos
//el value seleccionado por el usuario
const selectorType = document.getElementById("filterType");
//Le agregamos un evento tipo "change", esto significa que cada vez que el elemento de 
//id "filterType" cambie de value, se ejecutará la función showByType
selectorType.addEventListener("change", showByType);

function showByType()
{
  //Le entregamos a la variable selectedType el valor que ha sido seleccionado desde el html

  let selectedType = selectorType.options[selectorType.selectedIndex].value;
  //Aquí decimos que en filterResult, se almacenará el resultado de la ejecución de la 
  //función filterType. En este momento ya se encuentran todos los personajes que cumplen
  //con el criterio de filtrado
  let types= filterTypes(randm, selectedType);
  //Como la primera acción del DOM dentro de la web es mostrar todos los elementos de 
  //rickandmorty.js en vista tarjetas dentro de un div, le indicamos a este que se vacíe para
  //recibir dentro de él los resultados del filtrado
  types.document.getElementById("filterTypes").innerHTML="";
}

  //Ahora como tenemos los resultados en una variable, deberemos recorrer uno a uno los pokemons
  //para mostrarlos, del mismo modo que en el primer for donde mostramos todos los pokemons.
  //La diferencia es que en vez de referirnos a pokemon.type,.name,.etc nos referiremos a 
  //filterResult.name filterResult.img filterResult.number filterResult.type
  for(let i=0; i<filterType.length; i++){
    console.log(filterType);
      //Div de clase columna, cada tarjeta corresponderá a una columna dentro de la fila
      //let columnFile = document.createElement("div");
      //columnFile.className = "column";
 
}