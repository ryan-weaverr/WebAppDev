let sum = 0;
let isMoving = false;

const colorList = document.getElementById('colorList');
const makeButton = document.getElementById('makeButton');
const moveButton = document.getElementById('moveButton');
const viewingArea = document.getElementById('viewingArea');
const total = document.getElementById('total');

makeButton.addEventListener('click', createButton);
moveButton.addEventListener('click', toggleButtonMovement);

function createButton() {
  const color = colorList.value;
  const button = document.createElement('button');
  const randomX = Math.floor(Math.random() * (viewingArea.offsetWidth - 50));
  const randomY = Math.floor(Math.random() * (viewingArea.offsetHeight - 50));
  const randomNum = Math.floor(Math.random() * 99) + 1;

  button.classList.add('button');
  button.style.backgroundColor = color;
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
  button.innerText = randomNum;
  button.addEventListener('click', () => changeButtonColor(button, color));
  button.addEventListener('click', () => updateTotal(randomNum));

  if(color == 'white' || color == 'yellow'){
    button.style.color = 'black'; 
  }

  viewingArea.appendChild(button);
}

function changeButtonColor(button, color) {
  button.style.backgroundColor = color;
}

function updateTotal(randomNum) {
  sum += randomNum;
  total.innerText = `Total: ${sum}`;
}

function toggleButtonMovement() {
  const buttons = document.getElementsByClassName('button');
  isMoving = !isMoving;

  if(isMoving) {
    moveButton.innerText = 'Pause';
    moveButtons(buttons);
  } 
  else {
    moveButton.innerText = 'Move';
    stopButtonMovement(buttons);
  }
}

function moveButtons(buttons) {
  for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    moveButtonInRandomDirection(button);
  }
}

function stopButtonMovement(buttons) {
  for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    clearTimeout(button.timeout);
  }
}

function moveButtonInRandomDirection(button) {
  const maxWidth = viewingArea.offsetWidth - button.offsetWidth;
  const maxHeight = viewingArea.offsetHeight - button.offsetHeight;
  let directionX = Math.random() < 0.5 ? -1 : 1;
  let directionY = Math.random() < 0.5 ? -1 : 1;

  button.timeout = setInterval(() => {
    const currentLeft = parseInt(button.style.left);
    const currentTop = parseInt(button.style.top);

    let newLeft = currentLeft + directionX;
    let newTop = currentTop + directionY;

    if(newLeft <= 0 || newLeft >= maxWidth) {
      directionX *= -1;
      newLeft += directionX;
    }

    if(newTop <= 0 || newTop >= maxHeight) {
      directionY *= -1;
      newTop += directionY;
    }

    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  }, 10);
}