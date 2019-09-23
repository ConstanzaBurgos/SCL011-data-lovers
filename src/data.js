const dataR = RICKANDMORTY.results;

function filterStatus(dataR, selectValue) {

const filtrados = dataR.filter(Element => {

    return Element.status === selectValue;

})

return filtrados;

}

window.filterStatus=filterStatus;

function filterGender(dataR,selectValue)    {

    const genero = dataR.filter(Element =>  {   

    return Element.gender === selectValue;    
    })
  return genero;
}
window.filterGender=filterGender;

function filterSpecies(dataR,selectValue)    {

    const especie = dataR.filter(Element => {
    
        return Element.species === selectValue;
    })
    return especie;
}
window.filterSpecies=filterSpecies;

function orderSort (dataR,selectValue)   {

      let orderSelector="";

    if (selectValue === "Ascendent") {
        orderSelector = dataR.sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      }
      else {
        orderSelector = dataR.sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
      } return orderSelector;

} window.orderSort=orderSort;