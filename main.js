'use strict';

const playButton = document.querySelector('.js-button');
let circles = document.querySelectorAll('.js-circle');
let sequence = [];

function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
}

function handlePlayButton() {
  const highlightedCircle = Math.floor(Math.random() * 4);
  highlightCircle(highlightedCircle);
  sequence.push(highlightedCircle);
  setTimeout(clearHighlightedCircles, 1000);
}

function handleSelectedCircle(event) {
  let selectedCircle = event.currentTarget;
  if (selectedCircle === circles[sequence[0]]) {
    alert('Has acertado');
  } else {
    alert('Te has equivocado');
  }
}

playButton.addEventListener('click', handlePlayButton);
circles.forEach((circle) =>
  circle.addEventListener('click', handleSelectedCircle)
);
