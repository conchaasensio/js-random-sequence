'use strict';

const playButton = document.querySelector('.js-button');

let circles = document.querySelectorAll('.js-circle');
function highlightCircle(position) {
  circles[position].classList.add('js-highlighted-circle');
}

function clearHighlightedCircles() {
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
}

function handleHighlightCircle() {
  clearHighlightedCircles();
  highlightCircle(Math.floor(Math.random() * 4));
}

playButton.addEventListener('click', handleHighlightCircle);
