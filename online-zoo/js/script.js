
// карусель с карточками животных
let animalsPrev = document.querySelector('.animals__prev');
let animalsNext = document.querySelector('.animals__next');
const swiper = document.querySelector('.animals__container');
let sliderWidth = document.querySelector('.animals__slider');
import listAnimals from "../js/listAnimals.js";
import listReviews from "../js/listReviews.js";
let listLength = listAnimals.length;

let widthUser = document.documentElement.clientWidth;
let amountCards = 6;
let widthTablet = 894;
let widthPhone = 540;
if (widthUser <= widthTablet) {
	amountCards = 4;
}
if (widthUser <= widthPhone) { amountCards = 4; }

function createItem(counter) {
	const animalsItem = document.createElement('div');
	const animalsImage = document.createElement('div');
	const animalsContent = document.createElement('div');
	const animalsText = document.createElement('div');
	const animalsTitle = document.createElement('h3');
	const animalsSubTitle = document.createElement('h4');
	const animalsIcons = document.createElement('div');
	animalsItem.classList.add('animals__item');
	animalsImage.classList.add('animals__image');
	animalsContent.classList.add('animals__content');
	animalsText.classList.add('animals__text');
	animalsTitle.classList.add('animals__title');
	animalsSubTitle.classList.add('animals__sub-title');
	animalsIcons.classList.add('animals__icons');
	animalsTitle.textContent = listAnimals[counter].title;
	animalsSubTitle.textContent = listAnimals[counter].subTitle;
	animalsImage.style.backgroundImage = `url(${listAnimals[counter].src})`;
	animalsIcons.style.backgroundImage = `url(${listAnimals[counter].srcIcon})`;
	animalsItem.append(animalsImage);
	animalsItem.append(animalsContent);
	animalsContent.append(animalsText);
	animalsContent.append(animalsIcons);
	animalsText.append(animalsTitle);
	animalsText.append(animalsSubTitle);
	animalsItem.classList.add('animals__item');
	return animalsItem;
}

function createSlide(amountCards, classSlide) {
	const animalsItems = document.createElement('div');
	animalsItems.classList.add('animals__items');
	animalsItems.classList.add(classSlide);
	for (let i = 0; i < amountCards; i++) {
		animalsItems.append(createItem(i));
	}
	swiper.append(animalsItems);
}

function randomArray(length) {
	let arrayNumbers = [];
	for (let i = 0; i < length; i++) {
		arrayNumbers[i] = i;
	}
	arrayNumbers.sort(() => Math.random() - 0.5);
	return arrayNumbers;
}

function createSlideRandom(amountCards, classSlide) {
	const animalsItems = document.createElement('div');
	animalsItems.classList.add('animals__items');
	animalsItems.classList.add(classSlide);
	let randomArrayCounter = randomArray(listLength);
	for (let i = 0; i < amountCards; i++) {
		animalsItems.append(createItem(randomArrayCounter[i]));
	}
	swiper.append(animalsItems);
}
createSlide(amountCards, 'active');

let currentItem = document.querySelector('.active');

sliderWidth.style.height = currentItem.offsetHeight + 'px';
console.log(currentItem.offsetHeight);
console.log(sliderWidth.offsetHeight);

console.log(currentItem);
animalsPrev.addEventListener('click', () => {
	createSlideRandom(amountCards, 'next');
	currentItem.classList.add('to-left');
	let animalsNext = document.querySelector('.next');
	animalsNext.classList.add('from-right');
	currentItem.addEventListener('animationend', () => {
		currentItem.classList.remove('active');
		animalsNext.classList.remove('next');
		animalsNext.classList.add('active');
		currentItem = document.querySelector('.active');
		currentItem.classList.remove('from-right');
	});
}
);
animalsNext.addEventListener('click', () => {
	createSlideRandom(amountCards, 'next');
	currentItem.classList.add('to-right');
	let animalsNext = document.querySelector('.next');
	animalsNext.classList.add('from-left');
	currentItem.addEventListener('animationend', () => {
		currentItem.classList.remove('active');
		animalsNext.classList.remove('next');
		animalsNext.classList.add('active');
		currentItem = document.querySelector('.active');
		currentItem.classList.remove('from-left');
	});
}
);

//блок карусель отзывы
function createReview(counterReview) {
	const reviewItem = document.createElement('div');
	const reviewPhoto = document.createElement('div');
	const reviewBlog = document.createElement('div');
	const reviewName = document.createElement('div');
	const reviewCountry = document.createElement('div');
	const reviewText = document.createElement('div');
	const reviewCover = document.createElement('div');
	const reviewInfo = document.createElement('div');
	reviewItem.classList.add('testimonials__item');
	reviewPhoto.classList.add('testimonials__photo');
	reviewBlog.classList.add('testimonials__blog');
	reviewName.classList.add('testimonials__name');
	reviewCountry.classList.add('testimonials__country-time');
	reviewText.classList.add('testimonials__text');
	reviewCover.classList.add('testimonials__cover');
	reviewInfo.classList.add('testimonials__info');
	reviewName.textContent = listReviews[counterReview].name;
	reviewCountry.textContent = listReviews[counterReview].countryTime;
	reviewPhoto.style.backgroundImage = `url(${listReviews[counterReview].src})`;
	reviewText.textContent = listReviews[counterReview].text;
	reviewItem.append(reviewCover);
	reviewCover.append(reviewInfo);
	reviewInfo.append(reviewPhoto);
	reviewInfo.append(reviewBlog);
	reviewBlog.append(reviewName);
	reviewBlog.append(reviewCountry);
	reviewCover.append(reviewText);
	reviewItem.classList.add('testimonials__item');

	return reviewItem;
}
//добавляем отзывы в линию

