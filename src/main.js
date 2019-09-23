//Data global de data y aquí creamos la variable 
//que almacenará a sus personajes respectivamente
const data = RICKANDMORTY.results;

const showAll= document.getElementById("filterType");
showAll.addEventListener("change", () =>  {

  let selectValue= showAll.value;

if(selectValue === "Characters")  {
  for(let i=0; i<data.length;i++) {
   

  //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
  let allCharacters = document.createElement("div");
  //id creado <div id="chip"></div>
  allCharacters.id = "allCharacters";
  allCharacters.className="tarjeta";

let characterName = document.createElement("h4");
  //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "name"=""
  characterName.textContent = data[i].name;

//Creamos el elemento img que conteneŕa la imagen de cada personaje
let characterPhoto = document.createElement("img");
//Le decimos que en este elemento HTML su source(src="") será lo que contiene
//el elemento img:'' dentro de la data, según sea el índice.
//En rickandmorty.js "img"=""
characterPhoto.src = data[i].img;

let characterSpecies = document.createElement("h3");
//Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "species"=""
characterSpecies.textContent = data[i].species;

let characterStatus = document.createElement("h5");
//Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
  //para asignarle su contenido
  //En rickandmorty.js "status"=""
characterStatus.textContent = data[i].status;

  allCharacters.appendChild(characterName);
  allCharacters.appendChild(characterPhoto);
  allCharacters.appendChild(characterSpecies);
  allCharacters.appendChild(characterStatus);
  document.getElementById("list").appendChild(allCharacters).innerHTML;
  }
}

else if ( selectValue === "Alive")  {
document.getElementById("list").innerHTML="";
  let result = window.filterStatus(data,selectValue);
  console.log(result);

  for(let i=0; i<result.length;i++) {
   
    let allCharacters = document.createElement("div");
    allCharacters.id = "allCharacters";
    allCharacters.className="tarjeta";
  
  let characterName = document.createElement("h4");
    characterName.textContent = result[i].name;
  
  let characterPhoto = document.createElement("img");
  characterPhoto.src = result[i].img;
  
  let characterSpecies = document.createElement("h3");
  characterSpecies.textContent = result[i].species;
  
  let characterStatus = document.createElement("h5");
  characterStatus.textContent = result[i].status;
  
    allCharacters.appendChild(characterName);
    allCharacters.appendChild(characterPhoto);
    allCharacters.appendChild(characterSpecies);
    allCharacters.appendChild(characterStatus);
    document.getElementById("list").appendChild(allCharacters).innerHTML;
    }


}

else if ( selectValue === "Dead")  {
  document.getElementById("list").innerHTML="";
    let result = window.filterStatus(data,selectValue);
    console.log(result);
  
    for(let i=0; i<result.length;i++) {
     
  
      //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
      let allCharacters = document.createElement("div");
      //id creado <div id="chip"></div>
      allCharacters.id = "allCharacters";
      allCharacters.className="tarjeta";
    
    let characterName = document.createElement("h4");
      //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
      //para asignarle su contenido
      //En rickandmorty.js "name"=""
      characterName.textContent = result[i].name;
    
    //Creamos el elemento img que conteneŕa la imagen de cada personaje
    let characterPhoto = document.createElement("img");
    //Le decimos que en este elemento HTML su source(src="") será lo que contiene
    //el elemento img:'' dentro de la data, según sea el índice.
    //En rickandmorty.js "img"=""
    characterPhoto.src = result[i].img;
    
    let characterSpecies = document.createElement("h3");
    //Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
      //para asignarle su contenido
      //En rickandmorty.js "species"=""
    characterSpecies.textContent = result[i].species;
    
    let characterStatus = document.createElement("h5");
    //Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
      //para asignarle su contenido
      //En rickandmorty.js "status"=""
    characterStatus.textContent = result[i].status;
    
      allCharacters.appendChild(characterName);
      allCharacters.appendChild(characterPhoto);
      allCharacters.appendChild(characterSpecies);
      allCharacters.appendChild(characterStatus);
      document.getElementById("list").appendChild(allCharacters).innerHTML;
      }
  
  
  }
 
  else if ( selectValue === "Male")  {
    document.getElementById("list").innerHTML="";
      let result = window.filterGender(data,selectValue);
      console.log(result);
    
      for(let i=0; i<result.length;i++) {
       
    
        //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
        let allCharacters = document.createElement("div");
        //id creado <div id="chip"></div>
        allCharacters.id = "allCharacters";
        allCharacters.className="tarjeta";
      
      let characterName = document.createElement("h4");
        //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
        //para asignarle su contenido
        //En rickandmorty.js "name"=""
        characterName.textContent = result[i].name;
      
      //Creamos el elemento img que conteneŕa la imagen de cada personaje
      let characterPhoto = document.createElement("img");
      //Le decimos que en este elemento HTML su source(src="") será lo que contiene
      //el elemento img:'' dentro de la data, según sea el índice.
      //En rickandmorty.js "img"=""
      characterPhoto.src = result[i].img;
      

      let characterGender = document.createElement("h3");
      characterGender.textContent = result[i].gender;

      let characterSpecies = document.createElement("h3");
      //Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
        //para asignarle su contenido
        //En rickandmorty.js "species"=""
      characterSpecies.textContent = result[i].species;
      
      let characterStatus = document.createElement("h5");
      //Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
        //para asignarle su contenido
        //En rickandmorty.js "status"=""
      characterStatus.textContent = result[i].status;
      
        allCharacters.appendChild(characterName);
        allCharacters.appendChild(characterPhoto);
        allCharacters.appendChild(characterGender);
        allCharacters.appendChild(characterSpecies);
        allCharacters.appendChild(characterStatus);
        document.getElementById("list").appendChild(allCharacters).innerHTML;
        }
    
    
    }  

    else if ( selectValue === "Female")  {
      document.getElementById("list").innerHTML="";
        let result = window.filterGender(data,selectValue);
        console.log(result);
      
        for(let i=0; i<result.length;i++) {
         
      
          //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
          let allCharacters = document.createElement("div");
          //id creado <div id="chip"></div>
          allCharacters.id = "allCharacters";
          allCharacters.className="tarjeta";
        
        let characterName = document.createElement("h4");
          //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
          //para asignarle su contenido
          //En rickandmorty.js "name"=""
          characterName.textContent = result[i].name;
        
        //Creamos el elemento img que conteneŕa la imagen de cada personaje
        let characterPhoto = document.createElement("img");
        //Le decimos que en este elemento HTML su source(src="") será lo que contiene
        //el elemento img:'' dentro de la data, según sea el índice.
        //En rickandmorty.js "img"=""
        characterPhoto.src = result[i].img;
        
  
        let characterGender = document.createElement("h3");
        characterGender.textContent = result[i].gender;
  
        let characterSpecies = document.createElement("h3");
        //Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
          //para asignarle su contenido
          //En rickandmorty.js "species"=""
        characterSpecies.textContent = result[i].species;
        
        let characterStatus = document.createElement("h5");
        //Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
          //para asignarle su contenido
          //En rickandmorty.js "status"=""
        characterStatus.textContent = result[i].status;
        
          allCharacters.appendChild(characterName);
          allCharacters.appendChild(characterPhoto);
          allCharacters.appendChild(characterGender);
          allCharacters.appendChild(characterSpecies);
          allCharacters.appendChild(characterStatus);
          document.getElementById("list").appendChild(allCharacters).innerHTML;
          }
      
      
      }  


      else if ( selectValue === "Human")  {
        document.getElementById("list").innerHTML="";
          let result = window.filterSpecies(data,selectValue);
          console.log(result);
        
          for(let i=0; i<result.length;i++) {
           
        
            //Le indicamos que cree un elemento div en nuestro HTML que contendrá toda la info
            let allCharacters = document.createElement("div");
            //id creado <div id="chip"></div>
            allCharacters.id = "allCharacters";
            allCharacters.className="tarjeta";
          
          let characterName = document.createElement("h4");
            //Para rellenar el elemento h4, al ser una etiqueta de texto utilizamos textContent 
            //para asignarle su contenido
            //En rickandmorty.js "name"=""
            characterName.textContent = result[i].name;
          
          //Creamos el elemento img que conteneŕa la imagen de cada personaje
          let characterPhoto = document.createElement("img");
          //Le decimos que en este elemento HTML su source(src="") será lo que contiene
          //el elemento img:'' dentro de la data, según sea el índice.
          //En rickandmorty.js "img"=""
          characterPhoto.src = result[i].img;
          
    
          let characterGender = document.createElement("h3");
          characterGender.textContent = result[i].gender;
    
          let characterSpecies = document.createElement("h3");
          //Para rellenar el elemento h3, al ser una etiqueta de texto utilizamos textContent 
            //para asignarle su contenido
            //En rickandmorty.js "species"=""
          characterSpecies.textContent = result[i].species;
          
          let characterStatus = document.createElement("h5");
          //Para rellenar el elemento h5, al ser una etiqueta de texto utilizamos textContent 
            //para asignarle su contenido
            //En rickandmorty.js "status"=""
          characterStatus.textContent = result[i].status;
          
            allCharacters.appendChild(characterName);
            allCharacters.appendChild(characterPhoto);
            allCharacters.appendChild(characterGender);
            allCharacters.appendChild(characterSpecies);
            allCharacters.appendChild(characterStatus);
            document.getElementById("list").appendChild(allCharacters).innerHTML;
            }
        
        
        }  

        else if ( selectValue === "Alien")  {
          document.getElementById("list").innerHTML="";
            let result = window.filterSpecies(data,selectValue);
            console.log(result);
          
            for(let i=0; i<result.length;i++) {
            
              let allCharacters = document.createElement("div");
      
              allCharacters.id = "allCharacters";
              allCharacters.className="tarjeta";
            
            let characterName = document.createElement("h4");
             
              characterName.textContent = result[i].name;
            
  
            let characterPhoto = document.createElement("img");
         
            characterPhoto.src = result[i].img;
            
      
            let characterGender = document.createElement("h3");
            characterGender.textContent = result[i].gender;
      
            let characterSpecies = document.createElement("h3");
          
            characterSpecies.textContent = result[i].species;
            
            let characterStatus = document.createElement("h5");
        
            characterStatus.textContent = result[i].status;
            
              allCharacters.appendChild(characterName);
              allCharacters.appendChild(characterPhoto);
              allCharacters.appendChild(characterGender);
              allCharacters.appendChild(characterSpecies);
              allCharacters.appendChild(characterStatus);
              document.getElementById("list").appendChild(allCharacters).innerHTML;
              }
          
          
          }  

          


})

