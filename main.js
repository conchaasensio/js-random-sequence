'use strict';

const playButton = document.querySelector('.js-button');

function highlightCircle() {
  let highlightedCircle = document.querySelector('.js-circle');
  highlightedCircle.classList.add('js-highlighted-circle');
}

playButton.addEventListener('click', highlightCircle);
