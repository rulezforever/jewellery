(function () {

    // ------------ main navigation menu------------------------

    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--nojs');
    navMain.classList.remove('main-nav--opened');

    navToggle.addEventListener('click', function () {
      navMain.classList.toggle('main-nav--opened');
    });


const itemProduct = document.querySelector('.catalog__form-item--product');
const productSection = document.querySelector('.catalog__section--product');
const itemMaterial = document.querySelector('.catalog__form-item--material');
const materialSection = document.querySelector('.catalog__section--material');
const itemCollection = document.querySelector('.catalog__form-item--collection');
const collectionSection = document.querySelector('.catalog__section--collection');
const itemPrice = document.querySelector('.catalog__form-item--price');
const priceSection = document.querySelector('.catalog__section--price');


itemProduct.classList.remove('catalog__form-item--opened');
itemProduct.classList.remove('catalog__form-item--nojs');
itemMaterial.classList.remove('catalog__form-item--opened');
itemMaterial.classList.remove('catalog__form-item--nojs');
itemCollection.classList.remove('catalog__form-item--opened');
itemCollection.classList.remove('catalog__form-item--nojs');
itemPrice.classList.remove('catalog__form-item--opened');
itemPrice.classList.remove('catalog__form-item--nojs');

productSection.addEventListener('click', function() {
  itemProduct.classList.toggle('catalog__form-item--opened');
  itemProduct.classList.toggle('catalog__form-item--nojs');
});

materialSection.addEventListener('click', function() {
  itemMaterial.classList.toggle('catalog__form-item--opened');
  itemMaterial.classList.toggle('catalog__form-item--nojs');
});

collectionSection.addEventListener('click', function() {
  itemCollection.classList.toggle('catalog__form-item--opened');
  itemCollection.classList.toggle('catalog__form-item--nojs');
});

priceSection.addEventListener('click', function() {
  itemPrice.classList.toggle('catalog__form-item--opened');
  itemPrice.classList.toggle('catalog__form-item--nojs');
});

// --------modal form-------------

const modalDialog = document.querySelector('.modal-filter');
const modalitemProduct = modalDialog.querySelector('.catalog__form-item--product');
const modalproductSection = modalDialog.querySelector('.catalog__section--product');
const modalitemMaterial = modalDialog.querySelector('.catalog__form-item--material');
const modalmaterialSection = modalDialog.querySelector('.catalog__section--material');
const modalitemCollection = modalDialog.querySelector('.catalog__form-item--collection');
const modalcollectionSection = modalDialog.querySelector('.catalog__section--collection');
const modalitemPrice = modalDialog.querySelector('.catalog__form-item--price');
const modalpriceSection = modalDialog.querySelector('.catalog__section--price');


modalitemProduct.classList.remove('catalog__form-item--opened');
modalitemProduct.classList.remove('catalog__form-item--nojs');
modalitemMaterial.classList.remove('catalog__form-item--opened');
modalitemMaterial.classList.remove('catalog__form-item--nojs');
modalitemCollection.classList.remove('catalog__form-item--opened');
modalitemCollection.classList.remove('catalog__form-item--nojs');
modalitemPrice.classList.remove('catalog__form-item--opened');
modalitemPrice.classList.remove('catalog__form-item--nojs');

modalproductSection.addEventListener('click', function() {
  modalitemProduct.classList.toggle('catalog__form-item--opened');
  modalitemProduct.classList.toggle('catalog__form-item--nojs');
});

modalmaterialSection.addEventListener('click', function() {
  modalitemMaterial.classList.toggle('catalog__form-item--opened');
  modalitemMaterial.classList.toggle('catalog__form-item--nojs');
});

modalcollectionSection.addEventListener('click', function() {
  modalitemCollection.classList.toggle('catalog__form-item--opened');
  modalitemCollection.classList.toggle('catalog__form-item--nojs');
});

modalpriceSection.addEventListener('click', function() {
  modalitemPrice.classList.toggle('catalog__form-item--opened');
  modalitemPrice.classList.toggle('catalog__form-item--nojs');
});


//----------------------------modal filter--------------------------



const filter = document.querySelector('.catalog__filter-button');
const  modalFilter = document.querySelector('.modal-filter');
const overlay = document.querySelector('.page-body__overlay');
const pageBody = document.querySelector('.page-body');
const modalFilterClose = document.querySelector('.modal-filter-close');

filter.addEventListener('click', function() {
  overlay.classList.add('page-body__overlay--view');
  modalFilter.classList.add('modal-filter--opened');

  if (modalFilter.classList.contains('modal-filter--opened')) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }
});

const modalCloseHandler =(evt) => {
  evt.preventDefault();
  overlay.classList.remove('page-body__overlay--view');
  modalFilter.classList.remove('modal-filter--opened');
  modalLogin.classList.remove('modal-login--opened');
  pageBody.style.overflow = "auto";
}

modalFilterClose.addEventListener('click', modalCloseHandler);
overlay.addEventListener('click', modalCloseHandler);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalFilter.classList.contains('modal-filter--opened')) {
      evt.preventDefault();
      modalFilter.classList.remove('modal-filter--opened');
      overlay.classList.remove('page-body__overlay--view');
      pageBody.style.overflow = "auto";
    }
  }
});

// ---------------modal log in-----------------------

const login = document.querySelector('.main-nav__login');
const loginMobile = document.querySelector('.main-nav__log');
const  modalLogin = document.querySelector('.modal-login');
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
  modalLogin.classList.add('modal-login--opened');
  emailInput.focus();
  if (modalLogin.classList.contains('modal-login--opened')) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }
});

loginMobile.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('page-body__overlay--view');
  modalLogin.classList.add('modal-login--opened');
  emailInput.focus();
  if (modalLogin.classList.contains('modal-login--opened')) {
    pageBody.style.overflow = "hidden";
  } else {
    pageBody.style.overflow = "auto";
  }
});

modalLoginClose.addEventListener('click', modalCloseHandler);
overlay.addEventListener('click', modalCloseHandler);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains('modal-login--opened')) {
      evt.preventDefault();
      modalLogin.classList.remove('modal-login--opened');
      overlay.classList.remove('page-body__overlay--view');
      pageBody.style.overflow = "auto";
    }
  }
});

})();
