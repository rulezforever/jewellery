(function () {

  // ------------ main navigation menu------------------------

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--opened');
  });

  // ------------ faq menu------------------------

  // ------------mobile menu---------------

const itemFirst = document.querySelector('.faq__item--first');
const questionFirst = document.querySelector('.faq__question-block--first');
const itemSecond = document.querySelector('.faq__item--second');
const questionSecond = document.querySelector('.faq__question-block--second');
const itemThird = document.querySelector('.faq__item--third');
const questionThird = document.querySelector('.faq__question-block--third');
const itemFourth = document.querySelector('.faq__item--fourth');
const questionFourth = document.querySelector('.faq__question-block--fourth');


itemFirst.classList.remove('faq__item--opened');
itemFirst.classList.remove('faq__item--nojs');
itemSecond.classList.remove('faq__item--opened');
itemSecond.classList.remove('faq__item--nojs');
itemThird.classList.remove('faq__item--opened');
itemThird.classList.remove('faq__item--nojs');
itemFourth.classList.remove('faq__item--opened');
itemFourth.classList.remove('faq__item--nojs');

questionFirst.addEventListener('click', function() {
  itemFirst.classList.toggle('faq__item--opened');
  itemFirst.classList.toggle('faq__item--nojs');
});

questionSecond.addEventListener('click', function() {
  itemSecond.classList.toggle('faq__item--opened');
  itemSecond.classList.toggle('faq__item--nojs');
});

questionThird.addEventListener('click', function() {
  itemThird.classList.toggle('faq__item--opened');
  itemThird.classList.toggle('faq__item--nojs');
});

questionFourth.addEventListener('click', function() {
  itemFourth.classList.toggle('faq__item--opened');
  itemFourth.classList.toggle('faq__item--nojs');
});



})();


// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }
// })
