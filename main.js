'use strict';

const playButton = document.querySelector('.js-button');

function highlightCircle(position) {
  let highlightedCircle = document.querySelectorAll('.js-circle')[position];
  highlightedCircle.classList.add('js-highlighted-circle');
}

function handleHighlightCircle() {
  highlightCircle(Math.floor(Math.random() * 4));
}

playButton.addEventListener('click', handleHighlightCircle);
