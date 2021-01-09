'use strict';

const playButton = document.querySelector('.js-button');

function highlightCircle(position) {
  let circles = document.querySelectorAll('.js-circle');
  circles.forEach((circle) => circle.classList.remove('js-highlighted-circle'));
  circles[position].classList.add('js-highlighted-circle');
}

function handleHighlightCircle() {
  highlightCircle(Math.floor(Math.random() * 4));
}

playButton.addEventListener('click', handleHighlightCircle);
