let numberOfDivs = 32; // Set the number of rows and columns
const container = document.querySelector('.container'); //Select the container
document.documentElement.style.setProperty('--num-divs', numberOfDivs); //Update the number of divs variable in CSS.

//Function that creates the grid of divs.
function createGrid(num){
  for(let i=0; i<num; i++){
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    for(let j=0; j<num; j++){
      const divCol = document.createElement('div');
      divCol.classList.add('divCol');
      container.appendChild(divCol);
      divCol.addEventListener('mouseover', () =>{   //Event listener to make the divs change color when the mouse is hovered over them
        divCol.style.backgroundColor = 'grey';
      })
    }
    container.appendChild(divRow);
  }
}

createGrid(numberOfDivs); //Call the function to create the grid base on the number of rows and columns

