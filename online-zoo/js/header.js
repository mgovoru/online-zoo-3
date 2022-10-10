//бургер поп-ап
let body = document.querySelector('body');
let logo = document.querySelector('.item-logo');
let design = document.querySelector('.item-design');
const burger = document.querySelector('.header__click');
const burgerMenu = document.querySelector('.header__menu');
let close = document.querySelector('.item-logo__close');
let blackDiv = document.querySelector('div');
burger.addEventListener('click', () => {
	burgerMenu.classList.add('burger-menu');
	logo.classList.remove('unvisible');
	design.classList.remove('unvisible');
	blackDiv.classList.remove('unvisible');
})
close.addEventListener('click', () => {
	burgerMenu.classList.remove('burger-menu');
	blackDiv.classList.add('unvisible');
})
blackDiv.addEventListener('click', () => {
	burgerMenu.classList.remove('burger-menu');
	blackDiv.classList.add('unvisible');
})