const reviewsItems = document.createElement('div');
const swiperReviews = document.querySelector('.reviews__container'); let currentReview;
let containerWidth = document.querySelector('.testimonials__container');
reviewsItems.classList.add('testimonials__items');
let listLengthReviews = listReviews.length;
for (let i = 0; i < listLengthReviews; i++) {
	reviewsItems.append(createReview(i));
}
swiperReviews.append(reviewsItems);
let sliderWidthReviews = document.querySelector('.testimonials__items');

// задаем отзывам ширину
currentReview = document.querySelectorAll('.testimonials__item');
for (let i = 0; i < listLengthReviews; i++) {
	if (document.documentElement.clientWidth >= 1000) {
		currentReview[i].style.width = ((containerWidth.offsetWidth - 60 - (30 * 3)) / 4) + 'px';
		currentReview[i].style.height = 391 + 'px';
	}
	if ((document.documentElement.clientWidth >= 640) && (document.documentElement.clientWidth < 1000)) {
		currentReview[i].style.width = ((containerWidth.offsetWidth - 60 - (30 * 3)) / 3) + 'px';
		currentReview[i].style.height = 391 + 'px';
	}

}

//задаем высоты всем блокам
let currentReviews = document.querySelector('.reviews__container');
let sliderReviews = document.querySelector('.testimonials__slider');
console.log(currentReview[0].style.height);
if (document.documentElement.clientWidth >= 640) {
	currentReviews.style.height = currentReview[0].offsetHeight + 'px';
	sliderWidthReviews.style.height = currentReview[0].offsetHeight + 'px';
	sliderReviews.style.height = currentReview[0].offsetHeight + 'px';
}
// if (document.documentElement.clientWidth < 640) {
// 	currentReviews.style.height = currentReview[0].offsetHeight * 3 + 60 + 'px';
// 	console.log(currentReview[0].offsetHeight);
// 	sliderWidthReviews.style.height = currentReview[0].offsetHeight * 3 + 60 + 'px';
// 	console.log(currentReview[0].offsetHeight);
// 	sliderReviews.style.height =
// 		109 * 3 + 60 + 'px';
// 	console.log(sliderReviews.offsetHeight);
// }
// функции, чтобы сдвинуть полосу с отсупами


function distance(steps) {
	let inputStep = - (currentReview[0].clientWidth + 30) * steps;
	return inputStep;
}

function distanceMinus(range, step) {
	let inputStep = - (currentReview[0].clientWidth + 30) * step + currentReview[0].clientWidth * (step - range) + 30 * (step - range);
	return inputStep;
}

//высчитываем насколько сдвинуть полосу с отступами
let line = document.querySelector('.testimonials__line');
let lastStep = 0;

line.addEventListener('input', () => {

	console.log((containerWidth.offsetWidth - 60 - (30 * 3)) / 4);
	console.log(currentReview[0].offsetWidth);

	if (lastStep < range.value) {
		sliderWidthReviews.style.cssText = `transform:
	 translate(${distance(range.value)}px, 0%)`;
		lastStep = range.value;
	}
	if (lastStep > range.value) {
		sliderWidthReviews.style.cssText = `transform:
	 translate(${distanceMinus(range.value, lastStep)}px, 0%)`;
		lastStep = range.value;
	}
})

// отзывы попап.
let testimonialsReview = document.querySelectorAll('.testimonials__view');
let testimonialsReviews = document.querySelector('.testimonials__views');
console.log(widthUser);
if (widthUser <= 640) {
	sliderWidthReviews.classList.add('unvisible');
	for (let i = 0; i < listLengthReviews; i++) {
		// // 	console.log(currentReview[i]);
		currentReview[i].classList.add('unvisible');
	}
	for (let i = 0; i < 3; i++) {
		testimonialsReview[i].classList.remove('unvisible');
	}
	testimonialsReviews.classList.remove('unvisible');





}
let mainTestimonials = document.querySelector('.main__testimonials');
let first = document.querySelector('.class-first');
let second = document.querySelector('.class-second');
let third = document.querySelector('.class-third');
let blackDiv = document.querySelector('div');
let closeDiv = document.querySelector('.close-div');
//console.log(testimonialsReview[0]);
let reviewClick; 
testimonialsReviews.addEventListener('click', (e) => {
	if (e.target.closest('.class-first') !== null) {
		reviewClick = document.createElement('div');
		blackDiv.classList.remove('unvisible');

		reviewClick.append(createReview(0));
		reviewClick.append(closeDiv);
		closeDiv.classList.add('click-close');
		mainTestimonials.append(reviewClick);
		reviewClick.classList.add('click-review');
	}
	if (e.target.closest('.class-second') !== null) {
		reviewClick = document.createElement('div');
		blackDiv.classList.remove('unvisible');

		reviewClick.append(createReview(1));
		reviewClick.append(closeDiv);
		closeDiv.classList.add('click-close');
		mainTestimonials.append(reviewClick);
		reviewClick.classList.add('click-review');

	}
	if (e.target.closest('.class-third') !== null) {
		reviewClick = document.createElement('div');
		blackDiv.classList.remove('unvisible');

		reviewClick.append(createReview(2));
		reviewClick.append(closeDiv);
		closeDiv.classList.add('click-close');
		mainTestimonials.append(reviewClick);
		reviewClick.classList.add('click-review');
	}
});
closeDiv.addEventListener('click', (e) => {
	reviewClick.classList.add('unvisible');
	reviewClick.remove();
}
);
blackDiv.addEventListener('click', (e) => {
	reviewClick.classList.add('unvisible');
	reviewClick.remove();
}
);






