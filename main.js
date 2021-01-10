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

const buttonContainer = document.querySelector('.js-container-button');
const playButton = document.createElement('button');
playButton.classList.add('button', 'js-button');
playButton.appendChild(document.createTextNode('Play'));
playButton.addEventListener('click', handlePlayButton);
buttonContainer.appendChild(playButton);

const circlesContainer = document.querySelector('.container__circles');

let circle = document.createElement('div');
circle.classList.add('circle', 'red__circle', 'js-circle');
circle.addEventListener('click', handleSelectedCircle);
circlesContainer.appendChild(circle);

circle = document.createElement('div');
circle.classList.add('circle', 'yellow__circle', 'js-circle');
circle.addEventListener('click', handleSelectedCircle);
circlesContainer.appendChild(circle);

circle = document.createElement('div');
circle.classList.add('circle', 'green__circle', 'js-circle');
circle.addEventListener('click', handleSelectedCircle);
circlesContainer.appendChild(circle);

circle = document.createElement('div');
circle.classList.add('circle', 'blue__circle', 'js-circle');
circle.addEventListener('click', handleSelectedCircle);
circlesContainer.appendChild(circle);

let circles = document.querySelectorAll('.js-circle');