const showSort= document.getElementById("containerAlphabet");
          showSort.addEventListener("change", () =>  {
            document.getElementById("list").innerHTML="";
            let result= window.orderSort=orderSort;
            let selectValue= showSort.value;
            
            result = window.orderSort(data, selectValue) 
            for(let i=0; i<result.length;i++) {

            let allCharacters = document.createElement("div");
      
              allCharacters.id = "allCharacters";
              allCharacters.className="tarjeta";
            
            let characterName = document.createElement("h4");
             
              characterName.textContent = result[i].name;
            
  
            let characterPhoto = document.createElement("img");
         
            characterPhoto.src = result[i].img;
            
      
            let characterGender = document.createElement("h3");
            characterGender.textContent = result[i].gender;
      
            let characterSpecies = document.createElement("h3");
          
            characterSpecies.textContent = result[i].species;
            
            let characterStatus = document.createElement("h5");
        
            characterStatus.textContent = result[i].status;
            
              allCharacters.appendChild(characterName);
              allCharacters.appendChild(characterPhoto);
              allCharacters.appendChild(characterGender);
              allCharacters.appendChild(characterSpecies);
              allCharacters.appendChild(characterStatus);
              document.getElementById("list").appendChild(allCharacters).innerHTML;
              }
          
          
        
            
            });
           
          

            