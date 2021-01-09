'use strict';

const playButton = document.querySelector('.js-button');
let circles = document.querySelectorAll('.js-circle');

function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
}

let highlightedCircle;
function handlePlayButton() {
  highlightedCircle = Math.floor(Math.random() * 4);
  highlightCircle(highlightedCircle);
  setTimeout(clearHighlightedCircles, 1000);
}

function handleSelectedCircle(event) {
  let element = event.currentTarget;
  if (element === circles[highlightedCircle]) {
    alert('Has acertado');
  } else {
    alert('Te has equivocado');
  }
}

playButton.addEventListener('click', handlePlayButton);
circles.forEach((circle) =>
  circle.addEventListener('click', handleSelectedCircle)
);
