let numberOfDivs = 16; // Set the number of rows and columns
const container = document.querySelector('.container'); //Select the container
document.documentElement.style.setProperty('--num-divs', numberOfDivs); //Update the number of divs variable in CSS.


function createDiv(num){
  for(let i=0; i<num; i++){
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    for(let j=0; j<num; j++){
      const divCol = document.createElement('div');
      divCol.classList.add('divCol');
      container.appendChild(divCol);
    }
    container.appendChild(divRow);
  }
}

createDiv(numberOfDivs);

