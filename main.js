'use strict';

const playButton = document.querySelector('.js-button');

function highlightCircle(position) {
  let highlightedCircle = document.querySelectorAll('.js-circle')[position];
  highlightedCircle.classList.add('js-highlighted-circle');
}

playButton.addEventListener('click', () => highlightCircle(0));
