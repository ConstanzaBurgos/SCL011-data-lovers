const rymList = window.RICKANDMORTY;


 //Filtrar por Tipo
//Recibe dos parámetos: 1.La lista de personajes rym y 2. El 'type' escogido
const filterTypes = (rymList, selectedType) => {
    //.filter() crea un nuevo array compuesto por los elementos que cumplen
    //el criterio de búsqueda, en este caso crearía un arreglo de todos los personajes
    //que cumplan con el 'type' seleccionado.
    //trabajamos con 'Element' a modo genérico, en este caso el elemento será la variable
    //donde se encuentra la lista de butiizada  en el main.js
    const resultType = rymList.filter(Element => {
      //retornará todo elemento donde se encuentre dentro de su array de tipo 'type' según
      //sea el value seleccionado en el selectBox (html estático)
        return Element.type.includes(selectedType);
    });
    //retorna el valor de la función filtrar
    return resultType;
  
  }

  

