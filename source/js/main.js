'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.burger');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    var handler = function () {
      alert(1);
      navMain.style.display = 'block';
      navMain.removeEventListener('transitionend', handler);
    };
    navMain.classList.remove('main-nav--closed');

    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('burger--close');


    navMain.addEventListener('transitionend', handler);
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('burger--close');
  }
});
//for example
window.onscroll = function () {
  var wScroll = window.pageYOffset;

  console.log(wScroll);
}
