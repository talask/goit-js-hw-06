function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener("click", fnCreateDiv);
btnDestroy.addEventListener("click", destroyBoxes);

// 1 variant divs add and div#boxes clear before add

//

// function destroyBoxes() {
//   divBoxes.innerHTML = '';
// }


// function fnCreateDiv() {
//   destroyBoxes();
//   createBoxes(inputNumber.value);
// }

// function createBoxes(amount) {
//   let width = 30;
//   let height = 30;
//   const arrayDiv = [];
//   for(let i = 1; i <= amount; i +=1) {
//     const div = document.createElement('div');
//     div.style.width = `${width}px`;
//     div.style.height = `${height}px`;
//     div.style.backgroundColor = getRandomHexColor();
//     arrayDiv.push(div);
//     width += 10;
//     height += 10;
//   }
//   console.log(arrayDiv);
//   divBoxes.append(...arrayDiv);
// }

// 2 variant divs add until click destroy

let width = 30;
let height = 30;

function destroyBoxes() {
  divBoxes.innerHTML = '';
  width = height = 30;
}

function fnCreateDiv() {
  createBoxes(inputNumber.value);
}

function createBoxes(amount) {
  
  const arrayDiv = [];
  
  for(let i = 1; i <= amount; i +=1, width = height += 10) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrayDiv.push(div);
  }
  
  divBoxes.append(...arrayDiv);
}