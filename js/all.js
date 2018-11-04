'use strict';

(function () {
 var menuBurger = document.querySelector('#menu-toggle');
 menuBurger.addEventListener('click', function () {
     menuBurger.classList.toggle('open');
     document.querySelector('.header__menu-list').classList.toggle('open');
 })
})();