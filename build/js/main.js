(function () {

  // ------------ main navigation menu------------------------

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.remove('main-nav--opened');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--opened');
  });

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

// ---------------modal log in-----------------------

const login = document.querySelector('.main-nav__login');
const  modalLogin = document.querySelector('.modal__login');
const overlay = document.querySelector('.page-body__overlay');
const pageBody = document.querySelector('.page-body');
const modalLoginClose = document.querySelector('.modal__close');
const emailInput = document.getElementById('your_email');

var isStorageSupport = true;

try {
  storage = localStorage.getItem('your_email');
} catch (err) {
  isStorageSupport = false;
}

login.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('page-body__overlay--view');
  modalLogin.classList.add('modal__login--opened');
  emailInput.focus();
  if (modalLogin.classList.contains('modal--opened')) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }
});

const modalCloseHandler =(evt) => {
  evt.preventDefault();
  overlay.classList.remove('page-body__overlay--view');
  modalLogin.classList.remove('modal__login--opened');
  pageBody.style.overflow = "auto";
}

modalLoginClose.addEventListener('click', modalCloseHandler);
overlay.addEventListener('click', modalCloseHandler);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains('modal__login--opened')) {
      evt.preventDefault();
      modalLogin.classList.remove('modal__login--opened');
      overlay.classList.remove('page-body__overlay--view');
      pageBody.style.overflow = "auto";
    }
  }
});


// -------------------Swiper-----------------------

const swiper = new Swiper('.swiper', {

  breakpoints: {
        320: {
                slidesPerView: 2,
                // spaceBetween: 30
              },
        1024: {
          slidesPerView: 4,
          // spaceBetween: 30
        }
      },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  navigation: {
    nextEl: '.new__button--left',
    prevEl: '.new__button--right',
  },
});


})();


