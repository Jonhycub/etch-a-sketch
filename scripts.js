let slider = document.createElement('input');         //Create an input element
slider.type = 'range';                                //Make it a slider(range)
slider.min = '1';                                     //Set the minimum, maximum, and initial values
slider.max = '32';
slider.value = '16';
const sliderValue = document.createElement('p');
sliderValue.classList.add('grid-size-text');
sliderValue.innerText = "Grid Size: " + slider.value + 'x' + slider.value;

slider.addEventListener('input', function() {         // Add an event listener to update the grid size when the slider value changes
  let gridSize = this.value;
  document.documentElement.style.setProperty('--grid-size', gridSize);     //Update the grid-size variable in CSS.
  sliderValue.innerText = "Grid Size: " + slider.value + 'x' + slider.value;
  clearGrid();
  createGrid(gridSize);
});

const modesContainer = document.querySelector('.modes-container');    //Gets the the modes-container and appends the slider and the slider text
modesContainer.appendChild(slider);
modesContainer.appendChild(sliderValue);

const gridContainer = document.querySelector('.grid-container');    //Select the grid-container

//Function that creates the grid of divs.
function createGrid(num){
  for(let i=0; i<num; i++){        // First for loop creates the rows of divs
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    for(let j=0; j<num; j++){      //Second for loop creates the columns of divs
      const divCol = document.createElement('div');
      divCol.classList.add('divCol');
      gridContainer.appendChild(divCol);
      divCol.addEventListener('mouseover', () =>{   //Event listener to make the divs change color when the mouse is hovered over them
        divCol.style.backgroundColor = 'grey';
      })
    }
    gridContainer.appendChild(divRow);
  }
}

createGrid(slider.value); //Call the function so that the grid appears when the page is loaded


function clearGrid(){     //Function that clears the grid.
  gridContainer.innerHTML = "";
}

const clearGridButton = document.createElement('button');   //Create the Clear Grid button and add the event listener to clear the grid on click
clearGridButton.innerHTML = "Clear Grid";
clearGridButton.classList.add('clearGridButton');
modesContainer.appendChild(clearGridButton);
clearGridButton.addEventListener('click', ()=> {
  clearGrid();
  createGrid(slider.value);
});
