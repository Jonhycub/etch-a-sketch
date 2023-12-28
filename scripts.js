let numberOfDivs = Number(prompt("How many rows?"));
const container = document.querySelector('.container');


function createDiv(num){
  for(let i=0; i<numberOfDivs; i++){
    const divRow = document.createElement('div');
    divRow.classList.add('divRow');
    container.appendChild(divRow);
  }
}

// createDiv(numberOfDivs);

for(let i=0; i<numberOfDivs; i++){
  createDiv(numberOfDivs);
}
