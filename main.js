'use strict';

const playButton = document.querySelector('.js-button');
let circles = document.querySelectorAll('.js-circle');
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

playButton.addEventListener('click', handlePlayButton);
circles.forEach((circle) =>
  circle.addEventListener('click', handleSelectedCircle)
);

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
