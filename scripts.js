let slider = document.createElement('input');         //Create an input element
slider.classList.add('slider');
slider.type = 'range';                                //Make it a slider(range)
slider.min = '1';                                     //Set the minimum, maximum, and initial values
slider.max = '64';
slider.value = '24';
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

const controlsContainer = document.querySelector('.controls-container');    //Gets the the modes-container and appends the slider and the slider text
controlsContainer.appendChild(slider);
controlsContainer.appendChild(sliderValue);
const gridContainer = document.querySelector('.grid');    //Select the grid

//Function that creates the grid of divs.
function createGrid(num){
  for(let i=0; i<num; i++){        // First for loop creates the rows of divs
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    for(let j=0; j<num; j++){      //Second for loop creates the columns of divs
      const divCol = document.createElement('div');
      divCol.classList.add('divCol');
      gridContainer.appendChild(divCol);
      divCol.addEventListener('mouseover', () =>{   //Event listener to make the divs change color when the mouse is hovered over them depending on the Mode that is selected
        if(eraserToggle == true){
          divCol.style.backgroundColor = 'white';
        }else if(rainbowToggle == true){
          divCol.style.backgroundColor = generateRandomRGB();
        }else{
          divCol.style.backgroundColor = colorChoice;
        }
      })
    }
    gridContainer.appendChild(divRow);
  }
}

let colorChoice = 'black';                    
const colorPicker = document.querySelector('.color-picker');                    //Event listener to use the color the user picks to draw on the grid
colorPicker.addEventListener('input', () => {
  colorChoice = colorPicker.value;
});

createGrid(slider.value); //Call the function so that the grid appears when the page is loaded

const toggleGridButton = document.createElement('button');   //Create the Toggle Grid button and add the event listener to toggle the grid
toggleGridButton.innerHTML = "Toggle Grid";
toggleGridButton.classList.add('toggleGridButton');
toggleGridButton.classList.add('is-on');
controlsContainer.appendChild(toggleGridButton);
toggleGridButton.addEventListener('click', ()=> {           //Event listener to toggle the grid on or off on clicking the button
  if(toggleGridButton.classList.contains('is-on')){
    toggleGridButton.classList.remove('is-on');
  }else{
    toggleGridButton.classList.add('is-on');
  }
  const gridToggle = document.querySelectorAll('.divCol');
  gridToggle.forEach((div) => {
    if(div.style.border == 'none'){
      div.style.border = '1px solid #6e6969';
    }else{
      div.style.border = 'none';
    }
  });
});

let eraserToggle = false;                                        //Boolean to determine if Eraser is ON or OFF
const toggleEraserButton = document.createElement('button');   //Create the Toggle Eraser button and add the 
toggleEraserButton.innerHTML = "Toggle Eraser";
toggleEraserButton.classList.add('toggleEraserButton');
controlsContainer.appendChild(toggleEraserButton);
toggleEraserButton.addEventListener('click', ()=> {            //On click swap the state of eraserToggle
  if(toggleEraserButton.classList.contains('is-on')){
    toggleEraserButton.classList.remove('is-on');
  }else{
    toggleEraserButton.classList.add('is-on');
  }
  if(eraserToggle == false){
    eraserToggle = true;
  }else{
    eraserToggle = false;
  }
});

function clearGrid(){     //Function that clears the grid.
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

const clearGridButton = document.createElement('button');   //Create the Clear Grid button and add the event listener to clear the grid on click
clearGridButton.innerHTML = "Clear Grid";
clearGridButton.classList.add('clearGridButton');
controlsContainer.appendChild(clearGridButton);
clearGridButton.addEventListener('click', ()=> {
  clearGrid();
  createGrid(slider.value);
});

let rainbowToggle = false;
const toggleRainbowButton = document.createElement('button');   //Create the Toggle Rainbow Mode button and add the event listener to toggle it on and off
toggleRainbowButton.innerHTML = "Rainbow Mode";
toggleRainbowButton.classList.add('toggleRainbowButton');
controlsContainer.appendChild(toggleRainbowButton);
toggleRainbowButton.addEventListener('click', () =>{
  if(toggleRainbowButton.classList.contains('is-on')){
    toggleRainbowButton.classList.remove('is-on');
  }else{
    toggleRainbowButton.classList.add('is-on');
  }
  if(rainbowToggle == false){
    rainbowToggle = true;
  }else{
    rainbowToggle = false;
  }
});

function generateRandomRGB(){                                 //Generates a random RGB value for the Rainbow Mode
  let r = Math.floor(Math.random() *256);
  let g = Math.floor(Math.random() *256);
  let b = Math.floor(Math.random() *256);
  return `rgb(${r}, ${g}, ${b})`;
};