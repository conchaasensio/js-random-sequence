'use strict';

const playButton = document.querySelector('.js-button');
let circles = document.querySelectorAll('.js-circle');
let sequence = [];
let nextSequenceIndex = 0;

function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
}

function playRound() {
  nextSequenceIndex = 0;
  const highlightedCircle = Math.floor(Math.random() * 4);
  sequence.push(highlightedCircle);
  highlightSequence();
}

function handleSelectedCircle(event) {
  let selectedCircle = event.currentTarget;
  const hasSelectedTheRightCircle =
    selectedCircle === circles[sequence[nextSequenceIndex]];
  if (hasSelectedTheRightCircle) {
    nextSequenceIndex++;
    if (nextSequenceIndex === sequence.length) {
      playRound();
    }
  } else {
    alert('Te has equivocado');
    sequence = [];
  }
}

playButton.addEventListener('click', playRound);
circles.forEach((circle) =>
  circle.addEventListener('click', handleSelectedCircle)
);

function highlightSequence() {
  for (let i = 0; i < sequence.length; i++) {
    const position = sequence[i];
    setTimeout(() => highlightCircle(position), (i + 1) * 1000);
    setTimeout(clearHighlightedCircles, (i + 1) * 1000 + 800);
  }
}
