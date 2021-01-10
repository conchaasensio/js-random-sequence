'use strict';

let sequence = [];
let nextSequenceIndex = 0;
const maxNumberOfRounds = 5;

function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
}

function handlePlayButton() {
  sequence = [];
  playNextRound();
}

function playNextRound() {
  nextSequenceIndex = 0;
  const nextHighlightedCircle = Math.floor(Math.random() * circles.length);
  sequence.push(nextHighlightedCircle);
  highlightSequence();
}

function handleSelectedCircle(event) {
  if (isNotStartedGame()) {
    return;
  }
  let selectedCircle = event.currentTarget;
  const expectedNextSequence = sequence[nextSequenceIndex];
  const hasSelectedTheRightCircle =
    selectedCircle === circles[expectedNextSequence];
  if (hasSelectedTheRightCircle) {
    nextSequenceIndex++;

    if (nextSequenceIndex === sequence.length) {
      if (nextSequenceIndex === maxNumberOfRounds) {
        alert('Has ganado');
        sequence = [];
      } else {
        playNextRound();
      }
    }
  } else {
    alert('Te has equivocado');
    sequence = [];
  }
}

function isNotStartedGame() {
  return sequence.length === 0;
}

function highlightSequence() {
  for (let i = 0; i < sequence.length; i++) {
    const position = sequence[i];
    setTimeout(() => highlightCircle(position), (i + 1) * 1000);
    setTimeout(clearHighlightedCircles, (i + 1) * 1000 + 800);
  }
}

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const containerCircles = document.createElement('div');
containerCircles.classList.add('container__circles');
container.appendChild(containerCircles);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('container__button', 'js-container-button');
container.appendChild(buttonContainer);

const playButton = document.createElement('button');
playButton.classList.add('button', 'js-button');
playButton.appendChild(document.createTextNode('Play'));
playButton.addEventListener('click', handlePlayButton);
buttonContainer.appendChild(playButton);

const circlesContainer = document.querySelector('.container__circles');

function createCircle(color) {
  let circle = document.createElement('div');
  circle.classList.add('circle', color + '__circle', 'js-circle');
  circle.addEventListener('click', handleSelectedCircle);
  circlesContainer.appendChild(circle);
}

['red', 'yellow', 'green', 'blue'].forEach(createCircle);

let circles = document.querySelectorAll('.js-circle');
