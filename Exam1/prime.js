//Christopher Weaver
//6/19/2023
//CPSC 3750
//program exam #1 
//Grade level: A

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generateLists(limit) {
  const primeList = [];
  const nonPrimeList = [];

  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) {
      primeList.push(i);
    } else {
      nonPrimeList.push(i);
    }
  }

  return [primeList, nonPrimeList];
}

function changeListColors() {
  const primeListDiv = document.getElementById('prime-list');
  const nonPrimeListDiv = document.getElementById('nonprime-list');

  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  primeListDiv.style.backgroundColor = randomColor;
  nonPrimeListDiv.style.backgroundColor = randomColor;
}

function calculateSum(list) {
  return list.reduce((sum, num) => sum + num, 0);
}

window.addEventListener('DOMContentLoaded', () => {
  const numberInput = document.getElementById('number-input');
  const startButton = document.getElementById('start-button');
  const primeListDiv = document.getElementById('prime-list');
  const nonPrimeListDiv = document.getElementById('nonprime-list');

  function startProgram() {
    const limit = parseInt(numberInput.value, 10);
    if (isNaN(limit) || limit < 1) {
      alert('Please enter a valid number.');
      return;
    }

    const [primeList, nonPrimeList] = generateLists(limit);

    primeListDiv.textContent = primeList.join(', ');
    nonPrimeListDiv.textContent = nonPrimeList.join(', ');

    const primeSumLine = document.createElement('p');
    primeSumLine.textContent = 'Sum: 0';
    primeListDiv.appendChild(primeSumLine);

    const nonPrimeSumLine = document.createElement('p');
    nonPrimeSumLine.textContent = 'Sum: 0';
    nonPrimeListDiv.appendChild(nonPrimeSumLine);

    const primeSumButton = document.createElement('button');
    primeSumButton.textContent = 'SUM';
    primeListDiv.appendChild(primeSumButton);

    const nonPrimeSumButton = document.createElement('button');
    nonPrimeSumButton.textContent = 'SUM';
    nonPrimeListDiv.appendChild(nonPrimeSumButton);

    primeSumButton.addEventListener('click', () => {
      const sum = calculateSum(primeList);
      primeSumLine.textContent = `Sum: ${sum}`;
    });

    nonPrimeSumButton.addEventListener('click', () => {
      const sum = calculateSum(nonPrimeList);
      nonPrimeSumLine.textContent = `Sum: ${sum}`;
    });

    setInterval(changeListColors, 5000);
  }

  startButton.addEventListener('click', startProgram);
});
