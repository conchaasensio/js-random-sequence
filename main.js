'use strict';

let sequence = [];
let nextSequenceIndex = 0;

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

function highlightSequence() {
  for (let i = 0; i < sequence.length; i++) {
    const position = sequence[i];
    setTimeout(() => highlightCircle(position), (i + 1) * 1000);
    setTimeout(clearHighlightedCircles, (i + 1) * 1000 + 800);
  }
}

function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
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
      playNextRound();
    }
  } else {
    alert('Te has equivocado :(');
    sequence = [];
  }
}

function isNotStartedGame() {
  return sequence.length === 0;
}

//DOM
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const circlesContainer = document.createElement('div');
circlesContainer.classList.add('container__circles');
circlesContainer.dataset.testid = 'circles-container';

container.appendChild(circlesContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('container__button', 'js-container-button');
container.appendChild(buttonContainer);

const playButton = document.createElement('button');
playButton.classList.add('button', 'js-button');
playButton.appendChild(document.createTextNode('Play'));
playButton.addEventListener('click', handlePlayButton);
buttonContainer.appendChild(playButton);

function createCircle(color) {
  let circle = document.createElement('div');
  circle.classList.add('circle', color + '__circle', 'js-circle');
  circle.addEventListener('click', handleSelectedCircle);
  circlesContainer.appendChild(circle);
}

['red', 'yellow', 'green', 'blue'].forEach(createCircle);

let circles = document.querySelectorAll('.js-circle');
